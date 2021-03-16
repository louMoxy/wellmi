import Layout from '../../components/layout'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { usePlugin, ModalProvider } from 'tinacms'
import { useGithubJsonForm } from 'react-tinacms-github'
import Head from '../../components/head'
import { Box, Text, Image, Heading, Anchor, Stack } from 'grommet'
import { GitFile } from 'react-tinacms-github/dist/src/form/useGitFileSha'
import { getGlobalStaticProps } from '../../utils/getGlobalStaticProps'
import { useCreateBlogPage } from '../../utils/useCreateBlogPage'
import { InlineForm, InlineBlocks } from 'react-tinacms-inline'
import { PAGE_BLOCKS } from '../../utils/blocks'
import getBlogPosts from '../../utils/getBlogPosts'
import theme from '../../components/layout/theme'
import { useCreatePage } from '../../utils/useCreatePage'

const formOptions = {
  label: 'Page',
  fields: [
    { name: 'title', component: 'text' }
  ]
}
const options = { year: 'numeric', month: 'long', day: 'numeric' }

interface Post {
  fileName: string
  data: {
    featureImg: string
    date: Date
    publish: boolean
    description?: string
    title?: string
  }
}

interface Props { file: GitFile, posts: Post[], global: any, allPages,
  allBlogs, featuredBlog?: Post }

export default function Page ({
  file, global, posts, allPages,
  allBlogs, featuredBlog
}: Props) {
  useCreateBlogPage(allBlogs)
  useCreatePage(allPages)
  const [data, form] = useGithubJsonForm(file, formOptions)
  usePlugin(form)
  const { title, bgColor } = data
  return (
    <Layout bg={data.bgColor} dark={true} global={global?.props}>
      <Head>
        <title>{title || 'Wellmi'}</title>
      </Head>
      <ModalProvider>
        <InlineForm form={form}>
          <InlineBlocks name="blocks" blocks={PAGE_BLOCKS as any} itemProps={{ bgColor, posts }} />
          <Box justify="center" direction="row" margin={{ top: 'medium' }}>
            <Box width="xlarge" pad="medium">
              {featuredBlog?.data && (
                <Box
                  direction="row"
                  background="linear-gradient(90deg, transparent 30%, white 30.1%);"
                  wrap={true}
                >
                  <Box basis="1/2" pad="medium" flex={true}>
                    <Stack anchor="top-left">
                      <Image src={featuredBlog.data.featureImg} fill="horizontal" alt={featuredBlog.data.featureImg}/>
                      <Box
                        background="rgba(2,122, 172, 0.6)"
                        round="xsmall"
                        pad="small"
                        margin="small"
                      >
                        <Text color="white" size="xsmall">
                          {new Date(featuredBlog.data.date).toLocaleDateString('en-GB', options)}
                        </Text>
                      </Box>
                    </Stack>
                  </Box>
                  <Box
                    basis="1/2"
                    pad="medium"
                    width={{ min: '400px' }}
                    background="white"
                    flex={true}
                  >
                    <Heading style={{ fontWeight: 'normal' }} size="small">
                      {featuredBlog.data.title}
                    </Heading>
                    <Text size="small" color={theme.global.colors['text-light'].light}>
                      {featuredBlog.data.description}
                    </Text>
                    <Anchor href={`/blog/${featuredBlog.fileName}`} margin={{ top: 'medium' }}>
                      <Text style={{ fontWeight: 'normal' }}>Read More</Text>
                    </Anchor>
                  </Box>
                </Box>
              )}
              <Box direction="row" wrap>
                {posts.map(({ data, fileName }) => (
                  <Box
                    basis="1/2"
                    flex
                    key={fileName}
                    pad="medium"
                    margin={{ bottom: 'medium' }}
                    width={{ min: '300px', max: '500px' }}
                  >
                    <Image src={data.featureImg} fill="horizontal" alt={data.featureImg}/>
                    <Text size="small" margin={{ top: 'medium', bottom: 'small' }}>
                      {new Date(data.date).toLocaleDateString('en-GB', options)}
                    </Text>
                    <Text>{data.title}</Text>
                    <Anchor href={`/blog/${fileName}`} margin={{ top: 'small' }}>
                      <Text style={{ fontWeight: 'normal' }}>Read More</Text>
                    </Anchor>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </InlineForm>
      </ModalProvider>
    </Layout>
  )
}
// /**
//  * Fetch data with getStaticProps based on 'preview' mode
//  */
export const getStaticProps = async function ({ preview, previewData }) {
  const pages = await getBlogPosts(preview, previewData, 'content')
  const allPages = pages.map((page: any) => page.data.title?.toLowerCase()).filter(Boolean)
  const blogs = await getBlogPosts(preview, previewData, 'content/blog')
  const allBlogs = blogs.map((post: any) => post.data.title?.toLowerCase()).filter(Boolean)
  const global = await getGlobalStaticProps(preview, previewData)
  const posts = await getBlogPosts(preview, previewData, 'content/blog')
  const fileRelativePath = 'content/blog.json'
  const featuredBlog = posts.length > 0 ? posts[0] : undefined
  const blogPosts = posts.length > 1 ? posts.splice(1) : []
  if (preview) {
    try {
      const previewProps = await getGithubPreviewProps({
        ...previewData,
        fileRelativePath,
        parse: parseJson
      })
      return {
        props: {
          featuredBlog,
          global,
          allPages,
          allBlogs,
          posts: blogPosts,
          previewURL: `https://raw.githubusercontent.com/${previewData.working_repo_full_name}/${previewData.head_branch}`,
          ...previewProps.props
        }
      }
    } catch (e) {
      return {
        props: {
          featuredBlog,
          global,
          allPages,
          allBlogs,
          posts: blogPosts,
          previewURL: `https://raw.githubusercontent.com/${previewData.working_repo_full_name}/${previewData.head_branch}`,
          file: {
            fileRelativePath,
            data: null
          }
        }
      }
    }
  }

  const content = (await import('../../content/blog.json')).default

  return {
    props: {
      featuredBlog,
      global,
      posts: blogPosts,
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
