import { Box, AccordionPanel, Text } from "grommet"
import {InlineText, InlineTextarea, BlocksControls } from 'react-tinacms-inline'

const Header = () => (
    <Box style={{ background: "white", paddingLeft: 20, color: "#233E86" }} pad="medium" margin="none">
        <Text>
            <InlineText name="question" />
        </Text>
    </Box>
)

export const Panel = ({ index, data }) => {
    return (
        <BlocksControls index={index} insetControls>
            <AccordionPanel label={data.question} header={Header()}>
                <Box pad="medium" background="white">
                    <Text>
                        <InlineTextarea name="text" />
                    </Text>
                </Box>
            </AccordionPanel>
        </BlocksControls>
    )
}


export const panel_template = {
    label: 'Accordion',
    defaultItem: {
        question: "Question",
        text: "Add text here"
    },
    fields: [
        {
            component: "text",
            name: "question",
            label: "Question"
        },
        {
            component: "textarea",
            name: "text",
            label: "Text"
        },
    ]
}