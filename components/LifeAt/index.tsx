import { Box, Text } from 'grommet';
import { InlineText, InlineTextarea, BlocksControls } from 'react-tinacms-inline'
import theme from '../layout/theme';
import {HeaderText} from '../HeaderText';

export const LifeAt = ({ index, data }) => {
    const points = Array.from(Array(6)).map((_, i) => i+1);
    return (
        <BlocksControls index={index} insetControls>
            <Box justify="center" direction="row" style={{ position: 'relative' }} >
                <Box width="xlarge" pad="medium">
                    <Box direction="row" wrap={true} gap="medium" justify="between" align="start">
                        <HeaderText data={data} size="small" margin={{ top: "none", bottom: "medium" }}/>
                        <Box width="large">
                            <Text><InlineTextarea name="text"/></Text>
                        </Box>
                    </Box>
                    <Box margin={{ top: "xlarge" }} direction="row" wrap={true} justify="center">
                        {points.map((index) => (
                            <Point index={index} key={index}/>
                        ))}
                    </Box>
                </Box>
            </Box>
        </BlocksControls>
    )
}

const Point = ({ index }) => (
    <Box basis="1/3" style={{ position: 'relative' }} width={{ min: '280px' }}>
        <Box pad={{ top: "xlarge", bottom: "medium", left: "large", right: "large" }} style={{ zIndex: 2, position: 'relative' }}>
            <Box margin={{ right: "medium" }}>
                <Text size="large"><InlineText name={`point${index}.title`}/></Text>
                <Text color={theme.global.colors["text-weak"].light}><InlineTextarea name={`point${index}.text`}/></Text>
            </Box>
            <Text style={{ position: 'absolute', top: 0, right: 40, fontSize: '8rem', lineHeight: '8rem', zIndex: -1 }} color="#DBF3FC">{index}</Text>
        </Box>
    </Box>
)

export const lifeAt_template = {
    label: 'Life at Wellmi',
    fields: [
        {
            name: "headerText",
            label: "Header Text",
            component: "text",
        },
        {
            name: "num",
            label: "Number of words in accent color for title text",
            component: "number",
            step: 1
        },
        {
            name: "text",
            label: "Text",
            component: "textarea"
        },
    ],
}
