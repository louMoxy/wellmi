import { useEffect } from "react"
import styled from "styled-components"
import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import { useGithubJsonForm } from "react-tinacms-github"
import Router from "next/router"

import Head from "../components/head"
import Layout from "../components/layout"
import WelcomeBanner from "../components/WelcomeBanner"
import Partners from "../components/Partners"
import WorldclassSection from "../components/WorldClassComponent"
import LastestInsights from "../components/LastestInsights"
import Supporting from "../components/Supporting"
import { usePlugin } from "tinacms"
import getGlobalStaticProps from "../utils/getGlobalStaticProps"

const Page = ({ file, preview, styleFile }) => {
  // const formOptions = {
  //   label: "home page",
  //   fields: [
  //     {
  //       name: "title",
  //       component: "text",
  //     },
  //   ],
  // }
  // const [data, form] = useGithubJsonForm(file, formOptions)
  // usePlugin(form)

  // const [styleData, styleForm] = useGlobalStyleForm(styleFile, preview)
  return (
    <Layout>
      <Head title="Home" />
      <WelcomeBanner />
      <Partners />
      <WorldclassSection />
      <LastestInsights />
      <Supporting />
    </Layout>
  )
}

/**
 * Fetch data with getStaticProps based on 'preview' mode
 */
export const getStaticProps = async function ({ preview, previewData }) {
  const global = await getGlobalStaticProps(preview, previewData)

  if (preview) {
    // get data from github
    const file = (
      await getGithubPreviewProps({
        ...previewData,
        fileRelativePath: "content/home.json",
        parse: parseJson,
      })
    ).props

    return {
      props: {
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
      file: {
        fileRelativePath: "content/home.json",
        data: (await import("../content/home.json")).default,
      },
      ...global,
    },
  }
}

export default Page
