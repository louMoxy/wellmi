import { Box, Heading, Text, Paragraph } from "grommet";
import theme from '../layout/theme';
import { UnderLine } from '../title/underline';

const Component = () => {
    return (
        <Box align="center">
            <Box width="xlarge" direction="row" wrap={true} pad="small">  
                <Box width="320px" pad="small">
                    <Text size="xsmall" color="text-xweak">Our Story</Text>
                    <Heading margin="none" size="small"><span style={{ color: theme.global.colors.brand.light }}>How it </span>all started in 2017?</Heading>
                    <Box style={{ position: 'relative', transform: 'scale(0.6)', marginLeft: -60 }} >
                        <UnderLine width="100%" />
                    </Box>
                </Box>
                <Box pad="small" flex={true} width={{min: "400px"}}>
                    <Paragraph fill={true} color="text-light">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur. <br></br>
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the.
                        <br></br>
                            <br></br>
                        From a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
                        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                        <br></br>
                            <br></br>
                        The first  line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                        <br></br>
                            <br></br>
                        Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        <br></br>
                            <br></br>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        <br></br>
                            <br></br>
                        It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </Paragraph>
                </Box>
            </Box>
        </Box>
    )
}

export default Component;