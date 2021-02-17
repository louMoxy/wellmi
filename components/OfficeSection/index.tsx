import { Box, Text } from 'grommet'
import { InlineTextarea, BlocksControls } from 'react-tinacms-inline'
import ImageComponent from '../Image'
import BackgroundText from '../backgroundText'
import { HeaderText } from '../HeaderText'
import { LocationText } from '../LocationText'

export const OfficeSection = ({ index, data }) => {
  return (
        <BlocksControls index={index} insetControls>
            <Box justify="center" direction="row" style={{ position: 'relative' }} margin={{ top: 'medium' }} wrap={true}>
                <BackgroundText text="Office" style={{ transform: 'rotate(-90deg)', left: 130, width: 400, top: -50 }} />
                <Box width="xlarge" pad="medium" style={{ zIndex: 3 }}>
                    <Box direction="row" wrap={true} justify="between">
                        <Box basis="1/3" width={{ min: '300px' }}>
                            <HeaderText data={data}/>
                            <Text size="small"><InlineTextarea name="text" /></Text>
                            <Box border="top">
                                <LocationText name="locationText" imgName="locationImg"/>
                            </Box>
                        </Box>
                        <Box basis="2/3" direction="row" width={{ min: '300px' }} margin={{ left: 'auto' }} gap="small" flex={true}>
                            <Box gap="medium" align="end">
                                <Box height="medium" round="medium" pad={{ right: 'medium' }}>
                                    <ImageComponent name="img1"/>
                                </Box>
                                <Box height="small" width="small" round="medium" margin={{ top: 'small' }}>
                                    <ImageComponent name="img2" className="right"/>
                                </Box>
                            </Box>
                            <Box gap="medium">
                                <Box height="medium" margin={{ top: 'xlarge' }} round="medium">
                                    <ImageComponent name="img3"/>
                                </Box>
                                <Box height="small" width="small" round="medium" margin={{ top: 'medium' }}>
                                    <ImageComponent name="img4"/>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </BlocksControls>
  )
}

export const office_template = {
  label: 'Office section',
  fields: [
    {
      name: 'headingText',
      label: 'Title',
      component: 'text'
    },
    {
      name: 'num',
      label: 'Number of words in accent color for title text',
      component: 'number',
      step: 1
    },
    {
      name: 'text',
      label: 'Text',
      component: 'textarea'
    },
    {
      label: 'Image 1',
      name: 'img1',
      component: 'image',
      parse: (media) => `/images/${media.filename}`,
      uploadDir: () => '/images/'
    },
    {
      label: 'Image 2',
      name: 'img2',
      component: 'image',
      parse: (media) => `/images/${media.filename}`,
      uploadDir: () => '/images/'
    },
    {
      label: 'Image 3',
      name: 'img3',
      component: 'image',
      parse: (media) => `/images/${media.filename}`,
      uploadDir: () => '/images/'
    },
    {
      label: 'Image 4',
      name: 'img4',
      component: 'image',
      parse: (media) => `/images/${media.filename}`,
      uploadDir: () => '/images/'
    },
    {
      label: 'Location text',
      name: 'locationText',
      component: 'textarea'
    }
  ]
}
