import { node, bool, string, object } from "prop-types"
import { useGithubJsonForm } from "react-tinacms-github"
import { useFormScreenPlugin } from "tinacms"
import styled from "styled-components"
import Footer from "@components/footer"
import Header from "@components/header"
import { Grommet } from "grommet"
import theme from "./theme"
import { getBlogPosts } from "@utils"

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

const globalForm = {
  label: "Header settings",
  fields: [
    {
      label: "Logo for light background",
      name: "logo.light",
      component: "image",
      parse: (media) => `/images/${media.filename}`,
      uploadDir: () => "public/images/",
      previewSrc: (fullSrc) => fullSrc.replace("/public", ""),
    },
    {
      label: "Logo for dark background",
      name: "logo.dark",
      component: "image",
      parse: (media) => `/images/${media.filename}`,
      uploadDir: () => "public/images/",
      previewSrc: (fullSrc) => fullSrc.replace("/public", ""),
    },
    {
      label: "Navigation",
      name: "navigation",
      component: "group-list",
      description: "Navigation List",
      itemProps: (item) => ({
        key: item.name,
        label: item.name,
      }),
      defaultItem: () => ({
        name: "New Link",
        link: "/",
      }),
      fields: [
        {
          label: "Name",
          name: "name",
          component: "text",
        },
        {
          label: "Link",
          name: "link",
          component: "text",
        },
      ],
    },
    {
      label: "Buttons Navigation",
      name: "buttons",
      component: "group-list",
      description: "Button List",
      itemProps: (item) => ({
        key: item.name,
        label: item.name,
      }),
      defaultItem: () => ({
        name: "New Link",
        link: "/",
      }),
      fields: [
        {
          label: "Name",
          name: "name",
          component: "text",
        },
        {
          label: "Link",
          name: "link",
          component: "text",
        },
      ],
    },
  ],
}

const Layout = ({ children, bg = "#fff", dark = false, global }) => {
  const [_, form] = useGithubJsonForm(global, globalForm)

  useFormScreenPlugin(form)
  return (
    <Grommet theme={theme}>
      <Container>
        <Header bg={bg} dark={dark} global={global.data} />
        {children}
        <Footer />
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
  form: object,
}

export default Layout
