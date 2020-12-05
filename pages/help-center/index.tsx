import { useState } from 'react';
import { Box, Heading, Text, Accordion, AccordionPanel, Form, FormField, TextInput, Button, TextArea, Select} from "grommet"
import Layout from "../../components/layout";
import theme from '../../components/layout/theme';
import Head from "../../components/head";
import Banner from "../../components/Banner";
import countries from '../../components/DemoForm/countries.json';


const questions = [
    {
        question: "How do I sign up for Wellmi?", answer: `
    There are two different ways to sign up for Wellmi. <br>
     Email invitation: <br>
If you have received an email invitation, follow the link in the email to create your Wellmi account.<br>
     Auto Enrolment:<br>
If your company has completed the auto enrolment process for you, you can simply download the free Wellmi mobile app from the Apple App Store or Google Play Store on your smartphone and enter details provided to you by your company representative on the “login” section.<br>
If you haven't received an email invitation or login details, please contact your HR/Benefits department or Wellmi administrator to find out how to sign up.<br>
Have more questions? Submit a request.
    `},
    { question: "How do I access Wellmi?", answer: "..." },
    { question: "How do I change my password?", answer: "..." },
    { question: "What of my invitation/sign up link doesn’t work?", answer: "..." },
]

const HelpPage = () => {
    const bgColor = theme.global.colors["accent-3"];
    const [active, setActive] = useState([0]);
    return (
        <Layout bg={bgColor} dark={true}>
            <Head title="Help Center" />
            <Banner color={bgColor} title="Wellmi" title2="Help Centre"
                text="Simply fill out some details below and <br> we’ll take care of the rest." largeSecond={true} image="/images/helpBanner.png" />
            <Box justify="center" direction="row" margin={{ top: "medium" }}>
                <Box width="xlarge" pad="medium">
                    <Box pad="medium">
                        <Box width={{ max: "500px" }}>
                            <Heading size="3rem"><span style={{ color: theme.global.colors.brand.light }}>Wellmi </span>Frequently asked questions</Heading>
                        </Box>
                        <Text color="text-weak">Help, support and guidance that adapts and changes for your entire workforce.</Text>
                    </Box>
                    <Accordion margin={{ top: "medium", bottom: "medium" }} pad="medium" gap="medium" activeIndex={active} onActive={setActive} multiple={true}>
                        {questions.map((q, i) => (
                            <AccordionPanel key={i} label={q.question} style={{ background: "white", paddingLeft: 20, color: "#233E86" }}>
                                <Box pad="medium" background="white">
                                    <Text dangerouslySetInnerHTML={{ __html: q.answer }} />
                                </Box>
                            </AccordionPanel>
                        ))}
                    </Accordion>
                </Box>
            </Box>
            <Box justify="center" direction="row">
                <Box width="xlarge" pad="medium">
                    <Box pad="medium" align="end">
                        <Heading size="3rem" textAlign="end"><span style={{ color: theme.global.colors.brand.light }}>Still need </span>help? <br></br>Contact us.</Heading>
                    </Box>
                    <Box>
                        <Form
                            onSubmit={({ value }) => {
                                console.log(value);
                            }}
                        >
                            <Box direction="row" wrap={true}>
                                <Box basis="1/2" flex pad="small">
                                    <FormField name="name" label="Your Name" style={{ background: 'white' }}>
                                        <TextInput name="name" placeholder="Jahid Jaykar" required/>
                                    </FormField>
                                    <FormField name="country" label="Your Country" style={{ background: 'white' }}>
                                        <Select placeholder="Select a country" options={countries}/>
                                    </FormField>
                                    <FormField name="email" label="Your Email" style={{ background: 'white' }}>
                                        <TextInput name="email" placeholder="jahid.jaykar@gmail.com" required/>
                                    </FormField>
                                </Box>
                                <Box basis="1/2" width={{min: "320px"}} flex pad="small">
                                    <FormField name="message" label="Your Message" style={{ background: 'white' }} height="100%" required>
                                        <TextArea name="message" placeholder="Write your message here..." fill resize={false} style={{height: "220px"}} />
                                    </FormField>
                                </Box>
                            </Box>
                            <Box align="end" margin="small">
                                <Button type="submit" primary label="Submit" style={{width: "30%", minWidth: 200}}/>
                            </Box>
                        </Form>
                    </Box>
                </Box>
            </Box>
        </Layout>
    )
}

export default HelpPage;