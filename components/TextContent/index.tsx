import { Box, Text } from 'grommet'
import { InlineTextarea, BlocksControls } from 'react-tinacms-inline'
import { HeaderText } from '../HeaderText'
import { useCMS } from 'tinacms'

export const TextContent = ({ index, data }) => {
  const alignment = data.alignment === 'Right' ? 'end' : data.alignment === 'Center' ? 'center' : 'start'
  const textSize = data.textSize || 'medium'
  const cms = useCMS()
  return (
        <BlocksControls index={index} insetControls>
            <Box align="center">
                <Box width="xlarge" pad="medium">
                    <Box pad="medium">
                        <HeaderText data={data} textAlign={alignment} />
                      {cms.enabled ? <InlineTextarea name="text" /> : data.text?.split('\n').map((text, i) => <Text textAlign={alignment} size={textSize} key={i}>{text}</Text>) }
                    </Box>
                </Box>
            </Box>
        </BlocksControls>
  )
}

export const textContent_template = {
  label: 'Text Content',
  defaultItem: {
    headingText: 'Add your Heading text here',
    text: 'Add text here '
  },
  fields: [
    {
      name: 'headingText',
      label: 'Heading Text',
      component: 'textarea'
    },
    {
      name: 'text',
      label: 'Text',
      component: 'textarea'
    },
    {
      name: 'textSize',
      label: 'Text size',
      component: 'select',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'],
      default: 'medium'
    },
    {
      name: 'num',
      label: 'Number of words in accent color for title text',
      component: 'number',
      step: 1
    },
    {
      name: 'alignment',
      label: 'Text alignment',
      component: 'select',
      options: ['Left', 'Right', 'Center'],
      default: 'Left'
    }
  ]
}
