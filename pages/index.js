import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import { useGithubJsonForm } from "react-tinacms-github"
import { InlineForm, InlineBlocks } from "react-tinacms-inline"
import Head from "../components/head"
import Layout from "../components/layout"
import { WelcomeBanner, banner_template } from "../components/WelcomeBanner"
import { ImageAndText, imageAndText_template } from "../components/ImageAndTextComponent"
import { latestInsights_template, LatestInsights } from "../components/LastestInsights"
import { supporting_template, Supporting } from "../components/Supporting"
import { usePlugin } from "tinacms"
import { getBlogPosts } from "@utils"
import getGlobalStaticProps from "../utils/getGlobalStaticProps"
import { config } from "../utils/globalCMSConfig"
import { ImageCard, imageCard_template } from "../components/largeImageCard"
import { imageAndContent_template, ImageAndContent } from "../components/ImageAndContent"
import { textContent_template, TextContent } from "../components/TextContent"
import { image_template, ImageBlock } from "../components/ImageBlock"
import { partners_template, Partners } from "../components/Partners"

const formConfig = {
  id: "homepage",
  label: "Home Page",
  fields: config,
  initialValues: {
    title: "Wellmi",
    bgColor: "#00E9A3",
  },
}

const Page = ({ file, preview, global, posts }) => {
  const [data, form, loading] = useGithubJsonForm(file, formConfig)
  if (loading) {
    return <p>Loading</p>
  }
  usePlugin(form)
  const { title, bgColor } = data
  return (
    <InlineForm form={form}>
      <Layout bg={data.bgColor} dark={false} global={global}>
        <Head title={title} />
        <InlineBlocks name="blocks" blocks={PAGE_BLOCKS} itemProps={{ bgColor, posts }} />
      </Layout>
    </InlineForm>
  )
}

const PAGE_BLOCKS = {
  banner: {
    Component: WelcomeBanner,
    template: banner_template,
  },
  imageAndContent: {
    Component: ImageAndContent,
    template: imageAndContent_template,
  },
  textContent: {
    Component: TextContent,
    template: textContent_template,
  },
  imageContent: {
    Component: ImageBlock,
    template: image_template,
  },
  ImageCard: {
    Component: ImageCard,
    template: imageCard_template,
  },
  partners: {
    Component: Partners,
    template: partners_template,
  },
  imageAndText: {
    Component: ImageAndText,
    template: imageAndText_template,
  },
  latestInsights: {
    Component: LatestInsights,
    template: latestInsights_template,
  },
  supporting: {
    Component: Supporting,
    template: supporting_template,
  },
}

/**
 * Fetch data with getStaticProps based on 'preview' mode
 */
export const getStaticProps = async function ({ preview, previewData }) {
  const global = await getGlobalStaticProps(preview, previewData)
  const posts = await getBlogPosts(preview, previewData, "content/blog")
  const publishedPosts = posts.filter((p) => p.data.publish).slice(0, 3) || []

  if (preview) {
    // get data from github
    const file = (
      await getGithubPreviewProps({
        ...previewData,
        fileRelativePath: "home.json",
        parse: parseJson,
      })
    ).props

    return {
      props: {
        posts: publishedPosts,
        ...file,
        ...global,
      },
    }
  }
  // render from the file system.
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      posts: publishedPosts,
      file: {
        fileRelativePath: "content/home.json",
        data: (await import("../content/home.json")).default,
      },
      ...global,
    },
  }
}

export default Page
