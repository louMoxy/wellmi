import { Box, Image } from "grommet";
import Title from "../title";
import BackgroundText from '../backgroundText';

const images = [
    "/images/Heart-Heroes-Logo-colour.png",
    "/images/Cirencester-College-Logo.png",
    "/images/opp-hub-png.png",
    "/images/ncs-ltd.png",
]

const Partners = ({showBackgroundText = true}) => {
    return (
        <Box pad="large" style={{ position: 'relative' }}>
            {showBackgroundText && <BackgroundText text='partners' style={{width: '50%', top: '19%'}}/>}
            <Box style={{zIndex: 2}} align="center">
                <Title text='Organizations already enjoying Wellmi' />
                <Box direction="row" gap="large" width="xlarge" justify="around" pad='large' background="white" border round="40px" margin="medium">
                    {images.map((img, i) => (
                        <Box key={i} height="80px" width="auto">
                            <Image
                                fit="contain"
                                src={img}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default Partners;