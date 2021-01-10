import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import { useGithubJsonForm, useGithubToolbarPlugins } from "react-tinacms-github"
import { usePlugin } from "tinacms"
import { InlineForm, InlineBlocks } from 'react-tinacms-inline'
import getGlobalStaticProps from "../../utils/getGlobalStaticProps";
import Head from "../../components/head"
import Layout from "../../components/layout"
import { Banner, banner_template } from "../../components/Banner"
import {CareersIntro, careerIntro_template} from '../../components/CareerIntro'
import {CareerImages, careerImages_template} from '../../components/CareerImages'
import {lifeAt_template, LifeAt} from '../../components/LifeAt'
import {OfficeSection, office_template} from '../../components/OfficeSection'
import {JobCard, card_template } from '../../components/JobList'
import {textContent_template, TextContent} from "../../components/TextContent";
import {textAndButton_template, TextAndButton} from "../../components/TextAndButton";
import { config } from '../../utils/globalCMSConfig';

const formConfig = {
    id: 'Careers',
    label: 'Careers',
    fields: config,
    initialValues: {
        "title": "Careers",
        "bgColor": "transparent",
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
    intro: {
        Component: CareersIntro,
        template: careerIntro_template,
    },
    careerImages: {
        Component: CareerImages,
        template: careerImages_template,
    },
    lifeAt: {
        Component: LifeAt,
        template: lifeAt_template,
    },
    office: {
        Component: OfficeSection,
        template: office_template,
    },
    textContent: {
        Component: TextContent,
        template: textContent_template
    },
    jobCard: {
        Component: JobCard,
        template: card_template
    },
    textAndButton: {
        Component: TextAndButton,
        template: textAndButton_template
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
                fileRelativePath: "careers.json",
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
                fileRelativePath: "content/careers.json",
                data: (await import("../../content/careers.json")).default,
            },
            ...global,
        },
    }
}

export default Page
