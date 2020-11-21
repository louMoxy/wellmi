import { Footer } from "grommet"
import styled from "styled-components"

export const StyledFooter = styled(Footer)`
  a {
    text-decoration: none;
    color: inherit;
    cursor: ;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (min-width: 700px) {
    margin-top: 100px;
  }
  @media (min-width: 850px) {
    margin-top: 200px;
  }
  @media (min-width: 1000px) {
    margin-top: 300px;
  }
`

export const StyledIcon = styled.a`
  padding: 7px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  background: ${(props) => props.color};
  border: solid 1px transparent;
  transition: border-color 0.4s;
  &:hover {
    border-color: white;
  }
`
