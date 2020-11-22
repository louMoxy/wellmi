import { Box, Text, Button } from "grommet";
import styled from 'styled-components';
import theme from '../layout/theme';

export const IconButton = styled(Box)`
    button {
        background: ${theme.global.colors.brand.light};
        border-radius: 50%;
        transition: background 0.45s;
    }
    &:hover {
        button {
            background: ${theme.global.colors.brand.dark};
        }
        span {
            text-decoration: underline;
        }
    }
`;


const secondaryColor = theme.global.colors["accent-1"].light;

export const StyledButton = styled(Button)`
  background-color: ${secondaryColor};
  border-color: ${secondaryColor};
  &:hover {
    box-shadow: 0px 0px 0px 2px ${secondaryColor};
  }
`;
