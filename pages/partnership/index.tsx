import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import { useGithubJsonForm } from "react-tinacms-github"
import { InlineForm, InlineBlocks, InlineTextarea } from 'react-tinacms-inline'
import { usePlugin } from "tinacms"
import { Text, Box, Form, FormField, TextInput, TextArea, Button } from 'grommet';
import getGlobalStaticProps from "../../utils/getGlobalStaticProps";
import Head from "../../components/head";
import Layout from "../../components/layout";
import theme from '../../components/layout/theme';
import { Banner, banner_template } from "../../components/Banner";
import { TextContent, textContent_template } from "../../components/TextContent";
import { ImageAndContent, imageAndContent_template } from "../../components/ImageAndContent";
import { PartnersDetails, PartnersDetails_template } from "../../components/PartnersDetails";
import { config } from '../../utils/globalCMSConfig';
import { HeaderText } from '../../components/HeaderText';

const formConfig = {
    id: 'Partnership',
    label: 'Partnership',
    fields: config,
    initialValues: {
        "title": "Partnership",
        "bgColor": theme.global.colors["accent-3"],
    }
}
const Page = ({ file, preview, global }) => {

    const [data, form, loading] = useGithubJsonForm(file, formConfig)
    if (loading) {
        return <p>Loading</p>
    }
    usePlugin(form)
    const { title } = data;
    return (
        <InlineForm form={form}>
            <Layout bg={data.bgColor} dark={true} global={global}>
                <Head title={title} />
                <InlineBlocks name="blocks" blocks={PAGE_BLOCKS} itemProps={{ bgColor: data.bgColor }} />
                <Box align="center" margin={{ top: "medium", bottom: "medium" }}>
                    <Box width="xlarge" pad="medium">
                        <HeaderText data={data} />
                        <Text margin={{bottom: "large"}}><InlineTextarea name="formText" /></Text>
                        <Form method="POST" data-netlify="true" name="partnership">
                            <input type='hidden' name='form-name' value='partnership' />
                                <Box direction="row" wrap={true}>
                                    <Box basis="1/2" flex pad="small">
                                        <FormField name="name" label="Your Name" style={{ background: 'white' }}>
                                            <TextInput name="name" placeholder="Jahid Jaykar" required />
                                        </FormField>
                                        <FormField name="number" label="Phone Number" style={{ background: 'white' }}>
                                            <TextInput type="tel" name="number" placeholder="+880 1745639584" required />
                                        </FormField>
                                        <FormField name="email" label="Your Email" style={{ background: 'white' }}>
                                            <TextInput type="email" name="email" placeholder="jahid.jaykar@gmail.com" required />
                                        </FormField>
                                        <FormField name="company" label="Your Company" style={{ background: 'white' }}>
                                            <TextInput name="company" placeholder="Dgpro Studio" required />
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
            </Layout>
        </InlineForm>
    )
}

const PAGE_BLOCKS = {
    banner: {
        Component: Banner,
        template: banner_template,
    },
    textContent: {
        Component: TextContent,
        template: textContent_template
    },
    partners: {
        Component: PartnersDetails,
        template: PartnersDetails_template
    },
    imageAndContent: {
        Component: ImageAndContent,
        template: imageAndContent_template
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
                fileRelativePath: "partnership.json",
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
                fileRelativePath: "content/partnership.json",
                data: (await import("../../content/partnership.json")).default,
            },
            ...global,
        },
    }
}

export default Page
