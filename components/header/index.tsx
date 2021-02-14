import { Header, Box, ResponsiveContext, Menu, Button, Image } from 'grommet'
import { Menu as MenuIcon } from 'grommet-icons'
import theme from '../layout/theme'
import styled from 'styled-components'

const secondaryColor = theme.global.colors['accent-1'].light

const SecondaryButton = styled(Button)`
  background-color: ${props => props.dark ? 'transparent' : secondaryColor};
  border-color: ${props => props.dark ? 'white' : secondaryColor};
  color: white;
  &:hover {
    box-shadow: 0px 0px 0px 2px ${secondaryColor};
  }
`

const NavLink = styled.a`
  text-decoration: none;
  color: ${props => props.dark ? theme.global.colors.text.dark : theme.global.colors.text.light};
  margin-top: 6px;
  padding-right: 15px;
  transition: color 0.4s;
  &:hover {
    color: ${props => props.bg === theme.global.colors.brand.light ? theme.global.colors.text.light : theme.global.colors.brand.light};
  }
`

interface Props {
  bg: string;
  dark: boolean;
  data: {
    logo: {
      light: string;
      dark: string;
    },
    navigation: {
      name: string;
      link: string;
    }[],
    buttons: {
      name: string;
      link: string;
    }[],

  }
}

const HeaderComponent = ({ bg, dark, data }: Props) => {
  if (!data) {
    return null
  }
  const logo = dark ? data.logo.dark : data.logo.light
  const menuItems = [...data.navigation, ...data.buttons].map(({ name, link }) => (
    {
      label: <Box pad="small">{name}</Box>,
      href: link
    }
  ))
  return (
    <Header pad="medium" height="xsmall" justify="center" border="bottom" background={bg}>
      <Box width="xlarge" direction="row" justify="between" align="center">
        <a href="/">
          <Image
            src={logo}
            alt="Wellmi"
            width={110}
          />
        </a>
        <ResponsiveContext.Consumer>
          {size =>
            size === 'small'
              ? (
              <Box justify="end">
                <Menu
                  a11yTitle="Navigation Menu"
                  dropProps={{ align: { top: 'bottom', right: 'right' } }}
                  icon={<MenuIcon color={dark ? 'white' : 'brand'} />}
                  items={menuItems}
                />
              </Box>
                )
              : (
                <Box justify="end" direction="row" gap="small">
                  {data.navigation.map(({ name, link }) => (
                    <NavLink href={link} dark={dark} key={link} bg={bg}>
                      {name}
                    </NavLink>
                  ))}
                  <a href={data.buttons[0].link}>
                    <SecondaryButton label={data.buttons[0].name} dark={dark}/>
                  </a>
                  <a href={data.buttons[1].link}>
                    <Button primary label={data.buttons[1].name} />
                  </a>
                </Box>
                )
          }
        </ResponsiveContext.Consumer>
      </Box>
    </Header>
  )
}

export default HeaderComponent
