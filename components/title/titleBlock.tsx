import { Box, Text } from 'grommet'
import { BlocksControls, InlineTextarea } from 'react-tinacms-inline'
import { Title } from './index'

export const TitleBlock = ({ index, data }) => {
  const alignment = data.alignment === 'right' ? 'end' : data.alignment === 'center' ? 'center' : 'start'

  return (
    <BlocksControls index={index} insetControls>
      <Box align="center">
        <Box width="xlarge" pad="medium" align={alignment}>
          <Box pad="medium">
            <Text size="xsmall" color="text-xweak" textAlign={alignment} margin={{ right: 'medium' }}><InlineTextarea name={'text'}/></Text>
            <Title name={'title'} alignment={alignment} margin={{ right: 'medium' }} lineStyle={{ transform: 'scale(0.6)', marginTop: -10 }}/>
          </Box>
        </Box>
      </Box>
    </BlocksControls>
  )
}

export const title_template = {
  label: 'Underline Title and text',
  defaultItem: {
    title: 'Add your title text here',
    text: 'Add text here '
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      component: 'textarea'
    },
    {
      component: 'select',
      name: 'alignment',
      label: 'Alignment',
      description: 'Card alignment',
      options: ['left', 'right', 'center']
    },
    {
      name: 'text',
      label: 'Small Text',
      component: 'textarea'
    }
  ]
}
