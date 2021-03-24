import { Box, Text, Image } from 'grommet'
import Link from 'next/link'
import { InlineText, BlocksControls } from 'react-tinacms-inline'
import { LinkNext } from 'grommet-icons'
import theme from '../layout/theme'
import { Container } from './styles'
import { PersonIcon } from './personSvg'

const lightText = theme.global.colors['text-xweak'].light
const color = theme.global.colors.text.light

export const JobCard = ({ index, data }) => {
  return (
        <BlocksControls index={index} insetControls>
            <Box justify="center" direction="row">
                <Box width="xlarge" pad="small" align="center">
                    <Link href={data.link || '/'}>
                        <Container background="white" elevation="small" width="xlarge" direction="row" justify="between" pad="xsmall" hoverIndicator={true} wrap={true}>
                            <Box direction="row" justify="between" pad="large" basis="1/2" width={{ min: '280px' }} flex={true}>
                                <Box direction="row" gap="small" basis="2/3" align="center">
                                    <PersonIcon width="30px" height="30px" className="highlight" />
                                    <Text color={color} className="highlight"><InlineText name="title" /></Text>
                                </Box>
                                <Box direction="row" gap="small" align="center" basis="1/3" >
                                    <Image src="/images/locationIcon.png" height="15px" alt={data.location}/>
                                    <Text color={lightText}><InlineText name="location" /></Text>
                                </Box>
                            </Box>
                            <Box direction="row" justify="between" pad="large" basis="1/2" width={{ min: '280px' }} flex={true} align="center">
                                <Box direction="row" gap="small" align="center" >
                                    <Image src="/images/clock.png" height="15px" alt='clock'/>
                                    <Text color={lightText}><InlineText name="type" /></Text>
                                </Box>
                                <Box direction="row" gap="small" align="center" >
                                    <Image src="/images/dollar-symbol.png" height="15px" alt='dollar' />
                                    <Text color={lightText}><InlineText name="price" /></Text>
                                </Box>
                                <Box className="highlight">
                                    <LinkNext color={color} />
                                </Box>
                            </Box>
                        </Container>
                    </Link>
                </Box>
            </Box>
        </BlocksControls>
  )
}

export const card_template = {
  label: 'Job card',
  fields: [
    {
      name: 'link',
      label: 'Heading Text',
      component: 'text'
    },
    {
      name: 'title',
      label: 'Job Title',
      component: 'text'
    },
    {
      name: 'location',
      label: 'Location',
      component: 'text'
    },
    {
      name: 'price',
      label: 'Price',
      component: 'text'
    },
    {
      name: 'type',
      label: 'Type',
      component: 'text',
      default: 'Full Time'
    }
  ]
}
