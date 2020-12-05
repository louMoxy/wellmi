import { node, bool, string } from "prop-types"
import { useGithubToolbarPlugins } from "react-tinacms-github"
import styled from "styled-components"
import Footer from "@components/footer"
import Header from "@components/header"
import { Grommet } from "grommet"
import theme from "./theme"

const Container = styled.div`
  background: #f3f9ff;
  max-width: 100vw;
  overflow: hidden;
`

export const LayoutBodyStyled = styled.main`
  min-height: calc(100vh - 250px);
  max-width: calc(1048px + 40px);
  margin: 0 auto;
  padding: 0 20px;
  padding-bottom: 1px;
  padding-top: 6px;
  ${({ splitView }) =>
    splitView &&
    css`
      @media all and (min-width: 768px) {
        display: flex;
        padding-top: 24px;
      }
    `}
`

const Layout = ({ form, children, splitView, bg = "#fff", dark = false }) => {
  console.log(form, splitView)
  // Todo: Join up the custom style to the grommet theme
  // require("../../content/styles.json")
  useGithubToolbarPlugins()
  return (
    <Grommet theme={theme}>
      <Container>
        <Header bg={bg} dark={dark} />
        {children}
        <LayoutBodyStyled splitView={splitView}>{children}</LayoutBodyStyled>
        <Footer />
      </Container>
    </Grommet>
  )
}

Layout.propTypes = {
  children: node,
  showDocsSearcher: bool,
  splitView: bool,
  searchIndex: string,
  searchText: string,
  bg: string,
  dark: bool,
}

Layout.defaultProps = {
  showDocsSearcher: false,
  splitView: false,
}

export default Layout
