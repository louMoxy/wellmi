import { Box, Text } from "grommet";
import { InlineTextarea, BlocksControls } from 'react-tinacms-inline'
import { HeaderText } from '../../components/HeaderText';

export const TextContent = ({ index, data }) => {
    const alignment = data.alignment === "Right" ? "end" : data.alignment === "Center" ? "center" : "start";
    const textSize = data.textSize || "medium";

    return (
        <BlocksControls index={index} insetControls>
            <Box align="center">
                <Box width="xlarge" pad="medium">
                    <Box pad="medium">
                        <HeaderText data={data} textAlign={alignment} />
                        <Text textAlign={alignment} size={textSize}><InlineTextarea name="text" /></Text>
                    </Box>
                </Box>
            </Box>
        </BlocksControls>
    )
}

export const textContent_template = {
    label: 'Text Content',
    defaultItem: {
        headingText: 'Add your Heading text here',
        text: 'Add text here ',
    },
    fields: [
        {
            name: "headingText",
            label: "Heading Text",
            component: "textarea",
        },
        {
            name: "text",
            label: "Text",
            component: "textarea",
        },
        {
            name: "textSize",
            label: "Text size",
            component: "select",
            options: ["xsmall", "small", "medium", "large", "xlarge", "xxlarge"],
            default: "medium"
        },
        {
            name: "num",
            label: "Number of words in accent color for title text",
            component: "number",
            step: 1
        },
        {
            name: "alignment",
            label: "Text alignment",
            component: "select",
            options: ["Left", "Right", "Center"],
            default: "Left"
        }
    ],
}