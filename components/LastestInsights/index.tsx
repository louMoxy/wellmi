import { Box, Card, CardBody, Image, Heading, Paragraph, Button, Text } from "grommet";
import Title from "../title";
import BackgroundText from '../backgroundText';


const BlogCard = (args) => (
    <Card round="medium" {...args} width="340px">
        <CardBody pad="small" align="start">
            <Image src="/images/painting1.png" fill="horizontal" />
            <Heading margin="small" level="3">Life Out Loud: Self-Care: Taking better care of yourself</Heading>
            <Text margin="small">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </Text>
            <Button label="View more" primary margin="small" />
        </CardBody>
    </Card>
)

const Component = () => {
    return (
        <Box style={{ position: 'relative'}} align="center">
            <BackgroundText text="Insight" style={{ transform: 'rotate(-90deg)', transformOrigin: '100% 0', right: 214, width: 700 }} />
            <Box width="xlarge" align="center"  style={{zIndex: 2, position: 'relative'}}>
                <Title text="Latest insight" />
                <Box direction="row" gap="medium" align="start" wrap justify="center">
                    <BlogCard margin={{top: 'xlarge'}}/>
                    <BlogCard />
                    <BlogCard margin={{top: 'xlarge'}}/>
                </Box>
            </Box>
        </Box>
    )
}

export default Component;