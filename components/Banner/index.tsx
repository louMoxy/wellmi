import { Box, Heading, Text, Anchor } from "grommet";
import styled from 'styled-components';
import theme from '../layout/theme';
import { CirclePlay, FormNextLink } from 'grommet-icons';
import { InlineForm, InlineText, InlineTextarea, BlocksControls } from 'react-tinacms-inline'
import ImageComponent from '../Image';

const StyledBackground = styled.div`
    background: ${props => props.background};
    position: absolute;
    top: 0;
    left: 0;
    height: 80%;
    width: 100%;
    z-index: -1;
    border-radius: 0 0 0px 80px;
`

interface Props {
    color: string;
    title: string;
    title2: string;
    text: string;
    largeSecond?: boolean;
    image: string;
    imageWidth?: string;
    link?: string;
    form?: any;
}

const Component = ({ color, title, title2, text, largeSecond = false, image, imageWidth = "medium", link, form}: Props) => {
    const textColor = theme.global.colors.text.dark;
    const Description = link ? (
        <Anchor href={link}>
            <Box direction="row" pad="small" gap="small" align="center">
                <CirclePlay color={textColor} size="40px"/>
                <Box width="200px">
                    <Text color={textColor} weight="normal">
                        <InlineTextarea name="bannerText" />
                    </Text>
                </Box>
                <FormNextLink color={textColor} size="50px"/>
            </Box>
        </Anchor>
    ) : (
        <Text color={textColor}> 
            <InlineTextarea name="bannerText" />
        </Text>
    )
    return (
        <InlineForm form={form}>
            <Box pad={{ top: 'medium' }} style={{ position: 'relative', zIndex: 1 }}>
                <StyledBackground background={color}></StyledBackground>
                <Box direction="row" justify="center" pad="medium">
                    <Box width="xlarge" direction="row" justify="between" wrap={true}>
                        <Box pad={{ left: 'medium', right: 'medium' }}>
                            <Heading level="2" size="xlarge" margin={{ bottom: 'none' }} color={theme.global.colors.text.dark}>
                                <InlineText name="bannerText1" />
                            </Heading>
                            <Heading level="2" size={largeSecond ? "6rem" : "medium"} margin={{ top: 'none', bottom: 'small' }} color={theme.global.colors.text.dark}>
                                <InlineText name="bannerText2" />
                            </Heading>
                            {Description}
                        </Box>
                        <Box width={imageWidth} style={{ margin: '10', marginTop: 50, marginLeft: 'auto' }}>
                            {link ?
                                (
                                    <Anchor href={link}>
                                       <ImageComponent name="bannerImg" />
                                    </Anchor>
                                ) :
                                <ImageComponent name="bannerImg" />
                            }

                        </Box>
                    </Box>
                </Box>
            </Box>
        </InlineForm>
    )
}

// Todo: Remove
export default Component;


export const Banner = ({index, data, ...args}) => {
    const {bgColor} = args
    const textColor = theme.global.colors.text.dark;
    const {largeSecond = false, imageWidth = "medium", link} = data;
    const Description = link ? (
        <Anchor href={link}>
            <Box direction="row" pad="small" gap="small" align="center">
                <CirclePlay color={textColor} size="40px"/>
                <Box width="200px">
                    <Text color={textColor} weight="normal">
                        <InlineTextarea name="bannerText" />
                    </Text>
                </Box>
                <FormNextLink color={textColor} size="50px"/>
            </Box>
        </Anchor>
    ) : (
        <Text color={textColor}> 
            <InlineTextarea name="bannerText" />
        </Text>
    )
    return (
      <BlocksControls index={index} insetControls>
            <Box pad={{ top: 'medium' }} style={{ position: 'relative', zIndex: 1 }}>
                <StyledBackground background={bgColor}></StyledBackground>
                <Box direction="row" justify="center" pad="medium">
                    <Box width="xlarge" direction="row" justify="between" wrap={true}>
                        <Box pad={{ left: 'medium', right: 'medium' }}>
                            <Heading level="2" size="xlarge" margin={{ bottom: 'none' }} color={theme.global.colors.text.dark}>
                                <InlineText name="bannerText1" />
                            </Heading>
                            <Heading level="2" size={largeSecond ? "6rem" : "medium"} margin={{ top: 'none', bottom: 'small' }} color={theme.global.colors.text.dark}>
                                <InlineText name="bannerText2" />
                            </Heading>
                            {Description}
                        </Box>
                        <Box width={imageWidth} style={{ margin: '10', marginTop: 50, marginLeft: 'auto' }}>
                            {link ?
                                (
                                    <Anchor href={link}>
                                        <ImageComponent name="bannerImg" />
                                    </Anchor>
                                ) :
                                <ImageComponent name="bannerImg" />
                            }

                        </Box>
                    </Box>
                </Box>
            </Box>
      </BlocksControls>
    )
  }
  
export const banner_template = {
    label: 'Banner',
    defaultItem: {
        bannerText1: 'Banner Text 1',
        bannerText2: 'Banner Text 2',
        bannerText: 'Description',
    },
    fields: [
        {
            name: "bannerText1",
            label: "Banner Text 1",
            component: "text",
        },
        {
            name: "bannerText2",
            label: "Banner Text 2",
            component: "text",
        },
        {
            name: "bannerText",
            label: "Banner description",
            component: "textarea",
        },
        {
            name: "largeSecond",
            label: "Second line of text is larger than first line?",
            component: "toggle",
            default: false,
        },
        {
            name: "link",
            label: "Link",
            component: "text",
        },
        {
            name: "imageWidth",
            label: "Image width: Use either px or % or 'xsmall', 'small', 'medium', 'large', 'xlarge'",
            component: "text",
            default: "medium"
        },
        {
            label: 'Banner Image',
            name: 'bannerImg',
            component: 'image',
            parse: media => `/images/${media.filename}`,
            uploadDir: () => 'public/images/',
            previewSrc: fullSrc => fullSrc.replace('/public', ''),
        }
    ],
}