import { Card, CardBody, Image, Heading, Button, Text } from "grommet";
import { InlineTextarea, BlocksControls, InlineText } from 'react-tinacms-inline'
import ImageComponent from './Image';
import theme from './layout/theme'

interface Props {
    header: string;
    text: string;
    img: string;
    showButton?: boolean;
    margin?: object;
    secondaryButton?: boolean;
    link?: string
}

const brandColor = theme.global.colors.brand.dark;

export const ContentCard = ({header, text, img, showButton=true, secondaryButton=false, link, ...args}: Props) => {
    const buttonStyle = secondaryButton ? {background: brandColor, color: theme.global.colors.text.dark, borderColor: brandColor} : {}
    return (
        <Card round="medium" {...args} width={{max: "340px"}} style={{ border: 'solid 12px #F8FBFF', background: '#fff' }}>
            <CardBody align="start">
                <Image src={img} fill="horizontal"/>
                <Heading margin={{top: "medium", left: "small", right: "small", bottom: "small"}} level="3">{header}</Heading>
                <Text margin="small">{text}</Text>
                {showButton && <Button href={link} label="View more" primary margin="small" style={buttonStyle}/>}
            </CardBody>
        </Card>
    )
};

export const ContentCardBlock = ({cardName, secondaryButton, buttonLink, ...args}) => {
    const buttonStyle = secondaryButton ? {background: brandColor, color: theme.global.colors.text.dark, borderColor: brandColor} : {}
    return (
        <Card round="medium" {...args} width={{max: "340px"}} style={{ border: 'solid 12px #F8FBFF', background: '#fff' }}>
            <CardBody align="start">
                <ImageComponent name={`${cardName}.image`}/>
                <Heading margin={{top: "medium", left: "small", right: "small", bottom: "small"}} level="3">
                    <InlineText name={`${cardName}.heading`}/>
                </Heading>
                <Text margin="small">
                    <InlineTextarea name={`${cardName}.text`}/>
                </Text>
                {buttonLink && <Button label="View more" primary margin="small" style={buttonStyle} href={buttonLink}/>}
            </CardBody>
        </Card>
    )
};
