import Link from "next/link"
import Error from "next/error"
import { useRouter } from "next/router"
import { InlineForm, InlineBlocks } from "react-tinacms-inline"
import { useGithubJsonForm } from "react-tinacms-github"
import getGlobalStaticProps from "../../utils/getGlobalStaticProps"
import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import { InlineWysiwyg } from "react-tinacms-editor"

import Head from "@components/head"
import Layout from "@components/layout"
import { Banner, banner_template } from "../../components/Banner"
import { TextContent, textContent_template } from "../../components/TextContent"
import { config } from "../../utils/globalCMSConfig"

import Toc from "@components/Toc"
import PostFeedback from "@components/post-feedback"
import DocWrapper from "@components/doc-wrapper"
import MarkdownWrapper from "@components/markdown-wrapper"
import { PrimaryAnchor } from "@components/Anchor"
import { usePlugin, useCMS } from "tinacms"
import RichText from "@components/rich-text"
import { createToc, getBlogPosts } from "@utils"
import useCreateBlogPage from "../../hooks/useCreateBlogPage"

const BlogPage = ({ file, global }) => {
  //   const cms = useCMS()
  //   const previewURL = props.previewURL || ""
  //   const router = useRouter()
  if (!file) {
    return <Error statusCode={404} />
  }

  //   if (router.isFallback) {
  //     return <div>Loading...</div>
  //   }
  //   useCreateBlogPage(props.posts)
  const formOptions = {
    label: "Blog page",
    fields: [],
  }

  const [data, form] = useGithubJsonForm(file, formOptions)
  return (
    <InlineForm form={form}>
      <Layout bg={data.bgColor} global={global}>
        <Head title={data.title} />
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
export const getStaticProps = async function ({ preview, previewData, params }) {
  const { slug } = params
  const fileRelativePath = `content/blog/${slug}.json`
  const global = await getGlobalStaticProps(preview, previewData)
  if (preview) {
    const previewProps = await getGithubPreviewProps({
      ...previewData,
      fileRelativePath,
      parse: parseJson,
    })
    return {
      props: {
        ...global,
        // previewURL: `https://raw.githubusercontent.com/${previewData.working_repo_full_name}/${previewData.head_branch}`,
        ...previewProps.props,
      },
    }
  }

  const content = (await import(`../../content/blog/${slug}.json`)).default

  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      ...global,
      file: {
        fileRelativePath,
        data: content,
      },
    },
  }
}

export const getStaticPaths = async function () {
  const fg = require("fast-glob")
  const contentDir = "content/blog"
  const files = await fg(`${contentDir}**/*.json`)
  const paths = files
    .filter((file) => !file.endsWith("index.json"))
    .map((file) => {
      const path = file.substring(contentDir.length + 1, file.length - 3)
      return { params: { slug: path } }
    })
  return {
    fallback: true,
    paths,
  }
}

export default BlogPage
