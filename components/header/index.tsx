import Link from "next/link"
import Image from 'next/image'
import { Header, Box, ResponsiveContext, Menu, Button } from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';
import theme from '../layout/theme';
import styled from 'styled-components';

const secondaryColor = theme.global.colors["accent-1"].light;

const SecondaryButton = styled(Button)`
  background-color: ${props => props.dark ? 'transparent' : secondaryColor};
  border-color: ${props => props.dark ? 'white' : secondaryColor};
  color: white;
  &:hover {
    box-shadow: 0px 0px 0px 2px ${secondaryColor};
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${props => props.dark ? theme.global.colors.text.dark : theme.global.colors.text.light};
  margin-top: 6px;
  padding-right: 15px;
  transition: color 0.4s;
  &:hover {
    color: ${theme.global.colors.brand.light};
  }
`

interface Props {
  bg: string;
  dark: boolean;
}


const HeaderComponent = ({bg, dark}: Props) => {
  return (
    <Header pad="medium" height="xsmall" justify="center" border="bottom" background={bg}>
      <Box width="xlarge" direction="row" justify="between" align="center">
        <a href="/">
          <Image
            src="/images/logo.png"
            alt="Wellmi"
            width={130}
            height={94}
            layout="fixed"
          />
        </a>
        <ResponsiveContext.Consumer>
          {size =>
            size === 'small' ? (
              <Box justify="end">
                <Menu
                  a11yTitle="Navigation Menu"
                  dropProps={{ align: { top: 'bottom', right: 'right' } }}
                  icon={<MenuIcon color="brand" />}
                  // Todo!
                  items={[
                    {
                      label: <Box pad="small">Grommet.io</Box>,
                      href: '/',
                    },
                    {
                      label: <Box pad="small">Feedback</Box>,
                      href: '/',
                    },
                  ]}
                />
              </Box>
            ) : (
                <Box justify="end" direction="row" gap="small">
                  <NavLink href="/" dark={dark}>
                    Why Wellmi
                    </NavLink>
                  <NavLink href="/" dark={dark}>
                    About Us
                  </NavLink>
                  <SecondaryButton label="Login" dark={dark}/>
                  <Button primary label="Get a Demo" />
                </Box>
              )
          }
        </ResponsiveContext.Consumer>
      </Box>
    </Header>
  )
}

export default HeaderComponent;
