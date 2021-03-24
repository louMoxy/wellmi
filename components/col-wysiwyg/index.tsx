import { Box } from "grommet";
import { BlocksControls } from 'react-tinacms-inline'
import { InlineWysiwyg } from "react-tinacms-editor"

export const ColWysiwyg = ({ index, data }) => {
    const cols = Array.from(Array(+data.cols).keys())
    return (
        <BlocksControls index={index} insetControls>
            <Box align="center">
                <Box width="xlarge" pad={data.padding ? 'medium' : {top: 'none', bottom: 'none', right: 'medium', left: 'medium'}} direction="row" wrap>
                    {cols.map((index) => (
                        <Box pad="small" key={index} basis={+data.cols === 2 ? "1/2" : "1/3"} className="content" width={{ min: '280px' }} flex justify={data[`justify${index + 1}`]} style={{ textAlign: data[`textAlign${index + 1}`] || 'left' }}>
                            <InlineWysiwyg
                                name={`html${index + 1}`}
                                format="html"
                                imageProps={{
                                    parse: media => `/images/${media.filename}`,
                                    uploadDir: () => '/images/'
                                }}
                            >
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: data[`html${index + 1}`],
                                    }}
                                />
                            </InlineWysiwyg>
                        </Box>
                    ))}

                </Box>
            </Box>
        </BlocksControls>
    )
}

export const ColWysiwyg_template = {
    label: 'Column WYSIWYG Editor',
    defaultItem: {
        cols: 3,
        html1: "Add Content here",
        html2: "Add Content here",
        html3: "Add Content here",
        justify1: "center",
        justify2: "center",
        justify3: "center",
        textAlign1: "left",
        textAlign2: "left",
        textAlign3: "left",
        padding: true,
    },
    fields: [
        {
            name: "cols",
            label: "Number of Columns",
            component: "select",
            options: [1, 2, 3],
            default: 3
        },
        {
            name: "padding",
            label: "Top and bottom padding",
            component: "toggle",
            default: true
        },
        {
            name: "justify1",
            label: "Justify Content column 1",
            component: "select",
            options: ['start', 'center', 'end', 'between', 'around'],
        },
        {
            name: "textAlign1",
            label: "Text align column 1",
            component: "select",
            options: ['left', 'center', 'right']
        },
        {
            name: "html1",
            label: "Content column 1",
            component: "html",
        },
        {
            name: "justify2",
            label: "Justify Content column 2",
            component: "select",
            options: ['start', 'center', 'end', 'between', 'around'],
        },
        {
            name: "textAlign2",
            label: "Text align column 1",
            component: "select",
            options: ['left', 'center', 'right']
        },
        {
            name: "html2",
            label: "Content column 2",
            component: "html",
        },
        {
            name: "justify3",
            label: "Justify Content column 3",
            component: "select",
            options: ['start', 'center', 'end', 'between', 'around'],
        },
        {
            name: "textAlign3",
            label: "Text align column 1",
            component: "select",
            options: ['left', 'center', 'right']
        },
        {
            name: "html3",
            label: "Content column 3",
            component: "html",
        },
    ],
}
