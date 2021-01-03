import Link from "next/link";
import { InlineTextarea, BlocksControls, InlineText } from 'react-tinacms-inline'
import { Box, Heading, Text, Image, Button, ResponsiveContext } from "grommet";
import { PlayFill } from 'grommet-icons';
import { StyledText, StyledButton, IconButton } from "./style";
import BackgroundText from '../backgroundText';

export const WelcomeBanner = ({ index, data }) => {
    return (
        <BlocksControls index={index} insetControls>
            <ResponsiveContext.Consumer>
                {size =>
                    <Box style={{position: 'relative'}}>
                        <BackgroundText text="Wellmi" style={{transform: 'rotate(-90deg)', transformOrigin: '100% 0', right: 214, width: 700}}/>
                        <Box direction="row" justify="center" background={{ image: "url(/images/homepage-bg1.png)", position: '80%', repeat: 'no-repeat', size: 'contain' }} style={{zIndex: 2}}>
                            <Box width="xlarge" direction="row" align="center">
                                <Box pad={(size === "medium" || size === "large") ? { left: 'medium', right: '150px' } : 'xlarge'}>
                                    <StyledText size="small"><InlineText name="smallText" /></StyledText>
                                    <Heading size="2"><InlineTextarea name="headingText" /></Heading>
                                    <Text color="text-weak"> <InlineTextarea name="text" /></Text>
                                    <Box direction="row" margin={{ top: 'large' }} gap="large">
                                        <Link href={data.link1 || '/'}>
                                            <StyledButton plain={false}><InlineText name="buttonText1" /></StyledButton>
                                        </Link>
                                        <Link href={data.link2 || '/'}>
                                            <IconButton direction="row" align="center" gap="small">
                                                <Button icon={<PlayFill color="white" size="small" />} />
                                                <Text><InlineText name="buttonText2" /></Text>
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
        </BlocksControls>
    )
}

export const banner_template = {
    label: 'Banner',
    fields: [
        {
            component: 'text',
            name: 'smallText',
            label: 'Small text',
            default: "WELL"
        },
        {
            component: "textarea",
            name: "headingText",
            label: "Heading Text",
            default: "Header text"
        },
        {
            component: "textarea",
            name: "text",
            label: "Text",
            default: "Text"
        },
        {
            component: 'text',
            name: 'link1',
            label: 'link 1',
            default: "/"
        },
        {
            component: 'text',
            name: 'buttonText1',
            label: 'Button text 1',
            default: "Button text 1"
        },
        {
            component: 'text',
            name: 'link2',
            label: 'link 2',
            default: "/"
        },
        {
            component: 'text',
            name: 'buttonText2',
            label: 'Button text 2',
            default: "Button text 2"
        },
        {
            label: 'Image',
            name: 'image',
            component: 'image',
            parse: media => `/images/${media.filename}`,
            uploadDir: () => 'public/images/',
            previewSrc: fullSrc => fullSrc.replace('/public', ''),
        }
    ],
}