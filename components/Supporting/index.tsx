import Link from 'next/link'
import { InlineTextarea, BlocksControls, InlineText } from 'react-tinacms-inline'
import { Box, Text, Button } from 'grommet'
import { PlayFill } from 'grommet-icons'
import { StyledButton, IconButton } from './styles'
import BackgroundText from '../backgroundText'
import { HeaderText } from '../HeaderText'
import { ContentCardBlock } from '../ContentCard'

export const Supporting = ({ index, data }) => {
  return (
        <BlocksControls index={index} insetControls>
            <Box style={{ position: 'relative' }} align="center" margin={{ top: '150px' }} >
                <BackgroundText text="sotries" style={{ transform: 'rotate(-90deg)', transformOrigin: '0%', top: '50%', width: '50%', left: '18%' }} />
                <Box justify="center" align="center" style={{ zIndex: 2 }} width="xlarge">
                    <Box width="xlarge" direction="row" align="center" wrap={true} justify="center">
                        <Box pad="medium" flex={true} width={{ min: '300px' }}>
                            <HeaderText data={data} />
                            <Text>
                                <InlineTextarea name="text" />
                            </Text>
                            <Box direction="row" margin={{ top: 'large' }} gap="large" >
                                <Link href={data.link1 || '/'}>
                                    <StyledButton plain={false}><InlineText name="button1" /></StyledButton>
                                </Link>
                                <Link href={data.link2 || '/'}>
                                    <IconButton direction="row" align="center" gap="small">
                                        <Button icon={<PlayFill color="white" size="small" />} />
                                        <Text><InlineText name="button2" /></Text>
                                    </IconButton>
                                </Link>
                            </Box>
                        </Box>
                        <Box width="large" direction="row" align="center" justify="center" pad="small" wrap={true}>
                            <Box pad="small">
                                <ContentCardBlock cardName="contentCard1" secondaryButton={true} buttonLink={data.contentCard1.buttonLink} buttonText={data.contentCard1.buttonText}/>
                            </Box>
                            <Box pad="small" gap="medium">
                                <ContentCardBlock cardName="contentCard2" secondaryButton={true} buttonLink={data.contentCard2.buttonLink} buttonText={data.contentCard2.buttonText} />
                                <ContentCardBlock cardName="contentCard3" secondaryButton={true} buttonLink={data.contentCard3.buttonLink} buttonText={data.contentCard3.buttonText} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </BlocksControls>
  )
}
export const supporting_template = {
  label: 'Supporting section',
  fields: [
    {
      name: 'headingText',
      label: 'Title',
      component: 'text'
    },
    {
      name: 'num',
      label: 'Number of words in accent color for title text',
      component: 'number',
      step: 1
    },
    {
      name: 'text',
      label: 'Text',
      component: 'text'
    },
    {
      component: 'text',
      name: 'button1',
      label: 'Button 1 text'
    },
    {
      component: 'text',
      name: 'link1',
      label: 'Button 1 link'
    },
    {
      component: 'text',
      name: 'link2',
      label: 'Button 2 link'
    },
    {
      component: 'text',
      name: 'contentCard1.buttonLink',
      label: 'Content Card 1 Button link',
      description: 'If no link, the button will not show'
    },
    {
      component: 'text',
      name: 'contentCard1.buttonText',
      label: 'Content Card 1 Button text'
    },
    {
      component: 'text',
      name: 'contentCard2.buttonLink',
      label: 'Content Card 2 Button link',
      description: 'If no link, the button will not show'
    },
    {
      component: 'text',
      name: 'contentCard2.buttonText',
      label: 'Content Card 2 Button text'
    },
    {
      component: 'text',
      name: 'contentCard3.buttonLink',
      label: 'Content Card 3 Button link',
      description: 'If no link, the button will not show'
    },
    {
      component: 'text',
      name: 'contentCard2.buttonText',
      label: 'Content Card 2 Button text'
    }
  ]
}
