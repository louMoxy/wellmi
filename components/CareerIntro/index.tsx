import { Box, Text, Button } from "grommet";
import { InlineText, InlineTextarea, BlocksControls } from 'react-tinacms-inline'
import styled from 'styled-components';
import theme from '../layout/theme';

const StyledText = styled(Text)`
    position: relative;
    padding-left: 20px;
    padding-top: 5px;
    &:before {
        content: '';
        position: absolute;
        height: 10px;
        width: 10px;
        top: 13px;
        left: 0;
        border-radius: 50%;
        background: ${theme.global.colors.brand.light};
    }
`

export const CareersIntro = ({ index, data }) => {
    return (
        <BlocksControls index={index} insetControls>
            <Box direction="column" align="center" pad="medium">
                <Box width="xlarge" justify="start" direction="row">
                    <Box basis="3/4">
                        <Text size="xlarge"><InlineTextarea name="text" /></Text>
                    </Box>
                </Box>
                <Box width="xlarge" justify="between" direction="row" pad={{ top: 'large', bottom: 'large' }} wrap={true}>
                    <StyledText margin={{ bottom: 'medium' }}><InlineText name="text1"/></StyledText>
                    <Button primary margin={{ left: 'medium', bottom: 'medium' }} href={data.buttonLink || '/'} style={{padding: "8px 20px"}}>
                        <InlineText name="buttonText"/>
                    </Button>
                </Box>
            </Box>
        </BlocksControls>
    )
}


export const careerIntro_template = {
    label: 'Career Intro',
    fields: [
        {
            name: "text",
            label: "Text",
            component: "textarea",
        },
        {
            name: "text1",
            label: "Left Text",
            component: "text"
        },
        {
            name: "buttonText",
            label: "Button Text",
            component: "text"
        },
        {
            name: "buttonLink",
            label: "Button Link",
            component: "text"
        }
    ],
}

