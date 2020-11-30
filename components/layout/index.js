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

const Layout = ({ children, splitView, bg = "#fff", dark = false }) => {
  // Todo: Join up the custom style to the grommet theme
  // require("../../content/styles.json")
  useGithubToolbarPlugins()
  return (
    <Grommet theme={theme}>
      <Container>
        <Header bg={bg} dark={dark} />
        {children}
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
