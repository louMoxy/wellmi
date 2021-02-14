import { node, bool, string, object } from 'prop-types'
import { useGithubJsonForm } from 'react-tinacms-github'
import { useFormScreenPlugin } from 'tinacms'
import styled from 'styled-components'
import Footer from '../footer'
import Header from '../header'
import { Grommet } from 'grommet'
import theme from './theme'
import { globalForm } from './globalForm'

const Container = styled.div`
  background: #f3f9ff;
  max-width: 100vw;
  overflow: hidden;
  .imageComponent {
    width: 100%;
    height: max-content;
    .right {
      margin-left: auto;
    }
    img {
      max-width: 100%;
      max-height: 100%;
    }
    &.border {
      border-radius: 20px;
    }
    &.link {
      width: 90px;
      margin: 24px;
    }
    &.partners {
      height: 100%;
    }
    &.partnersDetails {
      height: 100%;
      max-width: 140px;
      margin: 0 auto;
    }
    &.location {
      width: max-content;
      img {
        height: 40px;
        max-width: 40px;
        max-height: 40px;
        width: 40px;
        border: solid 4px white;
        border-radius: 50%;
      }
    }
  }
`

const Layout = ({ children, bg = '#fff', dark = false, global }) => {
  // Add to the form options
  const [globalData, hForm] = useGithubJsonForm(global.file, globalForm)
  useFormScreenPlugin(hForm)
  const { header, footer } = globalData
  return (
    <Grommet theme={theme}>
      <Container>
        <Header bg={bg} dark={dark} data={header} />
        {children}
        <Footer data={footer} />
      </Container>
    </Grommet>
  )
}

Layout.propTypes = {
  children: node,
  searchIndex: string,
  searchText: string,
  bg: string,
  dark: bool,
  form: object
}

export default Layout
