import { Box, Text, Button } from 'grommet'
import { InlineText, BlocksControls, InlineTextarea } from 'react-tinacms-inline'

export const TextAndButton = ({ index, data }) => {
  return (
        <BlocksControls index={index} insetControls>
            <Box justify="center" direction="row">
                <Box width="xlarge" pad="medium" align="center">
                    <Box width="large">
                        <Text margin="medium" textAlign="center">
                            <InlineTextarea name="text"/>
                        </Text>
                    </Box>
                    <Button primary style={{ padding: '8px 20px' }} href={data.link || '/'}>
                        <InlineText name="buttonText"/>
                    </Button>
                </Box>
            </Box>
        </BlocksControls>
  )
}

export const textAndButton_template = {
  label: 'Job card',
  fields: [
    {
      name: 'link',
      label: 'Heading Text',
      component: 'text'
    },
    {
      name: 'text',
      label: 'Text',
      component: 'textarea'
    },
    {
      name: 'buttonText',
      label: 'Button text',
      component: 'text'
    }

  ]
}
