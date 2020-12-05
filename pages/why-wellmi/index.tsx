import { useState } from 'react';
import { Box, Heading, Text, Accordion, AccordionPanel, Form, FormField, TextInput, Button, TextArea, Select, Image } from "grommet"
import Layout from "../../components/layout";
import theme from '../../components/layout/theme';
import Head from "../../components/head";
import Banner from "../../components/Banner";

const ContentCard = ({right = false, src}) => {
    return (
        <Box pad="large" width={{min: "400px", max: "900px"}} background="linear-gradient( transparent, transparent 30%, white 31%, white)"  alignSelf={right ? 'end': 'start'} margin={{bottom: "large"}}>
            <Image src={src} width="85%" margin={{bottom: "medium"}} alignSelf={right ? 'end': 'start'}/>
            <Heading size="small" textAlign={right ? 'end' : 'start'}>What makes Wellmi different from other EAP solutions?</Heading>
            <Text textAlign={right ? 'end' : 'start'}>Traditional EAP programmes typically have a very low uptake rate, only reaching the small percentage of you’re employees who report an issue or ask for help. </Text>
            <Text textAlign={right ? 'end' : 'start'}>Traditional EAP programmes typically have a very low uptake rate, only reaching the small percentage of you’re employees who report an issue or ask for help. </Text>
        </Box>
    )
}

const HelpPage = () => {
    const bgColor = "#02DB9A";
    return (
        <Layout bg={bgColor} dark={true}>
            <Head title="Help Center" />
            <Banner color={bgColor} title="Why" title2="Wellmi?"
                text="" largeSecond={true} image="/images/whywellmi.png" />
            <Box align="center" margin={{top: "medium", bottom: "medium"}}>
                <Box width="xlarge" pad="medium">
                    <Box direction="row" wrap>
                        <Box pad="small" basis="45%">
                            <Image src="/images/whywellmi1.png" fill="horizontal" fit="contain"/>
                        </Box>
                        <Box pad={{left: "medium", right: "medium", top: "medium", bottom: "large"}} basis="55%" align="start" justify="end">
                            <Text style={{marginBottom: 40}}>
                                Employee support in the modern world should be proactive, genuine, and accessible.  Giving your valued workforce the tools they deserve to prevent poor mental and physical health & wellbeing.
                    </Text>
                            <Button label="Know More" primary></Button>
                        </Box>
                    </Box>
                    <Box width={{min: "min-content", max: "700px"}} pad="medium" margin={{top: "xlarge", bottom: "xlarge"}}>
                        <Heading size="small"><span style={{ color: theme.global.colors.brand.light }}>Why make </span>employee wellbeing a priority</Heading>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</Text>
                    </Box>
                    <Image src="/images/whywellmi-chart.png" fill="horizontal" fit="contain"/>
                    <ContentCard src="/images/whywellmi2.png" />
                    <ContentCard right src="/images/whywellmi3.png" />
                </Box>
            </Box>

        </Layout>
    )
}

export default HelpPage;