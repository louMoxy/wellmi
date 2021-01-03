import { InlineImage } from 'react-tinacms-inline'

interface Props {
    name: string;
    className?: string
}

const ImageComponent = ({ name, className }: Props) => {
    return (
        <InlineImage
            name={name}
            previewSrc={fieldValue => `${fieldValue}`}
            parse={media => `/images/${media.filename}`}
            uploadDir={() => '/public/images/'}
            focusRing={false}
            className={`imageComponent ${className}`}
        />
    )
}

export default ImageComponent;