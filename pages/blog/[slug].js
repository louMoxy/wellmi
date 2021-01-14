import { useRouter } from "next/router"
import { InlineForm, InlineBlocks } from "react-tinacms-inline"
import { useGithubJsonForm } from "react-tinacms-github"
import getGlobalStaticProps from "../../utils/getGlobalStaticProps"
import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import { WYSIWYG, WYSIWYG_template } from "../../components/WYSIWYG"
import { ImageBlock, image_template } from "../../components/ImageBlock"
import Head from "@components/head"
import Layout from "@components/layout"
import { Banner, banner_template } from "../../components/Banner"
import { TextContent, textContent_template } from "../../components/TextContent"
import { config } from "../../utils/globalCMSConfig"

const BlogPage = ({ file, global, previewURL }) => {
  const router = useRouter()
  if (!file) {
    ;<Layout global={{}}>
      <Head title={"Loading"} />
      <p>This page is currently loading, please check back in a couple of minutes...</p>
    </Layout>
  }

  if (router.isFallback) {
    return <p>Loading....</p>
  }

  const formOptions = {
    label: "Blog page",
    fields: config,
  }

  const [data, form] = useGithubJsonForm(file, formOptions)
  return (
    <InlineForm form={form}>
      <Layout bg={data.bgColor} dark={true} global={global}>
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
  wysiwyg: {
    Component: WYSIWYG,
    template: WYSIWYG_template,
  },
  image: {
    Component: ImageBlock,
    template: image_template,
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
        previewURL: `https://raw.githubusercontent.com/${previewData.working_repo_full_name}/${previewData.head_branch}`,
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
      const slug = file.replace(".json", "").replace(contentDir, "").replace("/", "")
      return { params: { slug } }
    })
  return {
    fallback: true,
    paths,
  }
}

export default BlogPage
