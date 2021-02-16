import { Box, Grid, Carousel, Image } from 'grommet'
import { BlocksControls } from 'react-tinacms-inline'
import { useEffect, useState } from 'react'

const PHOTO_COUNT = 30
const ARRAY = Array.from(Array(6).keys())

interface InstagramPost {
  id: string
  caption: string
  src: string
  url: string
}

export const Instagram = ({ index, data }) => {
  const [photos, setPhotos] = useState<InstagramPost[] | undefined>()
  // @ts-ignore
  useEffect(async () => {
    const id = data.instagramId
    if (!id) {
      setPhotos(undefined)
    }
    try {
      // Hack from https://stackoverflow.com/a/47243409/2217533
      const response = await fetch(
        `https://www.instagram.com/graphql/query?query_id=17888483320059182&variables={"id":"${id}","first":${PHOTO_COUNT},"after":null}`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        }
      )
      const { data } = await response.json()
      const photos = data.user.edge_owner_to_timeline_media.edges.map(
        ({ node }) => {
          const { id } = node
          const caption = node.edge_media_to_caption.edges[0].node.text
          const src = node.thumbnail_src
          const url = `https://www.instagram.com/p/${node.shortcode}`
          return {
            id,
            caption,
            src,
            url
          }
        }
      )
      setPhotos(photos)
    } catch (error) {
      console.error(error)
    }
  }, [])
  if (!photos || photos.length === 0) {
    return null
  }
  return (
    <BlocksControls index={index} insetControls>
      <Box align="center">
        <Box width="xlarge" direction="row" wrap={true} pad="medium">
          <Carousel fill>
            {ARRAY.map((index) => (
              <View key={index} index={index} photos={photos}/>
            ))}
          </Carousel>
    </Box>
      </Box>
    </BlocksControls>
  )
}
export const instagram_template = {
  label: 'Image',
  defaultItem: {
    instagramId: '9153844721'
  },
  fields: [
    {
      component: 'text',
      name: 'instagramId',
      label: 'Instagram Id',
      description: 'Id from instagram can be found here: https://codeofaninja.com/tools/find-instagram-user-id/'
    }
  ]
}

interface ViewProps {
  index: number
  photos: InstagramPost[]
}

const View = ({ index, photos }:ViewProps) => {
  const images = photos.slice(index * 5, (index * 5) + 5)
  const featureImg = images.shift()
  return (
    <Box>
    <Grid
      gap="small"
      columns={['1/2', '1/4', '1/4']}
      rows={['1/2', '1/2']}
      fill
      areas={[
        { name: 'side', start: [0, 0], end: [0, 1] }
      ]}
    >
      <Box gridArea={'side'} fill><ImageBlock {...featureImg} /></Box>
       {images.map((image, index) => (
        <Box background={'tomato'} height='small' key={index}>
          <ImageBlock {...image} />
        </Box>
       )) }
    </Grid>
    </Box>
  )
}

const ImageBlock = ({
  id,
  caption,
  src,
  url
}: InstagramPost) => {
  return (
    <Image
      key={id}
      src={src}
      alt={caption.substring(0, 40)}
    />
  )
}
