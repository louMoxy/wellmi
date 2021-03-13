import Layout from '../components/layout'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { usePlugin, ModalProvider } from 'tinacms'
import { useGithubJsonForm } from 'react-tinacms-github'
import Head from '../components/head'
import { GitFile } from 'react-tinacms-github/dist/src/form/useGitFileSha'
import { getLocalFiles } from '../utils/getLocalFiles'
import { useCreatePage } from '../utils/useCreatePage'
import { getGlobalStaticProps } from '../utils/getGlobalStaticProps'
import { useCreateBlogPage } from '../utils/useCreateBlogPage'
import { InlineForm, InlineBlocks } from 'react-tinacms-inline'
import { PAGE_BLOCKS } from '../utils/blocks'

const formOptions = {
  label: 'Page',
  fields: [
    { name: 'title', component: 'text' }
  ]
}

interface Props { file: GitFile, allPages: string[], posts: string[], global: any }

export default function Page ({ file, allPages, global, posts }: Props) {
  useCreatePage(allPages)
  useCreateBlogPage(posts)
  const [data, form] = useGithubJsonForm(file, formOptions)
  usePlugin(form)
  const { title, bgColor } = data
  return (
    <Layout bg={data.bgColor} dark={false} global={global?.props}>
      <Head>
        <title>{title || 'Wellmi'}</title>
      </Head>
      <ModalProvider>
        <InlineForm form={form}>
          <InlineBlocks name="blocks" blocks={PAGE_BLOCKS as any} itemProps={{ bgColor, posts }} />
        </InlineForm>
      </ModalProvider>
    </Layout>
  )
}
// /**
//  * Fetch data with getStaticProps based on 'preview' mode
//  */
export const getStaticProps = async function ({ preview, previewData }) {
  const global = await getGlobalStaticProps(preview, previewData)
  const allPages = (await getLocalFiles('content') || []).map((fileName) => fileName.replace('content/', '').replace('.json', ''))
  const allBlogs = (await getLocalFiles('content/blog') || []).map((fileName) => fileName.replace('content/blog/', '').replace('.json', ''))

  const fileRelativePath = 'content/index.json'
  if (preview) {
    try {
      const previewProps = await getGithubPreviewProps({
        ...previewData,
        fileRelativePath,
        parse: parseJson
      })
      return {
        props: {
          allPages,
          global,
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

  const content = (await import('../content/index.json')).default

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
