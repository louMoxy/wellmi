import { useState } from 'react';
import { useGithubJsonForm, useGithubToolbarPlugins } from "react-tinacms-github"
import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import { InlineForm, InlineBlocks, InlineTextarea } from 'react-tinacms-inline'
import { usePlugin } from "tinacms"
import getGlobalStaticProps from "../../utils/getGlobalStaticProps";
import { Box, Heading, Text, Accordion, Form, FormField, TextInput, Button, TextArea, Select } from "grommet"
import Layout from "../../components/layout";
import theme from '../../components/layout/theme';
import Head from "../../components/head";
import { Panel, panel_template } from '../../components/Accordion';
import { Banner, banner_template } from "../../components/Banner";

import countries from '../../components/DemoForm/countries.json';
import { config } from '../../utils/globalCMSConfig';
import { HeaderText } from '../../components/HeaderText';

const formConfig = {
    id: 'HelpCenter',
    label: 'Help Center',
    fields: [
        ...config,
        {
            component: "textarea",
            name: "text",
            label: "Text"
        },
        {
            component: "text",
            name: "headerText",
            label: "Title"
        },
        {
            name: "num",
            label: "Number of words in accent color for title text",
            component: "number",
            step: 1
        },
    ],
    initialValues: {
        "title": "Help Center",
        "bgColor": theme.global.colors["accent-3"],
    }
}

const HelpPage = ({ file, preview, global }) => {
    const [data, form, loading] = useGithubJsonForm(file, formConfig)
    if (loading) {
        return <p>Loading</p>
    }
    usePlugin(form)
    const { title } = data;
    const [active, setActive] = useState([0]);
    return (
        <InlineForm form={form}>
            <Layout bg={data.bgColor} dark={true} global={global}>
                <Head title={title} />
                <InlineBlocks name="blocks" blocks={PAGE_BLOCKS} itemProps={{ bgColor: data.bgColor }} />
                <Box justify="center" direction="row" margin={{ top: "medium" }}>
                    <Box width="xlarge" pad="medium">
                        <Box pad="medium">
                            <Box width={{ max: "500px" }}>
                                <HeaderText data={data} size="3rem" />
                            </Box>
                            <Text color="text-weak"><InlineTextarea name="text" /></Text>
                        </Box>
                        <Accordion margin={{ top: "medium", bottom: "medium" }} pad="medium" gap="medium" activeIndex={active} onActive={setActive} multiple={true}>
                        <InlineBlocks name="accordion" blocks={ACCORDION_BLOCKS} />
                        {/* {questions.map((q, i) => (
                                <AccordionPanel key={i} label={q.question} style={{ background: "white", paddingLeft: 20, color: "#233E86" }}>
                                    <Box pad="medium" background="white">
                                        <Text dangerouslySetInnerHTML={{ __html: q.answer }} />
                                    </Box>
                                </AccordionPanel>
                            ))} */}
                        </Accordion>
                    </Box>
                </Box>
                <Box justify="center" direction="row">
                    <Box width="xlarge" pad="medium">
                        <Box pad="medium" align="end">
                            <Heading size="3rem" textAlign="end"><span style={{ color: theme.global.colors.brand.light }}>Still need </span>help? <br></br>Contact us.</Heading>
                        </Box>
                        <Box>
                            <Form method="POST" data-netlify="true" name="help">
                            <input type="hidden" name="form-name" value="Help form"/>
                                <Box direction="row" wrap={true}>
                                    <Box basis="1/2" flex pad="small">
                                        <FormField name="name" label="Your Name" style={{ background: 'white' }}>
                                            <TextInput name="name" placeholder="Jahid Jaykar" required />
                                        </FormField>
                                        <FormField name="country" label="Your Country" style={{ background: 'white' }}>
                                            <Select placeholder="Select a country" options={countries} />
                                        </FormField>
                                        <FormField name="email" label="Your Email" style={{ background: 'white' }}>
                                            <TextInput name="email" placeholder="jahid.jaykar@gmail.com" required />
                                        </FormField>
                                    </Box>
                                    <Box basis="1/2" width={{ min: "320px" }} flex pad="small">
                                        <FormField name="message" label="Your Message" style={{ background: 'white' }} height="100%" required>
                                            <TextArea name="message" placeholder="Write your message here..." fill resize={false} style={{ height: "220px" }} />
                                        </FormField>
                                    </Box>
                                </Box>
                                <Box align="end" margin="small">
                                    <Button type="submit" primary label="Submit" style={{ width: "30%", minWidth: 200 }} />
                                </Box>
                            </Form>
                        </Box>
                    </Box>
                </Box>
            </Layout>
        </InlineForm>
    )
}

const PAGE_BLOCKS = {
    banner: {
        Component: Banner,
        template: banner_template,
    }
}

const ACCORDION_BLOCKS = {
    panel: {
        Component: Panel,
        template: panel_template,
    }
}

/**
 * Fetch data with getStaticProps based on 'preview' mode
 */
export const getStaticProps = async function ({ preview, previewData }) {
    const global = await getGlobalStaticProps(preview, previewData)

    if (preview) {
        // get data from github
        const file = (
            await getGithubPreviewProps({
                ...previewData,
                fileRelativePath: "helpCenter.json",
                parse: parseJson,
            })
        ).props

        return {
            props: {
                ...file,
                ...global,
            },
        }
    }
    // render from the file system.
    return {
        props: {
            sourceProvider: null,
            error: null,
            preview: false,
            file: {
                fileRelativePath: "content/helpCenter.json",
                data: (await import("../../content/helpCenter.json")).default,
            },
            ...global,
        },
    }
}

export default HelpPage;