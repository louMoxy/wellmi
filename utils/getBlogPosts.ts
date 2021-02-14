import {getFiles as getGithubFiles, getGithubPreviewProps, parseMarkdown} from 'next-tinacms-github'

export default async (preview, previewData, contentDir) => {
  const fs = require('fs')
  const files = preview
    ? await getGithubFiles(
        contentDir,
        previewData.working_repo_full_name,
        previewData.head_branch,
        previewData.github_access_token
      )
    : await getLocalFiles(contentDir)
  const posts = await Promise.all(
    files.map(async (file) => {
      if (preview) {
        const previewProps = await getGithubPreviewProps({
          ...previewData,
          fileRelativePath: file,
          parse: parseMarkdown
        })
        return {
          fileName: file.replace('.json', '').replace(contentDir, '').replace('/', ''),
          fileRelativePath: file,
          data: previewProps.props.file?.data
        }
      }
      const content = fs.readFileSync(file)
      const data = JSON.parse(content)
      return {
        fileName: file.replace('.json', '').replace(contentDir, '').replace('/', ''),
        fileRelativePath: file,
        data
      }
    })
  )
  return posts
}

const getLocalFiles = async (filePath) => {
  // grab all md files
  const fg = require('fast-glob')
  return await fg(`${filePath}**/*.json`)
}
