import { Box, Text } from "grommet"
import { InlineTextarea, BlocksControls } from "react-tinacms-inline"
import ImageComponent from "../Image"

export const PartnersDetails = ({ index, data }) => {
  const arr = Array.from(Array(4).keys())
  return (
    <BlocksControls index={index} insetControls>
      <Box align="center">
        <Box width="xlarge" pad="medium" direction="row" wrap justify="center">
          {arr.map((index) => (
            <Box
              background="linear-gradient(transparent 20%, white 20.1%);"
              pad="medium"
              style={{ width: "22%", minWidth: 200 }}
              key={index}
              margin="small"
            >
              <Box
                background="white"
                width="max-content"
                pad="medium"
                elevation="small"
                height="100px"
              >
                <ImageComponent name={`image${index + 1}`} className="partnersDetails" />
              </Box>
              <Text margin={{ top: "medium", bottom: "small" }} size="small">
                <InlineTextarea name={`text${index + 1}`} />
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
    </BlocksControls>
  )
}

export const PartnersDetails_template = {
  label: "Partners Details",
  fields: [
    {
      component: "text",
      name: "text1",
      label: "Text",
    },
    {
      component: "text",
      name: "text2",
      label: "Text",
    },
    {
      component: "text",
      name: "text3",
      label: "Text",
    },
    {
      component: "text",
      name: "text4",
      label: "Text",
    },
    {
      label: "Image 1",
      name: "image1",
      component: "image",
      parse: (media) => `/images/${media.filename}`,
      uploadDir: () => "public/images/",
      previewSrc: (fullSrc) => fullSrc.replace("/public", ""),
    },
    {
      label: "Image 2",
      name: "image2",
      component: "image",
      parse: (media) => `/images/${media.filename}`,
      uploadDir: () => "public/images/",
      previewSrc: (fullSrc) => fullSrc.replace("/public", ""),
    },
    {
      label: "Image 3",
      name: "image4",
      component: "image",
      parse: (media) => `/images/${media.filename}`,
      uploadDir: () => "public/images/",
      previewSrc: (fullSrc) => fullSrc.replace("/public", ""),
    },
    {
      label: "Image 4",
      name: "image4",
      component: "image",
      parse: (media) => `/images/${media.filename}`,
      uploadDir: () => "public/images/",
      previewSrc: (fullSrc) => fullSrc.replace("/public", ""),
    },
  ],
}
