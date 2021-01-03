import { getGithubPreviewProps, parseJson } from "next-tinacms-github"

export default async (preview, previewData) => {
  if (preview) {
    const styleFormsProps = await getGithubPreviewProps({
      ...previewData,
      fileRelativePath: "content/styles.json",
      parse: parseJson,
    })
    const global = (
      await getGithubPreviewProps({
        ...previewData,
        fileRelativePath: "global.json",
        parse: parseJson,
      })
    ).props

    return {
      styleFile: styleFormsProps.props.file,
      global,
    }
  }

  return {
    styleFile: {
      data: (await import("../content/styles.json")).default,
      fileRelativePath: "content/styles.json",
    },
    global: {
      data: (await import("../content/global.json")).default,
      fileRelativePath: "content/global.json",
    },
  }
}
