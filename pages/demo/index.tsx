import Head from "../../components/head";
import Layout from "../../components/layout";
import theme from '../../components/layout/theme';
import Banner from "../../components/Banner";
import DemoForm from "../../components/DemoForm";
import Partners from "../../components/Partners";

const Page = () => {
    const bgColor = theme.global.colors["accent-3"];
    return (
        <Layout bg={bgColor} dark={true}> 
            <Head title="Demo" />
            <Banner color={bgColor} title="Get a" title2="Demo!" 
                imageWidth="600px"
            text="Simply fill out some details below and <br> we’ll take care of the rest." largeSecond={true} image="/images/demo1.png"/>
            <DemoForm />
            <Partners showBackgroundText={false}/>
        </Layout>
    )
}

export default Page
