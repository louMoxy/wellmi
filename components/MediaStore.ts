import { Media, MediaList, MediaListOptions, MediaStore, MediaUploadOptions } from '@tinacms/core'
import { GithubClient } from 'react-tinacms-github/src/github-client/index'
import path from 'path'

function base64File (file: Blob): Promise<string | ArrayBuffer> {
  return new Promise(resolve => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      if (reader.result) {
        resolve(reader.result)
      } else {
        throw new Error('base64File: No result')
      }
    }
  })
}

interface GithubContent {
  name: string
  path: string // directory + name
  size: number
  type: 'file' | 'dir'
  url: string
  download_url: string // For Previewing
  git_url: string
  html_url: string
}

interface GithubUploadResposne {
  content: GithubContent
}

export class GithubMediaStore implements MediaStore {
  accept = '*'

  // eslint-disable-next-line no-useless-constructor
  constructor (private githubClient: GithubClient) {
    //
  }

  async persist (files: MediaUploadOptions[]): Promise<Media[]> {
    const uploaded: Media[] = []
    for (const { file, directory } of files) {
      let mediaPath = path.join(directory, file.name)
      if (mediaPath.charAt(0) === '/') {
        mediaPath = mediaPath.slice(1)
      }

      try {
        const content = (await base64File(file)).toString().split(',')[1] // only need the data piece
        const uploadResponse: GithubUploadResposne = await this.githubClient.upload(
          mediaPath,
          content,
          'Upload',
          true
        )

        uploaded.push(contentToMedia(uploadResponse.content))
      } catch (e) {
        console.warn('Failed to upload content to Github: ' + e)
      }
    }

    return uploaded
  }

  async delete (media: Media) {
    await this.githubClient.delete(
      path.join(media.directory, media.filename),
      `Deleted ${media.filename}`
    )
  }

  async previewSrc (src: string) {
    try {
      return this.githubClient.getDownloadUrl(src)
    } catch {
      return src
    }
  }

  async list (options?: MediaListOptions): Promise<MediaList> {
    const directory = options?.directory ?? ''
    const offset = options?.offset ?? 0
    const limit = 200

    const unfilteredItems: GithubContent[] = await this.githubClient.fetchFile(
      directory
    )

    const items = unfilteredItems.filter(function filterByAccept () {
      // TODO
      return true
    })

    return {
      items: items.map(contentToMedia).slice(offset, offset + limit),
      offset,
      limit,
      nextOffset: nextOffset(offset, limit, items.length),
      totalCount: items.length
    }
  }
}

const nextOffset = (offset: number, limit: number, count: number) => {
  if (offset + limit < count) return offset + limit
  return undefined
}

const contentToMedia = (item: GithubContent): Media => {
  const previewable = ['.jpg', '.jpeg', '.png', '.webp', '.svg']
  const mediaItem: Media = {
    id: item.path,
    filename: item.name,
    directory: item.path.slice(0, item.path.length - item.name.length),
    type: item.type
  }

  if (previewable.includes(path.extname(item.name).toLowerCase())) {
    mediaItem.previewSrc = item.download_url
  }

  return mediaItem
}

export class NextGithubMediaStore extends GithubMediaStore {
  previewSrc (fieldValue: string) {
    return super.previewSrc(path.join('public', fieldValue))
  }

  list (options: MediaListOptions) {
    return super
      .list({
        ...options,
        directory: path.join('public', options.directory || '')
      })
      .then(list => {
        return {
          ...list,
          items: normalizeMediaItems(list.items)
        }
      })
  }

  persist (files: MediaUploadOptions[]) {
    return super
      .persist(
        files.map(file => {
          return {
            ...file,
            directory: path.join('public', file.directory)
          }
        })
      )
      .then(normalizeMediaItems)
  }

  delete (media: Media) {
    return super.delete({
      ...media,
      directory: path.join('public', media.directory)
    })
  }
}

function normalizeMediaItems (items: Media[]) {
  return items.map(item => {
    return {
      ...item,
      directory: item.directory.replace('public', ''),
      id: item.id.replace('public', '')
    }
  })
}
