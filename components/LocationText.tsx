import { Box, Text, Image } from 'grommet';
import { InlineTextarea } from 'react-tinacms-inline'
import ImageComponent from './Image';

interface Props {
    name: string;
    imgName: string;
}

export const LocationText = ({name, imgName}: Props) => {
    return (
        <Box margin={{ top: "medium" }} direction="row" gap="small" pad="small" align="center">
            <ImageComponent name={imgName} className="location"/>
            <Text size="small">
                <InlineTextarea name={name} />
            </Text>
        </Box>
    )
}