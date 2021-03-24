import { Box, Text, Paragraph } from 'grommet'
import { InlineText, InlineTextarea, BlocksControls } from 'react-tinacms-inline'
import { HeaderText } from '../HeaderText'
import { UnderLine } from '../title/underline'

export const TitleAndContent = ({ index, data }) => {
  return (
        <BlocksControls index={index} insetControls>
            <Box align="center">
                <Box width="xlarge" direction="row" wrap={true} pad="small">
                    <Box width="320px" pad="small">
                        <Text size="xsmall" color="text-xweak"><InlineText name="smallText" /></Text>
                        <HeaderText data={data} size="small" margin="none" />
                        <Box style={{ position: 'relative', transform: 'scale(0.6)', marginLeft: -60 }} >
                            <UnderLine width="100%" />
                        </Box>
                    </Box>
                    <Box pad="small" flex={true} width={{ min: '280px' }}>
                        <Paragraph fill={true} color="text-light">
                            <InlineTextarea name="text" />
                        </Paragraph>
                    </Box>
                </Box>
            </Box>
        </BlocksControls>
  )
}

export const titleAndContent_template = {
  label: 'Title and Content',
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
      name: 'text',
      label: 'Text',
      component: 'textarea'
    }
  ]
}
