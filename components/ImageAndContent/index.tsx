import { Box, Text, Button } from 'grommet'
import ImageComponent from '../Image'
import { InlineText, InlineTextarea, BlocksControls } from 'react-tinacms-inline'

export const ImageAndContent = ({ index, data }) => {
  return (
        <BlocksControls index={index} insetControls>
            <Box align="center" margin={{ top: 'medium', bottom: 'medium' }}>
                <Box width="xlarge" pad="medium">
                    <Box direction={data.side === 'Left' ? 'row' : 'row-reverse'} wrap style={{ position: 'relative' }}>
                        <Box background={data.background ? 'linear-gradient(transparent 20%, white 20.1%);' : 'transparent'} width="100%" height="100%" style={{ position: 'absolute', zIndex: 1, top: 0, right: 0, maxWidth: 800 }}></Box>
                        <Box pad="small" basis="45%" margin={{ bottom: data.background ? 'medium' : 'none' }} style={{ zIndex: 1 }} width={{ min: '300px' }} flex>
                            <ImageComponent name="image" border={data.border}/>
                        </Box>
                        <Box pad={{ left: 'medium', right: 'medium', top: 'medium', bottom: 'large' }} basis="55%" align="start" justify="end" style={{ zIndex: 1 }} flex>
                            <Text size="xxlarge" margin={{ bottom: 'medium' }}><InlineTextarea name="header" /></Text>
                            <Text style={{ marginBottom: 40 }}>
                                <InlineTextarea name="text" />
                            </Text>
                            <Button primary label={<InlineText name="buttonText" />} href={data.link}/>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </BlocksControls>
  )
}

export const imageAndContent_template = {
  label: 'Image and Content',
  defaultItem: {
    text: 'Add your text here',
    buttonText: 'Button Text',
    side: 'Left',
    link: '/'
  },
  fields: [
    {
      name: 'text',
      label: 'Text',
      component: 'textarea'
    },
    {
      name: 'header',
      label: 'Header',
      component: 'textarea'
    },
    {
      name: 'buttonText',
      label: 'Button Text',
      component: 'text'
    },
    {
      name: 'link',
      label: 'Link',
      component: 'text'
    },
    {
      component: 'select',
      name: 'side',
      label: 'Side',
      description: 'Select which side the image should be',
      options: ['Left', 'Right']
    },
    {
      component: 'toggle',
      name: 'background',
      label: 'Whtie Background',
      default: false
    },
    {
      label: 'Image',
      name: 'image',
      component: 'image',
      parse: (media) => `/images/${media.filename}`,
      uploadDir: () => '/images/'
    },
    {
      name: 'border',
      label: 'Round corners on the images?',
      component: 'toggle',
      default: false
    }
  ]
}
