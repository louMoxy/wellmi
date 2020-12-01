import { Box, Heading, Text, Image } from "grommet";
import styled from 'styled-components';
import theme from '../layout/theme';

const StyledBackground = styled.div`
    background: ${props => props.background};
    position: absolute;
    top: 0;
    left: 0;
    height: 75%;
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
}

const Component = ({color, title, title2, text, largeSecond = false, image, imageWidth = "medium"}: Props) => {
    return (
        <Box pad={{top: 'medium'}} style={{position: 'relative', zIndex: 1}}>
            <StyledBackground background={color}></StyledBackground>
            <Box direction="row" justify="center" pad="medium"> 
                <Box width="xlarge" direction="row" justify="between" wrap={true}>
                    <Box pad={{left: 'medium', right: 'medium'}}>
                        <Heading level="2" size="xlarge" margin={{bottom: 'none'}} color={theme.global.colors.text.dark}>{title}</Heading>
                        <Heading level="2" size={largeSecond ? "7rem" : "medium"} margin={{top: 'none', bottom: 'small'}} color={theme.global.colors.text.dark}>{title2}</Heading>
                        <Text color={theme.global.colors.text.dark} dangerouslySetInnerHTML={{__html: text}}></Text>
                    </Box>
                    <Box width={imageWidth} style={{margin: 20, marginTop: 50, marginLeft: 'auto'}}>
                        <Image
                            src={image}
                            fill="horizontal"
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}


export default Component;