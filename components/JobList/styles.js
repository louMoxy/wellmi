import styled from "styled-components"
import { Box } from "grommet"
import theme from "../layout/theme"

export const Container = styled(Box)`
  .highlight {
    transition: color 0.4s;
  }
  &:hover .highlight {
    color: ${theme.global.colors.brand.light};
    svg {
      fill: ${theme.global.colors.brand.light};
      stroke: ${theme.global.colors.brand.light};
    }
  }
`
