import { Box, Text, Paragraph, Heading, Button, Image } from 'grommet'
import { FacebookOption, Twitter, Instagram, LinkedinOption } from 'grommet-icons'
import { StyledFooter, StyledIcon } from './styles'
import { NewsletterCard } from './newsletter-card'
import { useCMS } from 'tinacms'

const LegalBit = ({ year, terms }) => (
  <Box direction="row" justify="between" pad="small" width="xlarge">
    <Box direction="row">
      <EditLink />
      <Text size="xsmall">
        Copyright © wellmi {year} All rights reserved. | Developed by{' '}
        <a href="https://louisemoxhay.co.uk/" size="xsmall">
          Louise Moxhay
        </a>
      </Text>
    </Box>
    <Box direction="row" gap="small">
      {terms.map(({ name, link }, index) => (
        <a href={link} key={index}>
          <Text size="xsmall"> {name}</Text>
        </a>
      ))}
    </Box>
  </Box>
)

const EditLink = () => {
  const cms = useCMS()
  return (
    <Button
      onClick={() => cms.toggle()}
      style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', paddingRight: 8 }}
      aria-label='Edit page'
    >
      <i className="icon-edit" />
      {cms.enabled ? 'Exit Edit Mode' : ''}
    </Button>
  )
}

const FooterNav = ({
  logoImg,
  p1,
  header1,
  navigation1,
  facebook,
  instagram,
  linkedin,
  twitter,
  header2,
  header4,
  header3,
  navigation2,
  navigation3,
  p2,
  downloadImgs
}) => (
  <Box direction="row" justify="between" pad="small" wrap>
    <Box pad={{ bottom: 'large', top: 'medium' }}>
      <Image src={logoImg} alt="Wellmi" width={97} height={62} layout="fixed" />
      <Paragraph margin={{ top: 'medium' }} size="small">
        {p1}
      </Paragraph>
      <Box gap="small" direction="row">
        <StyledIcon href={facebook} color="#3B5998">
          <FacebookOption strokeWidth={0} />
        </StyledIcon>
        <StyledIcon href={twitter} color="#1DA1F2">
          <Twitter strokeWidth={0} />
        </StyledIcon>
        <StyledIcon href={instagram} color="#E1306C">
          <Instagram strokeWidth={0} />
        </StyledIcon>
        <StyledIcon href={linkedin} color="#0077B5">
          <LinkedinOption strokeWidth={0} />
        </StyledIcon>
      </Box>
    </Box>
    <Box direction="row" justify="between" pad="small" margin={{ left: 'auto' }} wrap>
      <Box pad="small" margin={{ bottom: 'small' }}>
        <Heading level="4" margin={{ bottom: 'medium', top: 'none' }}>
          {header1}
        </Heading>
        {navigation1?.map(({ name, link, id }) => (
          <a key={id} href={link}>
            <Text size="small">{name}</Text>
          </a>
        ))}
      </Box>
      <Box pad="small" margin={{ bottom: 'small' }}>
        <Heading level="4" margin={{ bottom: 'medium', top: 'none' }}>
          {header2}
        </Heading>
        {navigation2?.map(({ name, link, id }) => (
          <a key={id} href={link}>
            <Text size="small">{name}</Text>
          </a>
        ))}
      </Box>
      <Box pad="small" margin={{ bottom: 'small' }}>
        <Heading level="4" margin={{ bottom: 'medium', top: 'none' }}>
          {header3}
        </Heading>
        {navigation3?.map(({ name, link, id }) => (
          <a key={id} href={link}>
            <Text size="small">{name}</Text>
          </a>
        ))}
      </Box>
      <Box pad="small" width="250px">
        <Heading level="4" margin={{ bottom: 'medium', top: 'none' }}>
          {header4}
        </Heading>
        <Paragraph margin={{ top: 'none' }} size="small">
          {p2}
        </Paragraph>
        <Box margin={{ top: 'medium' }} direction="row" gap="small">
          {downloadImgs?.map(({ image, alt, link }, index) => (
            <a href={link} style={{ flex: 1 }} key={index}>
              <Image src={image} alt={alt} style={{ width: '100%' }} layout="responsive" />
            </a>
          ))}
        </Box>
      </Box>
    </Box>
  </Box>
)

const FooterComponent = ({ data = { footerNav: [], terms: [] } }) => {
  const { footerNav, terms } = data
  const year = new Date().getFullYear()
  return (
    <StyledFooter background="accent-2" justify="center" direction="column">
      <NewsletterCard />
      <Box width="xlarge">
        <FooterNav {...footerNav} />
      </Box>
      <Box border="top" width="100%" align="center">
        <LegalBit year={year} terms={terms} />
      </Box>
    </StyledFooter>
  )
}

export default FooterComponent
