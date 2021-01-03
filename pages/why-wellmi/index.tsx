import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import { useGithubJsonForm } from "react-tinacms-github"
import { InlineForm, InlineBlocks } from 'react-tinacms-inline'
import { usePlugin } from "tinacms"
import getGlobalStaticProps from "../../utils/getGlobalStaticProps";
import Layout from "../../components/layout";
import Head from "../../components/head";
import {banner_template, Banner} from "../../components/Banner";
import {imageAndContent_template, ImageAndContent} from "../../components/ImageAndContent";
import {textContent_template, TextContent} from "../../components/TextContent";
import {image_template, ImageBlock} from "../../components/ImageBlock";
import {ImageCard, imageCard_template} from "../../components/largeImageCard";
import {config} from '../../utils/globalCMSConfig';

const formConfig = {
    id: 'whyWellmi',
    label: 'Why Wellmi',
    fields: config,
    initialValues: {
        "title": "Why Wellmi",
        "bgColor": "#02DB9A",
    }
  }

const WhyWellmiPage = ({ file, preview, global}) => {
    const [data, form, loading] = useGithubJsonForm(file, formConfig)
    
    if(loading){
        return <p>Loading</p>
    }
    usePlugin(form)
    const { title, bgColor} = data;
    return (
        <InlineForm form={form}>
            <Layout bg={data.bgColor} dark={true} global={global}>
                <Head title={title} />
                <InlineBlocks name="blocks" blocks={PAGE_BLOCKS} itemProps={{bgColor}}/>
            </Layout>
        </InlineForm>
    )
}

const PAGE_BLOCKS = {
    banner: {
      Component: Banner,
      template: banner_template,
    },
    imageAndContent: {
        Component: ImageAndContent,
        template: imageAndContent_template,
    },
    textContent: {
        Component: TextContent,
        template: textContent_template
    },
    imageContent: {
        Component: ImageBlock,
        template: image_template
    },
    ImageCard: {
        Component: ImageCard,
        template: imageCard_template
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
                fileRelativePath: "whyWellmi.json",
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
                fileRelativePath: "content/whyWellmi.json",
                data: (await import("../../content/whyWellmi.json")).default,
            },
            ...global,
        },
    }
}

export default WhyWellmiPage;