import { Box, Footer, Text, Paragraph, Heading } from "grommet"
import Image from "next/image"
import Link from "next/link"
import { useCMS } from "tinacms"
import styled from "styled-components"
import { FacebookOption, Twitter, Instagram, Linkedin } from "grommet-icons"

const StyledLink = styled(Text)`
  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: underline;
    }
  }
`

const LegalBit = () => (
  <Box direction="row" justify="between" pad="small" width="xlarge">
    <Text size="xsmall">
      Copyright © wellmi2020 All rights reserved. | Developed by{" "}
      <a href="louisemoxhay.co.uk">Louise Moxhay</a>{" "}
    </Text>
    <Box direction="row" gap="small">
      <Link href="">
        <StyledLink size="xsmall"> Terms and conditions</StyledLink>
      </Link>
      <Link href="">
        <StyledLink size="xsmall">Privacy policy</StyledLink>
      </Link>
    </Box>
  </Box>
)
const StyledIcon = styled.a`
  padding: 10px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  background: ${(props) => props.color};
`
const text = [
  "Solution",
  "Product Overview",
  "Employee Assistance",
  "News Feed & Recognition",
  "Wellness",
  "Perks & Savings",
]

const FooterNav = () => (
  <Box direction="row-responsive" justify="between" pad="small" gap="medium">
    <Box>
      <Image src="/images/wellmi-w.png" alt="Wellmi" width={97} height={62} layout="fixed" />
      <Paragraph margin={{ top: "medium" }} size="small">
        It is a long established fact that a reader will be distracted by the readable content of a
        page when looking at its layout. The point of using
        <br></br>
        <br></br>
        It is a long established fact that a reader will be distracted by the readable content of a
        page when looking at its layout. The point of usingIt is a long established fact
      </Paragraph>
      <Box gap="small" direction="row" width={{ min: "small" }}>
        <StyledIcon href="/" color="#3B5998">
          <FacebookOption strokeWidth={0} />
        </StyledIcon>
        <StyledIcon href="/" color="#1DA1F2">
          <Twitter strokeWidth={0} />
        </StyledIcon>
        <StyledIcon href="/" color="#E1306C">
          <Instagram strokeWidth={0} />
        </StyledIcon>
        <StyledIcon href="/" color="#0077B5">
          <Linkedin strokeWidth={0} />
        </StyledIcon>
      </Box>
    </Box>
    <Box>
      <Heading level="4" margin={{ bottom: "large", top: "none" }}>
        Solution
      </Heading>
      {text.map((text, i) => (
        <Text key={i} size="small">
          {text}
        </Text>
      ))}
    </Box>
    <Box>
      <Heading level="4" margin={{ bottom: "large", top: "none" }}>
        Company
      </Heading>
      {text.map((text, i) => (
        <Text key={i} size="small">
          {text}
        </Text>
      ))}
    </Box>
    <Box>
      <Heading level="4" margin={{ bottom: "large", top: "none" }}>
        Community
      </Heading>
      {text.map((text, i) => (
        <Text key={i} size="small">
          {text}
        </Text>
      ))}
    </Box>
    <Box width="small">
      <Heading level="4" margin={{ bottom: "large", top: "none" }}>
        Get Started
      </Heading>
      <Paragraph margin={{ top: "none" }} size="small">
        It is a long established fact that a reader will be distracted by the readable content of a
        page when looking at its layout.
        <br></br>
        <br></br>
        readable content of a page when
      </Paragraph>
      <Box margin={{ top: "medium" }} direction="row" gap="small">
        <div style={{ flex: 1 }}>
          <Image
            src="/images/android-store.png"
            alt="Download for android"
            style={{ width: "100%" }}
            layout="responsive"
            width={144}
            height={47}
          />
        </div>
        <div style={{ flex: 1 }}>
          <Image
            src="/images/ios-store.png"
            alt="Download for IOS"
            layout="responsive"
            width={144}
            height={47}
          />
        </div>
      </Box>
    </Box>
  </Box>
)

const FooterComponent = () => {
  return (
    <Footer background="accent-2" justify="center" direction="column">
      <Box width="xlarge">
        <FooterNav />
      </Box>
      <Box border="top" margin={{ top: "medium" }} width="100%" align="center" pad="small">
        <LegalBit />
      </Box>
    </Footer>
  )
}
export const EditLink = () => {
  const cms = useCMS()
  return (
    <a onClick={() => cms.toggle()}>
      <i className="icon-edit" />
      {cms.enabled ? "Exit Edit Mode" : "Edit This Site With TinaCMS"}
    </a>
  )
}
export default FooterComponent
