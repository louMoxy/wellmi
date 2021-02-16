import { Heading, Box } from 'grommet'
import { InlineTextarea } from 'react-tinacms-inline'
import { UnderLine } from './underline'
import { TextAlignType } from 'grommet/utils'

interface TitleProps {
    name: string;
    alignment?: TextAlignType
    width?: string
  margin?: any
  lineStyle?: any
}

export const Title = ({ name, alignment = 'center', width = 'medium', margin = 'medium', lineStyle = {} }: TitleProps) => {
  return (
        <Box width={width} margin={margin}>
            <Heading size="1" textAlign={alignment}>
                <InlineTextarea name={name}/>
            </Heading>
            <UnderLine style={ lineStyle }/>
        </Box>
  )
}

export default Title
