import { useGithubJsonForm } from "react-tinacms-github"
import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import { InlineForm, InlineBlocks } from 'react-tinacms-inline'
import { usePlugin } from "tinacms"
import { getBlogPosts } from "../../utils";
import getGlobalStaticProps from "../../utils/getGlobalStaticProps";
import Layout from "../../components/layout";
import theme from '../../components/layout/theme';
import Head from "../../components/head";
import { Banner, banner_template } from "../../components/Banner";
import { ImageAndText, imageAndText_template } from "../../components/ImageAndTextComponent";
import {TextContent, textContent_template} from '../../components/TextContent'
import {ColWysiwyg_template, ColWysiwyg} from '../../components/col-wysiwyg'
import { config } from '../../utils/globalCMSConfig';

const formConfig = {
    id: 'ProductOverview',
    label: 'Product Overview',
    fields: [
        ...config,
    ],
    initialValues: {
        "title": "Product Overview",
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
            </Layout>
        </InlineForm>
    )
}

const PAGE_BLOCKS = {
    banner: {
        Component: Banner,
        template: banner_template,
    }, 
    imageAndText: {
        Component: ImageAndText,
        template: imageAndText_template
    },
    textContent: {
        Component: TextContent,
        template: textContent_template
    },
    cols: {
        Component: ColWysiwyg,
        template: ColWysiwyg_template
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
                fileRelativePath: "productOverview.json",
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
                fileRelativePath: "content/productOverview.json",
                data: (await import("../../content/productOverview.json")).default,
            },
            ...global,
        },
    }
}

export default Page;