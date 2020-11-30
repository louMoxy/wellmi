import { Box, Button, Text } from "grommet";
import styled from 'styled-components';
import theme from '../layout/theme';

export const StyledButton = styled(Button)`
    color: inherit;
    border: white;
    box-shadow: 1px 2px 5px 1px #eee;
`;
export const IconButton = styled(Box)`
    button {
        background: ${theme.global.colors.brand.dark};
        border-radius: 50%;
        transition: background 0.45s;
    }
    &:hover {
        button {
            background: ${theme.global.colors.brand.light};
        }
        span {
            text-decoration: underline;
        }
    }
`;

export const StyledText = styled(Text)`
    color: ${theme.global.colors.brand.light};
    position: relative;
    padding-left: 70px;
    &:before {
        content: '';
        position: absolute;
        top: 9px;
        left: 0px;
        height: 1px;
        width: 60px;
        background: ${theme.global.colors.brand.light};
    }
`;
