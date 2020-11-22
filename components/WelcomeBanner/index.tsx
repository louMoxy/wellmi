import Link from "next/link";
import { Box, Heading, Text, Image, Button, ResponsiveContext } from "grommet";
import { PlayFill } from 'grommet-icons';
import { StyledText, StyledButton, IconButton } from "./style";
import BackgroundText from '../backgroundText';

const Columns = () => {
    return (
        <ResponsiveContext.Consumer>
            {size =>
                <Box style={{position: 'relative'}}>
                    <BackgroundText text="Wellmi" style={{transform: 'rotate(-90deg)', transformOrigin: '100% 0', right: 214, width: 700}}/>
                    <Box direction="row" justify="center" background={{ image: "url(/images/homepage-bg1.png)", position: '80%', repeat: 'no-repeat', size: 'contain' }} style={{zIndex: 2}}>

                        <Box width="xlarge" direction="row" align="center">
                            <Box pad={(size === "medium" || size === "large") ? { left: 'medium', right: '150px' } : 'xlarge'}>
                                <StyledText size="small">WELL</StyledText>
                                <Heading size="2">World-class cloud wellbeing resources that scale to any number of employees</Heading>
                                <Text color="text-weak">It is a long established fact that a reader will be distracted</Text>
                                <Text color="text-weak">by the readable content of a page when looking at its layout. </Text>
                                <Box direction="row" margin={{ top: 'large' }} gap="large">
                                    <Link href="/">
                                        <StyledButton plain={false}>JOIN US</StyledButton>
                                    </Link>
                                    <Link href="/">
                                        <IconButton direction="row" align="center" gap="small">
                                            <Button icon={<PlayFill color="white" size="small" />} />
                                            <Text>GET A DEMO</Text>
                                        </IconButton>
                                    </Link>
                                </Box>
                            </Box>
                            {(size === "medium" || size === "large") && (
                                <Box width="xlarge">
                                    <Image
                                        src="/images/homepage-1.png"
                                        fill="horizontal"
                                    />
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Box>
            }
        </ResponsiveContext.Consumer>
    )
}

export default Columns;