import { Box } from "grommet";
import { BlocksControls } from 'react-tinacms-inline'
import ImageComponent from '../Image';
import Title from "../title";
import BackgroundText from '../backgroundText';

export const Partners = ({ index, data }) => {
    const {backgroundText = '', showBackgroundText = true} = data || {};
    const images = ['image1', 'image2', 'image3', 'image4'];
    return (
        <BlocksControls index={index} insetControls>
            <Box pad="large" style={{ position: 'relative' }}>
                {showBackgroundText && <BackgroundText text={backgroundText} style={{width: '50%', top: '19%'}}/>}
                <Box style={{zIndex: 2}} align="center">
                    <Title name='text'/>
                    <Box direction="row" gap="large" width="xlarge" justify="around" pad='large' background="white" border round="40px" margin="medium">
                        {images.map((img, i) => (
                            <Box key={i} height="80px" width="auto">
                                <ImageComponent name={img} className="partners"/>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </BlocksControls>
    )
}

export const partners_template = {
    label: 'Partners',
    fields: [
        {
            component: 'text',
            name: "backgroundText",
            label: "Background text",
            default: "partners"
        },
        {
            name: "num",
            label: "Number of words in accent color for title text",
            component: "number",
            step: 1
        },
        {
            component: 'text',
            name: "text",
            label: "Text",
            default: "Organizations already enjoying Wellmi"
        },
        {
            label: 'Image 1',
            name: 'image1',
            component: 'image',
            parse: media => `/images/${media.filename}`,
            uploadDir: () => 'public/images/',
            previewSrc: fullSrc => fullSrc.replace('/public', ''),
        },
        {
            label: 'Image 2',
            name: 'image2',
            component: 'image',
            parse: media => `/images/${media.filename}`,
            uploadDir: () => 'public/images/',
            previewSrc: fullSrc => fullSrc.replace('/public', ''),
        },
        {
            label: 'Image 3',
            name: 'image4',
            component: 'image',
            parse: media => `/images/${media.filename}`,
            uploadDir: () => 'public/images/',
            previewSrc: fullSrc => fullSrc.replace('/public', ''),
        },
        {
            label: 'Image 4',
            name: 'image4',
            component: 'image',
            parse: media => `/images/${media.filename}`,
            uploadDir: () => 'public/images/',
            previewSrc: fullSrc => fullSrc.replace('/public', ''),
        }
    ],
}


