import { Box, Text } from 'grommet';
import BackgroundText from '../backgroundText';

const Component = () => {
    return (
        <Box justify="center" direction="row" style={{ position: 'relative' }} >
            <BackgroundText text="Careers" style={{ transform: 'rotate(-90deg)', left: -130, width: 600, top: -50 }} />
            <Box width="xlarge" direction="row" wrap={true} justify="center" style={{zIndex: 1}}>
                <TextImage title="Respect" text="We respect human being, opinions and choices." imageSrc="/images/career1.png"/>
                <TextImage title="Trust" text="We trust ourselves and each other" imageSrc="/images/career2.png"/>
                <TextImage title="Transparency" text="We value transparency to take the best decisions as a team." imageSrc="/images/career3.png"/>
            </Box>
        </Box>
    )
}

const TextImage = ({title, text, imageSrc}) => (
    <Box basis="1/3">
        <Box flex="shrink"  margin="medium" style={{ position: 'relative' }} background={`url(${imageSrc})`} height="medium" justify="end" round="small" animation="fadeIn">
            <Box background="linear-gradient( transparent, rgba(0,0,0,0.4));" style={{ height: '100%', width: '100%', position: "absolute", pointerEvents: "none" }} round="small"></Box>
            <Box align="center" pad={{ left: "medium", right: "medium", bottom: "large", top: "large"}} height="small">
                <Text size="large" margin="small" color="white" style={{zIndex: 1}}>{title}</Text>
                <Text textAlign="center" color="white" style={{zIndex: 1}}>{text}</Text>
            </Box>
        </Box>
    </Box>
)

export default Component;