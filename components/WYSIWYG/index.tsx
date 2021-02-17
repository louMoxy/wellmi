import { Box } from 'grommet'
import { BlocksControls } from 'react-tinacms-inline'
import { InlineWysiwyg } from 'react-tinacms-editor'

export const WYSIWYG = ({ index, data }) => {
  return (
        <BlocksControls index={index} insetControls>
            <Box align="center">
                <Box width="large" pad="medium">
                    <InlineWysiwyg
                        name="html"
                        format="html"
                        imageProps={{
                          parse: media => `/images/${media.filename}`,
                          uploadDir: () => '/images/'
                        }}
                    >
                        <div
                            dangerouslySetInnerHTML={{
                              __html: data.html
                            }}
                        />
                    </InlineWysiwyg>
                </Box>
            </Box>
        </BlocksControls>
  )
}

export const WYSIWYG_template = {
  label: 'WYSIWYG Editor',
  defaultItem: {
    html: 'Add Content here'
  },
  fields: [
    {
      name: 'html',
      label: 'Content',
      component: 'html'
    }
  ]
}
