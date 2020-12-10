import { Box, Text, Paragraph, Heading, Button } from "grommet"
import Link from "next/link"
import { FacebookOption, Twitter, Instagram, LinkedinOption, Image } from "grommet-icons"
import { StyledFooter, StyledIcon } from "./styles"
import { NewsletterCard } from "./newsletter-card"
import { useCMS } from "tinacms"

const LegalBit = () => (
  <Box direction="row" justify="between" pad="small" width="xlarge">
    <Text size="xsmall">
      Copyright © wellmi 2020 All rights reserved. | Developed by{" "}
      <a href="louisemoxhay.co.uk" size="xsmall">
        Louise Moxhay
      </a>
    </Text>
    <Box direction="row" gap="small">
      <Link href="">
        <Text size="xsmall"> Terms and conditions</Text>
      </Link>
      <Link href="">
        <Text size="xsmall">Privacy policy</Text>
      </Link>
    </Box>
  </Box>
)

const text = [
  "Solution",
  "Product Overview",
  "Employee Assistance",
  "News Feed & Recognition",
  "Wellness",
  "Perks & Savings",
]
const FooterNav = () => (
  <Box direction="row" justify="between" pad="small" wrap>
    <Box pad={{ bottom: "large", top: "medium" }}>
      <Image src="/images/wellmi-w.png" alt="Wellmi" width={97} height={62} layout="fixed" />
      <Paragraph margin={{ top: "medium" }} size="small">
        It is a long established fact that a reader will be distracted by the readable content of a
        page when looking at its layout. The point of using
        <br></br>
        <br></br>
        It is a long established fact that a reader will be distracted by the readable content of a
        page when looking at its layout. The point of usingIt is a long established fact
      </Paragraph>
      <Box gap="small" direction="row">
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
          <LinkedinOption strokeWidth={0} />
        </StyledIcon>
      </Box>
    </Box>
    <Box direction="row" justify="between" pad="small" margin={{ left: "auto" }} wrap>
      <Box pad="small" margin={{ bottom: "small" }}>
        <Heading level="4" margin={{ bottom: "medium", top: "none" }}>
          Solution
        </Heading>
        {text.map((text, i) => (
          <Text key={i} size="small">
            {text}
          </Text>
        ))}
      </Box>
      <Box pad="small" margin={{ bottom: "small" }}>
        <Heading level="4" margin={{ bottom: "medium", top: "none" }}>
          Company
        </Heading>
        {text.map((text, i) => (
          <Text key={i} size="small">
            {text}
          </Text>
        ))}
      </Box>
      <Box pad="small" margin={{ bottom: "small" }}>
        <Heading level="4" margin={{ bottom: "medium", top: "none" }}>
          Community
        </Heading>
        {text.map((text, i) => (
          <Text key={i} size="small">
            {text}
          </Text>
        ))}
      </Box>
      <Box pad="small" width="small">
        <Heading level="4" margin={{ bottom: "medium", top: "none" }}>
          Get Started
        </Heading>
        <Paragraph margin={{ top: "none" }} size="small">
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout.
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
  </Box>
)

const FooterComponent = () => {
  return (
    <StyledFooter background="accent-2" justify="center" direction="column">
      <NewsletterCard />
      <Box width="xlarge">
        <FooterNav />
      </Box>
      <Box border="top" width="100%" align="center">
        <LegalBit />
      </Box>
      <EditLink />
    </StyledFooter>
  )
}

export const EditLink = () => {
  const cms = useCMS()
  return (
    <Button onClick={() => cms.toggle()}>
      <i className="icon-edit" />
      {cms.enabled ? "Exit Edit Mode" : "Edit This Site With TinaCMS"}
    </Button>
  )
}
export default FooterComponent
