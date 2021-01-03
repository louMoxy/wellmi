import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import { useGithubJsonForm, useGithubToolbarPlugins } from "react-tinacms-github"
import { InlineForm, InlineBlocks } from 'react-tinacms-inline'
import { usePlugin } from "tinacms"
import getGlobalStaticProps from "../../utils/getGlobalStaticProps";
import Head from "../../components/head";
import Layout from "../../components/layout";
import theme from '../../components/layout/theme';
import { Banner, banner_template } from "../../components/Banner";
import { TextContent, textContent_template } from "../../components/TextContent";
import { DemoForm, demo_template } from "../../components/DemoForm";
import { Partners, partners_template } from "../../components/Partners";
import { config } from '../../utils/globalCMSConfig';

const formConfig = {
    id: 'Demo',
    label: 'Demo',
    fields: config,
    initialValues: {
        "title": "Demo",
        "bgColor": theme.global.colors["accent-3"],
    }
}
const Page = ({ file, preview, global}) => {

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
        Component: Partners,
        template: partners_template
    },
    demo: {
        Component: DemoForm,
        template: demo_template
    },
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
                fileRelativePath: "demo.json",
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
                fileRelativePath: "content/demo.json",
                data: (await import("../../content/demo.json")).default,
            },
            ...global,
        },
    }
}

export default Page
