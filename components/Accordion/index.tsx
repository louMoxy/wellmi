import { Box, Text } from 'grommet'
import { InlineText } from 'react-tinacms-inline'

export const Header = (name) => (
    <Box style={{ background: 'white', paddingLeft: 20, color: '#233E86' }} pad="medium" margin="none">
        <Text>
            <InlineText name={name} />
        </Text>
    </Box>
)
