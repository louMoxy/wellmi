import { Heading, Box} from "grommet";
import styled from 'styled-components';
import theme from '../layout/theme';

interface TitleProps {
    text: string;
}
const color = theme.global.colors.brand.light;
const UnderLine  = styled.div`
    width: 60%;
    height: 2px;
    margin: 20px auto;
    background: linear-gradient(90deg, ${color} 0%, ${color} 43%, transparent 43%, transparent 56%, ${color} 56%, ${color} 100%);
    position: relative;
    &:before {
        content: '';
        background: ${theme.global.colors.brand.light};
        height: 20px;
        width: 20px;
        left: calc(50% - 10px);
        top: -9px;
        position: absolute;
        transform: rotate(45deg);
        border-radius: 4px;
    }
`;


const Title = ({text}: TitleProps) => {
    return (
        <Box width="medium" margin="medium">
            <Heading size="1" textAlign="center">{text}</Heading>
            <UnderLine> </UnderLine>
        </Box>
    )
}

export default Title;