import Layout from '../../components/layout'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { usePlugin, ModalProvider } from 'tinacms'
import { useGithubJsonForm, createGithubDeleteAction } from 'react-tinacms-github'
import { GitFile } from 'react-tinacms-github/dist/src/form/useGitFileSha'
import { useRouter } from 'next/router'
import { fileToUrl } from '../../utils/fileToUrl'
import { useCreatePage } from '../../utils/useCreatePage'
import { useCreateBlogPage } from '../../utils/useCreateBlogPage'
import { InlineForm, InlineBlocks } from 'react-tinacms-inline'
import { getGlobalStaticProps } from '../../utils/getGlobalStaticProps'
import { PAGE_BLOCKS } from '../../utils/blocks'
import getBlogPosts from '../../utils/getBlogPosts'
import { config } from '../../utils/globalCMSConfig'
import Head from '../../components/head'

interface Props {file: GitFile, allPages: string[], allBlogs: string[], global: any, posts?: []}

export default function Page ({ file, allPages, allBlogs, global, posts = [] }: Props) {
  useCreatePage(allPages)
  useCreateBlogPage(allBlogs)
  const router = useRouter()

  const deleteAction = createGithubDeleteAction()

  const formConfig = {
    label: 'New post',
    actions: [deleteAction],
    fields: [
      ...config,
      {
        name: 'publish',
        label: 'Publish the blog to go live?',
        component: 'toggle',
        default: false
      }
    ]
  }

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  const [data, form] = useGithubJsonForm(file, formConfig)
  usePlugin(form)
  const { bgColor, title } = data
  return (
    <>
      <Head>
        <title>{title || 'Wellmi'}</title>
      </Head>
      <ModalProvider>
        <InlineForm form={form}>
           <Layout bg={data.bgColor} dark={true} global={global?.props}>
            <InlineBlocks name="blocks" blocks={PAGE_BLOCKS as any} itemProps={{ bgColor, posts }} />
           </Layout>
        </InlineForm>
      </ModalProvider>
  </>
  )
}

// /**
//  * Fetch data with getStaticProps based on 'preview' mode
//  */
export const getStaticProps = async function ({ preview, previewData, params }) {
  const pages = await getBlogPosts(preview, previewData, 'content')
  const allPages = pages.map((page: any) => page.data.title?.toLowerCase()).filter(Boolean)
  const blogs = await getBlogPosts(preview, previewData, 'content/blog')
  const allBlogs = blogs.map((post: any) => post.data.title?.toLowerCase()).filter(Boolean)
  const global = await getGlobalStaticProps(preview, previewData)
  const { pageName } = params
  const fileRelativePath = `content/blog/${pageName}.json`
  if (preview) {
    try {
      const previewProps = await getGithubPreviewProps({
        ...previewData,
        fileRelativePath,
        parse: parseJson
      })
      return {
        props: {
          global,
          allPages,
          allBlogs,
          previewURL: `https://raw.githubusercontent.com/${previewData.working_repo_full_name}/${previewData.head_branch}`,
          ...previewProps.props
        }
      }
    } catch (e) {
      return {
        props: {
          global,
          allPages,
          allBlogs,
          previewURL: `https://raw.githubusercontent.com/${previewData.working_repo_full_name}/${previewData.head_branch}`,
          file: {
            fileRelativePath,
            data: null
          }
        }
      }
    }
  }

  const content = (await import(`../../content/blog/${pageName}.json`)).default

  return {
    props: {
      global,
      allPages,
      allBlogs,
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath,
        data: content
      }
    }
  }
}

export const getStaticPaths = async function () {
  const fg = require('fast-glob')
  const contentDir = 'content/blog'
  const files = await fg(`${contentDir}**/*.json`)
  const paths = files
    .filter((file) => !file.endsWith('index.json'))
    .map((file) => {
      const slug = fileToUrl(file, contentDir)
      return { params: { pageName: slug } }
    })
  return {
    fallback: true,
    paths
  }
}
