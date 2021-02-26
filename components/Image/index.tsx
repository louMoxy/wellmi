import { InlineImage } from 'react-tinacms-inline'
import { Box } from 'grommet'

interface Props {
    name: string;
    className?: string
    border?: boolean
}

const ImageComponent = ({ name, className, border = false }: Props) => {
  return (
    <Box round={border} overflow='hidden'>
        <InlineImage
            name={name}
            previewSrc={fieldValue => `${fieldValue}`}
            parse={media => `/images/${media.filename}`}
            uploadDir={() => '/images/'}
            focusRing={false}
            className={`imageComponent ${className}`}
        />
    </Box>
  )
}

export default ImageComponent
