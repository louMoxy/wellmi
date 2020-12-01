import { Box, Heading, Text, Image } from "grommet";
import theme from '../layout/theme';
import { UnderLine } from '../title/underline';
import { LocationText } from '../LocationText';

const Component = () => {
    return (
        <Box align="center">
            <Box width="xlarge" direction="row" wrap={true} pad="medium">
                <Box basis="60%" pad="small" round="medium" margin={{top: "95px"}}>
                    <Image src="/images/about-us-2.png" style={{borderRadius: 20}} fill="horizontal"/>
                    <Box width={{max: "380px"}}>
                        <LocationText text="37 Basepoint business center, Oakfield close, tewksbury, united kingdom, GL20 8SD"/>
                    </Box>
                </Box>
                <Box basis="40%" pad="small" align="end">
                    <Text size="small" color="text-xweak" textAlign="end">Our Offices</Text>
                    <Heading textAlign="end" margin="none" size="medium"><span style={{ color: theme.global.colors.brand.light }}>Offices </span>in United Kingdom </Heading>
                    <Box style={{ position: 'relative', transform: 'scale(0.5)', marginRight: -70 }} width="300px">
                        <UnderLine width="100%" />
                    </Box>
                    <Image src="/images/about-us-3.png" style={{borderRadius: 20}} fill="horizontal" margin={{top: "large"}}/>
                    <LocationText text="Bizspace House, Bristol Road, Glouscester GL1 5RZ"/>
                </Box>
            </Box>
        </Box>
    )
}

export default Component;