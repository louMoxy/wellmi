import Link from "next/link";
import { Box, Heading, Text, Image, Button, ResponsiveContext } from "grommet";
import { PlayFill } from 'grommet-icons';
import { StyledButton, IconButton } from "./style";
import BackgroundText from '../backgroundText';
import theme from '../layout/theme';

const Columns = () => {
    return (
        <ResponsiveContext.Consumer>
            {size =>
                <Box style={{position: 'relative'}} align="center">
                    {(size === "medium" || size === "large") && (
                        <BackgroundText text="WorldClass" style={{width: '60%', left: 0}}/>
                    )}
                    <Box direction="row" justify="center" align="center" style={{zIndex: 2}} width="xlarge">
                        {(size === "medium" || size === "large") && (
                                <Box width="xlarge" margin={{top: '150px'}}>
                                    <Image
                                        src="/images/worldimage.png"
                                        fill="horizontal"
                                    />
                                </Box>
                            )}
                        <Box width="xlarge" direction="row" align="center">
                            <Box pad="large">
                                <Heading size="2"><span style={{color: theme.global.colors.brand.light}}>The first unified</span> total well-being platform</Heading>
                                <Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </Text>
                                <Text margin={{top: 'medium'}}>LifeWorks by Morneau Shepell combines modern employee assistance, wellness, recognition and incentive programs into a unified total well-being solution that engages with 100% of your</Text>
                                <Box direction="row" margin={{ top: 'large' }} gap="large">
                                    <Link href="/">
                                        <StyledButton primary label="REVIEW PRODUCTS"/>
                                    </Link>
                                    <Link href="/">
                                        <IconButton direction="row" align="center" gap="small">
                                            <Button icon={<PlayFill color="white" size="small" />} />
                                            <Text>GET A DEMO</Text>
                                        </IconButton>
                                    </Link>
                                </Box>
                            </Box>
                            
                        </Box>
                    </Box>
                </Box>
            }
        </ResponsiveContext.Consumer>
    )
}

export default Columns;