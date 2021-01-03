import { Box, Text, Button } from "grommet";
import ImageComponent from '../Image';
import { InlineText, InlineTextarea, BlocksControls } from 'react-tinacms-inline'

export const ImageAndContent = ({index, data}) => {
    return (
        <BlocksControls index={index} insetControls>
            <Box align="center" margin={{ top: "medium", bottom: "medium" }}>
                <Box width="xlarge" pad="medium">
                    <Box direction={data.side === "Left" ? "row" : "row-reverse"} wrap>
                        <Box pad="small" basis="45%">
                            <ImageComponent name="image" />
                        </Box>
                        <Box pad={{ left: "medium", right: "medium", top: "medium", bottom: "large" }} basis="55%" align="start" justify="end">
                            <Text style={{ marginBottom: 40 }}>
                                <InlineTextarea name="text" />
                            </Text>
                            <Button primary label={<InlineText name="buttonText" />} href={data.link}/>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </BlocksControls>
    )
}

export const imageAndContent_template = {
    label: 'Image and Content',
    defaultItem: {
        text: 'Add your text here',
        buttonText: 'Button Text',
        side: 'Left',
        link: '/'
    },
    fields: [
        {
            name: "text",
            label: "Text",
            component: "textarea",
        },
        {
            name: "buttonText",
            label: "Button Text",
            component: "text",
        },
        {
            name: "link",
            label: "Link",
            component: "text",
        },
        {
            component: 'select',
            name: 'side',
            label: 'Side',
            description: 'Select which side the image should be',
            options: ['Left', 'Right'],
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