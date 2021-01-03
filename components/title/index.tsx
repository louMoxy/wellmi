import { Heading, Box} from "grommet";
import { InlineTextarea } from 'react-tinacms-inline'
import {UnderLine} from './underline';

interface TitleProps {
    name: string;
}

export const Title = ({name}: TitleProps) => {
    return (
        <Box width="medium" margin="medium">
            <Heading size="1" textAlign="center">
                <InlineTextarea name={name}/>
            </Heading>
            <UnderLine/>
        </Box>
    )
}

export default Title;