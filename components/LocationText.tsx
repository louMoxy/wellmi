import { Box, Text, Image } from 'grommet';

export const LocationText = ({text}) => (
    <Box margin={{ top: "medium" }} direction="row" gap="small" pad="small" align="center">
        <Location />
        <Text size="small">{text}</Text>
    </Box>
)

export const Location = () => (
    <Image src="/images/united-kingdom.png" width="40px" height="40px" style={{ border: 'solid 4px white', borderRadius: "50%" }} />
)