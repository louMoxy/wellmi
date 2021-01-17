import { Box } from "grommet";
import { BlocksControls } from 'react-tinacms-inline'
import { InlineWysiwyg } from "react-tinacms-editor"

export const ColWysiwyg = ({ index, data }) => {
    console.log(data)
    const cols = Array.from(Array(+data.cols).keys())
    return (
        <BlocksControls index={index} insetControls>
            <Box align="center">
                <Box width="xlarge" pad="medium" direction="row" wrap>
                    {cols.map((index) => (
                        <Box pad="small" key={index} basis={+data.cols === 2 ? "1/2" : "1/3"} className="content" width={{min: '300px'}} flex justify={data[`justify${index+1}`]}>
                            <InlineWysiwyg
                                name={`html${index + 1}`}
                                format="html"
                                imageProps={{
                                    parse: media => `/images/${media.filename}`,
                                    uploadDir: () => 'public/images/',
                                    previewSrc: fullSrc => fullSrc.replace('/public', ''),
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
        justify3: "center"
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
            name: "justify1",
            label: "Justify Content column 1",
            component: "select",
            options: ['start', 'center', 'end', 'between', 'around'],
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
            name: "html3",
            label: "Content column 3",
            component: "html",
        },
    ],
}