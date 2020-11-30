import { Box, Text, Heading } from 'grommet';
import theme from '../layout/theme';

const Component = () => {
    return (
        <Box justify="center" direction="row" style={{ position: 'relative' }} >
            <Box width="xlarge" pad="medium">
                <Box direction="row" wrap={true} gap="medium" justify="between" align="start">
                    <Heading size="small" margin={{ top: "none", bottom: "medium" }}><span style={{ color: theme.global.colors.brand.light }}>Life</span> at Wellmi</Heading>
                    <Box width="large">
                        <Text>At Wellmi, we love our people and we want everyone to feel loved and make the most of your career here. That’s why we support every aspect of your physical and mental well-being with our core values.</Text>
                    </Box>
                </Box>
                <Box margin={{top: "xlarge"}} direction="row" wrap={true} justify="center">
                    <Point num="1" title="Be Happy" text="We approach life in a positive and optimistic way"/>
                    <Point num="2" title="Breathe" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"/>
                    <Point num="3" title="Meet Great People" text="It is a long established fact that a reader distracted by the readable content"/>
                    <Point num="4" title="Start Doing" text="We approach life in a positive and optimistic way"/>
                    <Point num="5" title="Work Smarter " text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"/>
                    <Point num="6" title="Become a Better You" text="It is a long established fact that a reader distracted by the readable content"/>
                </Box>
            </Box>
        </Box>
    )
}

const Point = ({title, text, num}) => (
    <Box basis="1/3" style={{position: 'relative'}} width={{min: '280px'}}>
        <Box pad={{top: "xlarge", bottom: "medium", left: "large", right: "large"}} style={{zIndex: 2, position: 'relative'}}>
            <Box margin={{right: "medium"}}>
                <Text size="large">{title}</Text>
                <Text color={theme.global.colors["text-weak"].light}>{text}</Text>
            </Box>
            <Text style={{position: 'absolute', top: 0, right: 40, fontSize: '8rem', lineHeight: '8rem', zIndex: -1}} color="#DBF3FC">{num}</Text>
        </Box>
    </Box>
)

export default Component;