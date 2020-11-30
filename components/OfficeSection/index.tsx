import { Box, Text, Heading, Image } from 'grommet';
import theme from '../layout/theme';
import BackgroundText from '../backgroundText';

const Component = () => {
    return (
        <Box justify="center" direction="row" style={{ position: 'relative' }} margin={{ top: "medium" }} wrap={true}>
            <BackgroundText text="Office" style={{ transform: 'rotate(-90deg)', left: 130, width: 400, top: -50 }} />
            <Box width="xlarge" pad="medium">
                <Box direction="row" wrap={true} justify="between">
                    <Box basis="1/3" width={{min: "300px"}}>
                        <Heading><span style={{ color: theme.global.colors.brand.light }}>Office</span> In Glouscester</Heading>
                        <Text size="small">A few snaps from our base in Gloucester, UK</Text>
                        <Box margin={{ top: "medium" }} border="top" direction="row" gap="medium" pad="small" align="center">
                            <Image src="/images/united-kingdom.png" width="40px" height="40px" style={{ border: 'solid 4px white', borderRadius: "50%" }} />
                            <Text size="small">Bizspace House, Bristol Road, Glouscester GL1 5RZ</Text>
                        </Box>
                    </Box>
                    <Box basis="2/3" direction="row" width={{min: "300px"}} margin={{left: "auto"}} gap="small" flex={true}>
                        <Box gap="medium" align="end">
                            <Box height="medium">
                                <Image src="/images/office-1.png" fit="contain" style={{ borderRadius: 10 }} />
                            </Box>
                            <Box  height="small" width="small" round="medium">
                                <Image src="/images/office-2.png" fit="contain" style={{ borderRadius: 10 }} />
                            </Box>
                        </Box>
                        <Box gap="medium">
                            <Box height="medium" margin={{ top: "xlarge" }}>
                                <Image src="/images/office-3.png" fit="contain" style={{ borderRadius: 10 }} />
                            </Box>
                            <Box height="small" width="small">
                                <Image src="/images/office-4.png" fit="contain" style={{ borderRadius: 10 }} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}



export default Component;