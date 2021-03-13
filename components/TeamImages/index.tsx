import { Box, Text, Anchor } from 'grommet'
import { InlineText, BlocksControls, InlineBlocks } from 'react-tinacms-inline'
import theme from '../layout/theme'
import { HeaderText } from '../HeaderText'
import { UnderLine } from '../title/underline'
import styled from 'styled-components'
import ImageComponent from '../Image'

const StyledBox = styled(Box)`
    background: ${theme.global.colors.brand.light};
    transition: background 0.4s;
    &:hover {
        background: ${theme.global.colors.brand.dark};
    }
`

const StyledInlineBlocks = styled(InlineBlocks)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 450px) {
    padding: 40px;
    grid-template-columns: 1fr;
  }
`

export const TeamImages = ({ index, data }) => {
  return (
        <BlocksControls index={index} insetControls>
            <Box align="center">
                <Box width="xlarge" direction="column" wrap={true} pad="medium">
                    <Box width={{ max: 'medium' }}>
                        <Text size="small" color="text-xweak">
                            <InlineText name="smallText" />
                        </Text>
                        <HeaderText data={data} size="medium" margin="none" />
                        <Box style={{ position: 'relative', transform: 'scale(0.6)', marginLeft: -40, maxWidth: 220 }}>
                            <UnderLine width="100%" />
                        </Box>
                    </Box>
                    <StyledInlineBlocks name="cards" blocks={EMPLOYEE_BLOCKS} direction="horizontal" />
                </Box>
            </Box>
        </BlocksControls>
  )
}

const LinkBox = ({ index, data }) => (
    <BlocksControls index={index} insetControls>
        <Anchor href={data.link} alignSelf="center">
            <StyledBox height="200px" width="200px" justify="center" align="center" margin="medium">
                <ImageComponent name="image" className="link"/>
                <Text color="white" weight="normal"><InlineText name="text" /></Text>
            </StyledBox>
        </Anchor>
    </BlocksControls>
)

const linkBox_template = {
  label: 'Link Box',
  defaultItem: {
    _template: 'LinkBox',
    link: '/',
    parse: (media) => `/images/${media.filename}`,
    uploadDir: () => '/images/'
  },
  fields: [
    {
      name: 'link',
      label: 'Link',
      component: 'text'
    },
    {
      name: 'text',
      label: 'Text',
      component: 'text'
    },
    {
      label: 'Image',
      name: 'image',
      component: 'image',
      parse: media => `/images/${media.filename}`,
      uploadDir: () => '/images/'
    }
  ]
}

const EmployeeCard = ({ index }) => {
  return (
        <BlocksControls index={index} insetControls>
            <Box pad="large">
                <Box align="end">
                    <ImageComponent name="locationImg" className="location" />
                </Box>
                <ImageComponent name="image" />
                <Text size="2rem" textAlign="center" margin="small"><InlineText name="name" /></Text>
                <Text color="text-light" size="small" textAlign="center"><InlineText name="title" /></Text>
            </Box>
        </BlocksControls>
  )
}

const employee_template = {
  label: 'Employee Card',
  defaultItem: {
    _template: 'employeeCard',
    name: 'Name',
    title: 'Title',
    parse: (media) => `/images/${media.filename}`,
    uploadDir: () => '/images/'
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      component: 'text',
      default: 'Name'
    },
    {
      name: 'title',
      label: 'Title',
      component: 'text'
    },
    {
      label: 'Image',
      name: 'image',
      component: 'image',
      parse: media => `/images/${media.filename}`,
      uploadDir: () => '/images/'
    },
    {
      label: 'Location Image',
      name: 'locationImg',
      component: 'image',
      parse: media => `/images/${media.filename}`,
      uploadDir: () => '/images/'
    }
  ]
}

export const EMPLOYEE_BLOCKS = {
  employeeCard: {
    Component: EmployeeCard,
    template: employee_template
  },
  LinkBox: {
    Component: LinkBox,
    template: linkBox_template
  }
}

export const team_template = {
  label: 'Team section',
  fields: [
    {
      name: 'headingText',
      label: 'Title',
      component: 'text'
    },
    {
      name: 'smallText',
      label: 'Title',
      component: 'text'
    },
    {
      name: 'num',
      label: 'Number of words in accent color for title text',
      component: 'number',
      step: 1
    }
  ]
}
