import { Box, Heading, Text } from 'grommet'
import { InlineTextarea, BlocksControls, InlineText } from 'react-tinacms-inline'
import ImageComponent from '../Image'

export const ImageCard = ({ index, data }) => {
  return (
        <BlocksControls index={index} insetControls>
            <Box align="center" >
                <Box width="xlarge" pad="medium">
                    <Box pad="large" width={{ max: '900px' }} background="linear-gradient( transparent, transparent 30%, white 31%, white)" alignSelf={data.alignment === 'right' ? 'end' : 'start'} margin={{ bottom: 'large' }}>
                        <Box width="85%" margin={{ bottom: 'medium' }} alignSelf={data.alignment === 'right' ? 'end' : 'start'}>
                            <ImageComponent name="image" className={data.alignment === 'right' ? 'right' : ''}/>
                        </Box>
                        <Heading size="small" textAlign={data.alignment === 'right' ? 'end' : 'start'}><InlineText name="headerText" /></Heading>
                        <Text textAlign={data.alignment === 'right' ? 'end' : 'start'}><InlineTextarea name="text" /></Text>
                    </Box>
                </Box>
            </Box>
        </BlocksControls>
  )
}

export const imageCard_template = {
  label: 'Image Card',
  defaultItem: {
    alignment: 'left',
    text: 'Add text here',
    headerText: 'Title Text'
  },
  fields: [
    {
      component: 'select',
      name: 'alignment',
      label: 'Alignment',
      description: 'Card alignment',
      options: ['left', 'right']
    },
    {
      component: 'text',
      name: 'headerText',
      label: 'Title text'
    },
    {
      component: 'textarea',
      name: 'text',
      label: 'Text'
    },
    {
      label: 'Image',
      name: 'image',
      component: 'image',
      parse: (media) => `/images/${media.filename}`,
      uploadDir: () => '/images/'
    }
  ]
}
