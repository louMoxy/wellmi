import { Box, Heading, Text, Image } from "grommet";
import styled from 'styled-components';
import theme from '../layout/theme';

const StyledBackground = styled.div`
    background: ${props => props.background};
    position: absolute;
    top: 0;
    left: 0;
    height: 85%;
    width: 100%;
    z-index: -1;
    border-radius: 0 0 0px 80px;
`

const Component = () => {
    return (
        <Box pad={{top: 'medium'}} style={{position: 'relative', zIndex: 1}}>
            <StyledBackground background={theme.global.colors["accent-2"].dark}></StyledBackground>
            <Box direction="row" justify="center" pad="medium"> 
                <Box width="xlarge" direction="row" justify="between" wrap={true}>
                    <Box pad={{left: 'medium', right: 'medium'}}>
                        <Heading level="2" size="xlarge" margin={{bottom: 'none'}} color={theme.global.colors.text.dark}>Careers</Heading>
                        <Heading level="2" size="medium" margin={{top: 'none'}} color={theme.global.colors.text.dark}>at Wellmi</Heading>
                        <Text color={theme.global.colors.text.dark}>Want to Join The Wellmi family? <br></br> Looking for a career that let's you make a difference?</Text>
                    </Box>
                    <Box width="medium" style={{margin: 20, marginTop: 50, marginLeft: 'auto'}}>
                        <Image
                            src="/images/carreer1.png"
                            fill="horizontal"
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Component;