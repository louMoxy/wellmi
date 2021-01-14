import { useState, useEffect } from "react"
import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import { useGithubJsonForm } from "react-tinacms-github"
import { InlineForm, InlineBlocks } from "react-tinacms-inline"
import { usePlugin } from "tinacms"
import { Box, Text, Image, Heading, Anchor, Stack } from "grommet"
import Head from "@components/head"
import Layout from "@components/layout"
import { getBlogPosts } from "@utils"
import getGlobalStaticProps from "../../utils/getGlobalStaticProps"
import { Banner, banner_template } from "../../components/Banner"
import { TextContent, textContent_template } from "../../components/TextContent"
import useCreateBlogPage from "../../hooks/useCreateBlogPage"
import theme from "../../components/layout/theme"
import { config } from "../../utils/globalCMSConfig"

const formConfig = {
  id: "blog",
  label: "News",
  fields: config,
  initialValues: {
    title: "Blog",
    bgColor: "#20222E",
  },
}
const options = { year: "numeric", month: "long", day: "numeric" }

const Blog = ({ posts = [], file, preview, global }) => {
  useCreateBlogPage(posts)
  const [data, form, loading] = useGithubJsonForm(file, formConfig)
  const [featuredBlog, setFeaturedBlog] = useState()
  const [blogs, setBlogs] = useState([])
  if (loading) {
    return <p>Loading</p>
  }
  useEffect(() => {
    if (posts.length > 0) {
      setFeaturedBlog(posts.shift())
    }
    if (posts.length > 0) {
      setBlogs(posts)
    }
  }, [posts])
  usePlugin(form)
  const { title } = data
  return (
    <InlineForm form={form}>
      <Layout bg={data.bgColor} dark={true} global={global}>
        <Head title={title} />
        <InlineBlocks name="blocks" blocks={PAGE_BLOCKS} itemProps={{ bgColor: data.bgColor }} />
        <Box justify="center" direction="row" margin={{ top: "medium" }}>
          <Box width="xlarge" pad="medium">
            {featuredBlog?.data && (
              <Box
                direction="row"
                background="linear-gradient(90deg, transparent 30%, white 30.1%);"
                wrap={true}
              >
                <Box basis="1/2" pad="medium" flex={true}>
                  <Stack anchor="top-left">
                    <Image src={featuredBlog.data.featureImg} fill="horizontal" />
                    <Box
                      background="rgba(2,122, 172, 0.6)"
                      round="xsmall"
                      pad="small"
                      margin="small"
                    >
                      <Text color="white" size="xsmall">
                        {new Date(featuredBlog.data.date).toLocaleDateString("en-GB", options)}
                      </Text>
                    </Box>
                  </Stack>
                </Box>
                <Box
                  basis="1/2"
                  pad="medium"
                  width={{ min: "400px" }}
                  background="white"
                  flex={true}
                >
                  <Heading style={{ fontWeight: "normal" }} size="small">
                    {featuredBlog.data.title}
                  </Heading>
                  <Text size="small" color={theme.global.colors["text-light"].light}>
                    {featuredBlog.data.description}
                  </Text>
                  <Anchor href={`/blog/${featuredBlog.fileName}`} margin={{ top: "medium" }}>
                    <Text style={{ fontWeight: "normal" }}>Read More</Text>
                  </Anchor>
                </Box>
              </Box>
            )}
            <Box direction="row" wrap>
              {blogs.map(({ data, fileName }) => (
                <Box
                  basis="1/2"
                  flex
                  key={fileName}
                  pad="medium"
                  margin={{ bottom: "medium" }}
                  width={{ min: "300px" }}
                >
                  <Image src={data.featureImg} fill="horizontal" />
                  <Text size="small" margin={{ top: "medium", bottom: "small" }}>
                    {new Date(data.date).toLocaleDateString("en-GB", options)}
                  </Text>
                  <Text>{data.title}</Text>
                  <Anchor href={`/blog/${fileName}`} margin={{ top: "small" }}>
                    <Text style={{ fontWeight: "normal" }}>Read More</Text>
                  </Anchor>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Layout>
    </InlineForm>
  )
}

const PAGE_BLOCKS = {
  banner: {
    Component: Banner,
    template: banner_template,
  },
  textContent: {
    Component: TextContent,
    template: textContent_template,
  },
}

/**
 * Fetch data with getStaticProps based on 'preview' mode
 */
export const getStaticProps = async function ({ preview, previewData }) {
  try {
    const posts = await getBlogPosts(preview, previewData, "content/blog")
    const global = await getGlobalStaticProps(preview, previewData)
    if (preview) {
      const file = (
        await getGithubPreviewProps({
          ...previewData,
          fileRelativePath: "blog.json",
          parse: parseJson,
        })
      ).props
      return {
        props: {
          ...global,
          ...file,
          preview,
          posts,
        },
      }
    }
    return {
      props: {
        ...global,
        sourceProvider: null,
        error: null,
        preview: false,
        file: {
          fileRelativePath: "content/blog.json",
          data: (await import("../../content/blog.json")).default,
        },
        posts,
      },
    }
  } catch (e) {
    return {
      props: {
        sourceProvider: null,
        error: null,
        preview: false,
        file: {
          fileRelativePath: "content/blog.json",
          data: (await import("../../content/blog.json")).default,
        },
        ...global,
      },
    }
  }
}

export default Blog
