import { Box, Text } from 'grommet'
import { InlineText, BlocksControls } from 'react-tinacms-inline'
import { HeaderText } from '../HeaderText'
import ImageComponent from '../Image'
import { UnderLine } from '../title/underline'
import { LocationText } from '../LocationText'

export const Offices = ({ index, data }) => {
  return (
        <BlocksControls index={index} insetControls>
            <Box align="center">
                <Box width="xlarge" direction="row" wrap={true} pad="medium">
                    <Box basis="60%" width={{ min: '300px' }} pad="small" round="medium" margin={{ top: '95px' }} justify="end" flex="grow" >
                        <ImageComponent name="img1" className="border"/>
                        <Box width={{ max: '380px' }}>
                            <LocationText name="locationText1" imgName="locationImg1"/>
                        </Box>
                    </Box>
                    <Box basis="40%" pad="small" align="end" justify="end" flex="grow">
                        <Text size="small" color="text-xweak" textAlign="end"><InlineText name="smallText"/></Text>
                        <HeaderText data={data} textAlign="end" margin="none" size="medium"/>
                        <Box style={{ position: 'relative', transform: 'scale(0.5)', marginRight: -70 }} width="300px">
                            <UnderLine width="100%" />
                        </Box>
                        <ImageComponent name="img2" className="border"/>
                        <LocationText name="locationText2" imgName="locationImg2"/>
                    </Box>
                </Box>
            </Box>
        </BlocksControls>
  )
}

export const offices_template = {
  label: 'Our Offices',
  defaultItem: {
    headingText: 'Add your Heading text here',
    text: 'Add text here '
  },
  fields: [
    {
      name: 'smallText',
      label: 'Small title text',
      component: 'text'
    },
    {
      name: 'headingText',
      label: 'Title text',
      component: 'text'
    },
    {
      name: 'num',
      label: 'Number of words in accent color for title text',
      component: 'number',
      step: 1
    },
    {
      name: 'locationText1',
      label: 'Location 1 text',
      component: 'text'
    },
    {
      name: 'locationText2',
      label: 'Location 1 text',
      component: 'text'
    },
    {
      label: 'Image 1',
      name: 'img1',
      component: 'image',
      parse: (media) => `/${media.filename}`,
      uploadDir: () => '/images/'
    },
    {
      label: 'Image 2',
      name: 'img2',
      component: 'image',
      parse: (media) => `/${media.filename}`,
      uploadDir: () => '/images/'
    }
  ]
}
