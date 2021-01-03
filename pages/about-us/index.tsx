import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import { useGithubJsonForm, useGithubToolbarPlugins } from "react-tinacms-github"
import { InlineForm, InlineBlocks } from 'react-tinacms-inline'
import { usePlugin } from "tinacms"
import getGlobalStaticProps from "../../utils/getGlobalStaticProps";
import Head from "../../components/head";
import Layout from "../../components/layout";
import theme from '../../components/layout/theme';
import { Banner, banner_template } from "../../components/Banner";
import {TitleAndContent, titleAndContent_template} from "../../components/TitleAndContent";
import {offices_template, Offices} from "../../components/OurOffices";
import {TeamImages, team_template, EMPLOYEE_BLOCKS} from "../../components/TeamImages";
import { config } from '../../utils/globalCMSConfig';
import { TextContent, textContent_template } from "../../components/TextContent";

const formConfig = {
    id: 'Careers',
    label: 'Careers',
    fields: config,
    initialValues: {
        "title": "Careers",
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
    titleAndContent: {
        Component: TitleAndContent,
        template: titleAndContent_template,
    },
    textContent: {
        Component: TextContent,
        template: textContent_template,
    },
    offices: {
        Component: Offices,
        template: offices_template,
    },
    team: {
        Component: TeamImages,
        template: team_template,
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
                fileRelativePath: "aboutUs.json",
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
                fileRelativePath: "content/aboutUs.json",
                data: (await import("../../content/aboutUs.json")).default,
            },
            ...global,
        },
    }
}

export default Page
