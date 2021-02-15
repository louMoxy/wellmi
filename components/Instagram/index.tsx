import { Heading, Box } from 'grommet'
import { BlocksControls } from 'react-tinacms-inline'
import { useEffect } from 'react'

const INSTAGRAM_ID = '787132'
// const THUMBNAIL_WIDTH = 640
const PHOTO_COUNT = 30

export const Instagram = ({ index, data }) => {
  // @ts-ignore
  useEffect(async () => {
    const response = await fetch(
      `https://www.instagram.com/graphql/query?query_id=17888483320059182&variables={"id":"${INSTAGRAM_ID}","first":${PHOTO_COUNT},"after":null}`
    )
    console.log(response)
  })

  return (
    <BlocksControls index={index} insetControls>
    <Box width="medium" margin="medium">
      <Heading size="1" textAlign="center">
        Instagram
      </Heading>
    </Box>
    </BlocksControls>
  )
}
export const instagram_template = {
  label: 'Image',
  defaultItem: {
    size: 'xlarge'
  },
  fields: [
    {
      component: 'select',
      name: 'size',
      label: 'Size',
      description: 'Image size',
      options: ['xlarge', 'large', 'medium', 'small', 'xsmall']
    }
  ]
}
