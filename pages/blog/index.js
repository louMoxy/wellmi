import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import { useGithubJsonForm, useGithubToolbarPlugins } from "react-tinacms-github"
import { InlineForm, InlineBlocks } from "react-tinacms-inline"
import { usePlugin } from "tinacms"
import Head from "@components/head"
import Layout from "@components/layout"
import { getBlogPosts } from "@utils"
import getGlobalStaticProps from "../../utils/getGlobalStaticProps"
import { Banner, banner_template } from "../../components/Banner"
import { TextContent, textContent_template } from "../../components/TextContent"
import useCreateBlogPage from "../../hooks/useCreateBlogPage"
import BlogCard from "@components/blogCard"
import { config } from "../../utils/globalCMSConfig"

const formConfig = {
  id: "blog",
  label: "Blog",
  fields: config,
  initialValues: {
    title: "Blog",
    bgColor: "#20222E",
  },
}

const Blog = ({ posts, file, preview, global }) => {
  useCreateBlogPage(posts)
  const [data, form, loading] = useGithubJsonForm(file, formConfig)
  if (loading) {
    return <p>Loading</p>
  }
  usePlugin(form)
  const { title } = data
  return (
    <InlineForm form={form}>
      <Layout bg={data.bgColor} dark={true} global={global}>
        <Head title={title} />
        <InlineBlocks name="blocks" blocks={PAGE_BLOCKS} itemProps={{ bgColor: data.bgColor }} />
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
