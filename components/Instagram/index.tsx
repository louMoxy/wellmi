import { Box } from 'grommet'
import { BlocksControls } from 'react-tinacms-inline'

const INSTAGRAM_ID = '787132'
// const THUMBNAIL_WIDTH = 640
const PHOTO_COUNT = 30

export const Instagram = async ({ index }) => {
  const response = await fetch(
    `https://www.instagram.com/graphql/query?query_id=17888483320059182&variables={"id":"${INSTAGRAM_ID}","first":${PHOTO_COUNT},"after":null}`
  )

  const { data } = await response.json()
  console.log(data)

  return (
    <BlocksControls index={index} insetControls>
      <Box width="medium" margin="medium">
      </Box>
    </BlocksControls>
  )
}


export const instagram_template = {
  label: 'Instagram',
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
