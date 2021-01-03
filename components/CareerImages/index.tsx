import { Box, Text } from 'grommet';
import { InlineText, BlocksControls } from 'react-tinacms-inline'
import BackgroundText from '../backgroundText';

export const CareerImages = ({ index, data }) => {
    return (
        <BlocksControls index={index} insetControls>
            <Box justify="center" direction="row" style={{ position: 'relative' }} >
                <BackgroundText text="Careers" style={{ transform: 'rotate(-90deg)', left: -130, width: 600, top: -50 }} />
                <Box width="xlarge" direction="row" wrap={true} justify="center" style={{ zIndex: 1 }}>
                    <TextImage componentName="image1" data={data}/>
                    <TextImage componentName="image2" data={data}/>
                    <TextImage componentName="image3"data={data} />
                </Box>
            </Box>
        </BlocksControls>
    )
}

const TextImage = ({ componentName, data}) => {
    const img = data[componentName].image
    return (
        <Box basis="1/3">
        <Box flex="shrink" margin="medium" style={{ position: 'relative' }} background={`url(${img})`} height="medium" justify="end" round="small" animation="fadeIn">
            <Box background="linear-gradient( transparent, rgba(0,0,0,0.4));" style={{ height: '100%', width: '100%', position: "absolute", pointerEvents: "none" }} round="small"></Box>
            <Box align="center" pad={{ left: "medium", right: "medium", bottom: "large", top: "large" }} height="small">
                <Text size="large" margin="small" color="white" style={{ zIndex: 1 }} textAlign="center" ><InlineText name={`${componentName}.title`}/></Text>
                <Text textAlign="center" color="white" style={{ zIndex: 1 }}><InlineText name={`${componentName}.text`}/></Text>
            </Box>
        </Box>
    </Box>
    )
}

export const careerImages_template = {
    label: 'Career Images',
    fields: [
        {
            name: "image1.title",
            label: "Image 1 title",
            component: "text",
        },
        {
            name: "image1.text",
            label: "Image 1 text",
            component: "text",
        },
        {
            label: 'Image 1 Image',
            name: 'image1.image',
            component: 'image',
            parse: media => `/images/${media.filename}`,
            uploadDir: () => 'public/images/',
            previewSrc: fullSrc => fullSrc.replace('/public', ''),
        },
        {
            name: "image2.title",
            label: "Image 2 title",
            component: "text",
        },
        {
            name: "image2.text",
            label: "Image 2 text",
            component: "text",
        },
        {
            label: 'Image 2 Image',
            name: 'image2.image',
            component: 'image',
            parse: media => `/images/${media.filename}`,
            uploadDir: () => 'public/images/',
            previewSrc: fullSrc => fullSrc.replace('/public', ''),
        },
        {
            name: "image3.title",
            label: "Image 3 title",
            component: "text",
        },
        {
            name: "image3.text",
            label: "Image 3 text",
            component: "text",
        },
        {
            label: 'Image 3 Image',
            name: 'image3.image',
            component: 'image',
            parse: media => `/images/${media.filename}`,
            uploadDir: () => 'public/images/',
            previewSrc: fullSrc => fullSrc.replace('/public', ''),
        }
    ],
}
