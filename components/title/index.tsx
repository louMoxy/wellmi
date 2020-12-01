import { Heading, Box} from "grommet";
import {UnderLine} from './underline';

interface TitleProps {
    text: string;
}

const Title = ({text}: TitleProps) => {
    return (
        <Box width="medium" margin="medium">
            <Heading size="1" textAlign="center">{text}</Heading>
            <UnderLine/>
        </Box>
    )
}

export default Title;