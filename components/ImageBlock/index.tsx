import { Box } from "grommet";
import { BlocksControls } from 'react-tinacms-inline'
import ImageComponent from '../Image';

export const ImageBlock = ({ index, data }) => {
    return (
        <BlocksControls index={index} insetControls>
            <Box align="center" margin={{ top: "medium", bottom: "medium" }}>
                <Box width={data.size} pad="medium">
                    <Box pad="medium" margin={{ top: data.size, bottom: data.size }}>
                        <ImageComponent name="image" />
                    </Box>
                </Box>
            </Box>
        </BlocksControls>
    )
}

export const image_template = {
    label: 'Image',
    defaultItem: {
        size: 'xlarge',
    },
    fields: [
        {
            component: 'select',
            name: 'size',
            label: 'Size',
            description: 'Image size',
            options: ['xlarge', 'large', 'medium', 'small', 'xsmall'],
          },
        {
            label: 'Image',
            name: 'image',
            component: 'image',
            parse: media => `/images/${media.filename}`,
            uploadDir: () => 'public/images/',
            previewSrc: fullSrc => fullSrc.replace('/public', ''),
        }
    ],
}