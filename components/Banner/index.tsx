import { Box, Heading, Text, Image, Anchor } from "grommet";
import styled from 'styled-components';
import theme from '../layout/theme';
import { CirclePlay, FormNextLink } from 'grommet-icons';

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
}

const Component = ({ color, title, title2, text, largeSecond = false, image, imageWidth = "medium", link }: Props) => {
    const textColor = theme.global.colors.text.dark;
    const Description = link ? (
        <Anchor href={link}>
            <Box direction="row" pad="small" gap="small" align="center">
                <CirclePlay color={textColor} size="40px"/>
                <Box width="200px">
                    <Text color={textColor} weight="normal">{text}</Text>
                </Box>
                <FormNextLink color={textColor} size="50px"/>
            </Box>
        </Anchor>
    ) : (
        <Text color={textColor} dangerouslySetInnerHTML={{ __html: text }}></Text>
    )
    return (
        <Box pad={{ top: 'medium' }} style={{ position: 'relative', zIndex: 1 }}>
            <StyledBackground background={color}></StyledBackground>
            <Box direction="row" justify="center" pad="medium">
                <Box width="xlarge" direction="row" justify="between" wrap={true}>
                    <Box pad={{ left: 'medium', right: 'medium' }}>
                        <Heading level="2" size="xlarge" margin={{ bottom: 'none' }} color={theme.global.colors.text.dark}>{title}</Heading>
                        <Heading level="2" size={largeSecond ? "6rem" : "medium"} margin={{ top: 'none', bottom: 'small' }} color={theme.global.colors.text.dark}>{title2}</Heading>
                        {Description}
                    </Box>
                    <Box width={imageWidth} style={{ margin: '10', marginTop: 50, marginLeft: 'auto' }}>
                        {link ?
                            (
                                <Anchor href={link}>
                                    <Image
                                        src={image}
                                        fill="horizontal"
                                    />
                                </Anchor>
                            ) :
                            <Image
                                src={image}
                                fill="horizontal"
                            />
                        }

                    </Box>
                </Box>
            </Box>
        </Box>
    )
}


export default Component;