import { Card, CardBody, Image, Heading, Button, Text } from "grommet";
import theme from './layout/theme'

interface Props {
    header: string;
    text: string;
    img: string;
    showButton?: boolean;
    margin?: object;
    secondaryButton?: boolean;
}

export const ContentCard = ({header, text, img, showButton=true, secondaryButton=false, ...args}: Props) => {
    const brandColor = theme.global.colors.brand.dark;
    const buttonStyle = secondaryButton ? {background: brandColor, color: theme.global.colors.text.dark, borderColor: brandColor} : {}
    return (
        <Card round="medium" {...args} width={{max: "340px"}} style={{ border: 'solid 12px #F8FBFF', background: '#fff' }}>
            <CardBody align="start">
                <Image src={img} fill="horizontal"/>
                <Heading margin={{top: "medium", left: "small", right: "small", bottom: "small"}} level="3">{header}</Heading>
                <Text margin="small">{text}</Text>
                {showButton && <Button label="View more" primary margin="small" style={buttonStyle}/>}
            </CardBody>
        </Card>
    )
};
