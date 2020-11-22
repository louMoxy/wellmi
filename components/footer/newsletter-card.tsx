import { useState } from 'react';
import { Box, Text, ResponsiveContext, TextInput, Image, Button } from "grommet"
import theme from '../layout/theme';
import styled from 'styled-components';

const secondaryColor = theme.global.colors["accent-1"].light;

const SecondaryButton = styled(Button)`
  background-color: ${secondaryColor};
  border-color: ${secondaryColor};
  border-radius: 18px;
  border: solid 2px white;
  margin-left: -15px;
  z-index: 2;
  &:hover {
    box-shadow: none;
  }
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
                            style={{ background: 'white', borderRadius: '8px 0 0 8px', paddingRight: 20 }}
                            onChange={event => setValue(event.target.value)}
                        />
                        <SecondaryButton type="submit" label="submit" />
                    </Box>
                </Box>
                <ResponsiveContext.Consumer>
                    {size => size === 'medium' && (
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