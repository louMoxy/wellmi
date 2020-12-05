import { useState } from 'react';
import { Box, Text, ResponsiveContext, TextInput, Image, Button, Anchor } from "grommet"
import theme from '../layout/theme';
import styled from 'styled-components';

const secondaryColor = theme.global.colors["accent-1"].light;

const SecondaryButton = styled(Anchor)`
  background-color: ${secondaryColor};
  border-color: ${secondaryColor};
  border-radius: 12px;
  border: solid 2px white;
  margin-left: -15px;
  z-index: 2;
  width: 16rem;
  padding: 11px 8px;
  color: white !important;
  font-weight: normal;
  text-align: center;
`;

const OvelayImg = styled(Box)`
    position: relative;
    img {
        position: absolute;
        bottom: 0;
    }
`

const Container = styled(Box)`
    @media (min-width: 1000px) {
        margin-top: -100px;
    }
    @media (max-width: 1000px) {
        margin: 20px;
        width: calc(100% - 40px);
    }
`

export const NewsletterCard = () => {
    const [value, setValue] = useState('');
    const emailHeader = encodeURI('Check out this website...');
    const emailBody = encodeURI('Hi, I think you should check out this website: wellmi.co.uk');
    return (
        <Container>
            <Box background={theme.global.colors.brand.light} width="xlarge" round direction="row">
                <Box pad="large">
                    <Text size="medium" color={theme.global.colors['background-back'].light} margin={{ left: 'medium' }}>WELLMI</Text>
                    <Text size="2.5rem" color="black" margin={{ left: 'medium', bottom: 'medium', top: 'small' }}>Make your employees feel loved</Text>
                    <Box margin={{ left: 'medium' }} direction="row">
                        <TextInput
                            placeholder="example@gmail.com"
                            value={value}
                            style={{ background: 'white', borderRadius: '8px 0 0 8px', padding: 15, paddingRight: 20 }}
                            onChange={event => setValue(event.target.value)}
                        />
                        <SecondaryButton href={`mailto:${value}?subject=${emailHeader}&body=${emailBody}`}>Send to a colleague</SecondaryButton>
                    </Box>
                </Box>
                <ResponsiveContext.Consumer>
                    {size =>( size === 'medium'||  size === 'large') && (
                        <OvelayImg width="500px">
                            <Image
                                src="/images/newsletter-img.png"
                                fill="horizontal"
                            />
                        </OvelayImg>
                    )
                    }
                </ResponsiveContext.Consumer>
            </Box>
        </Container>
    )
}