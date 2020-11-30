import { Box, Text, Heading, Image, Button } from 'grommet';
import { LinkNext } from 'grommet-icons';
import { useState } from 'react';
import theme from '../layout/theme';

const Component = () => {
    return (
        <Box justify="center" direction="row" margin={{ top: "medium" }}>
            <Box width="xlarge" pad="medium" align="center">
                <Heading textAlign="center"><span style={{ color: theme.global.colors.brand.light }}>Want to </span>become one of us?</Heading>
                <Box width="medium">
                    <Text size="xsmall" textAlign="center">See a range of available positions below. Use the Arrows to select one before submitting a CV. We can’t wait to hear from you.</Text>
                </Box>
                <Box margin={{ top: "large", bottom: "large" }}>
                    <Card title="Product Designer" location="Glouscester, UK" price="2500" />
                    <Card title="Digital Marketer" location="Remote" price="2500" type="Contractual"/>
                    <Card title="Social Media Manager" location="Glouscester, UK" price="1800" />
                    <Card title="Software Engineer" location="Glouscester, UK" price="2500" />
                </Box>
                <Box width="large">
                    <Text margin="medium" textAlign="center">Did not find a position that suits you? Don't worry you can send us your CV and we will review it.</Text>
                </Box>
                <Button primary label="Send CV"/>
            </Box>
        </Box>
    )
}

const Card = ({ title, location, type = "Full Time", price }) => {
    const lightText = theme.global.colors["text-xweak"].light;
    const [hover, setHover] = useState(false);
    const highlightedColor = hover ? theme.global.colors.brand.light : theme.global.colors.text.light
    return (
        <Box background="white" elevation={hover ? "medium" : "small"} width="xlarge" direction="row" justify="between" pad="xsmall" hoverIndicator={true} wrap={true}
            onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} margin={{top: "medium"}}>
            <Box direction="row" justify="between" pad="large" basis="1/2" width={{ min: "300px" }} flex={true}>
                <Box direction="row" gap="small"  basis="2/3" >
                    {hover ? <Image src="/images/personIconSelected.png" width="30px" height="30px" /> :
                        <Image src="/images/personIcon.png" width="30px" height="30px" />

                    }
                    <Text color={highlightedColor}>{title}</Text>
                </Box>
                <Box direction="row" gap="small" align="center"  basis="1/3" >
                    <Image src="/images/locationIcon.png" height="15px" />
                    <Text color={lightText}>{location}</Text>
                </Box>
            </Box>
            <Box direction="row" justify="between" pad="large" basis="1/2" width={{ min: "300px" }} flex={true} align="center">
                <Box direction="row" gap="small" align="center" >
                    <Image src="/images/clock.png" height="15px" />
                    <Text color={lightText}>{type}</Text>
                </Box>
                <Box direction="row" gap="small" align="center" >
                    <Image src="/images/dollar-symbol.png" height="15px" />
                    <Text color={lightText}>{price}</Text>
                </Box>
                <Box>
                    <LinkNext color={highlightedColor} />
                </Box>
            </Box>
        </Box>
    )
}

export default Component;