import { node, bool, any, string } from "prop-types"
import { useGithubToolbarPlugins } from "react-tinacms-github"
import Footer from "@components/footer"
import Header from "@components/header"
import { Grommet } from "grommet"
import theme from "./theme"

const Layout = ({ children, splitView }) => {
  // Todo: Join up the custom style to the grommet theme
  // require("../../content/styles.json")
  useGithubToolbarPlugins()
  return (
    <Grommet theme={theme}>
      <Header />
      {children}
      <Footer />
    </Grommet>
  )
}

Layout.propTypes = {
  children: node,
  showDocsSearcher: bool,
  splitView: bool,
  searchIndex: string,
  searchText: string,
}

Layout.defaultProps = {
  showDocsSearcher: false,
  splitView: false,
}

export default Layout
