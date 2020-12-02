import Head from "../../components/head";
import Layout from "../../components/layout";
import theme from '../../components/layout/theme';
import Banner from "../../components/Banner";
import About from "../../components/About";
import OurOffices from "../../components/OurOffices";
import TeamImages from "../../components/TeamImages";

const Page = () => {
    const bgColor = theme.global.colors["accent-3"];
    return (
        <Layout bg={bgColor} dark={true}> 
            <Head title="About us" />
            <Banner color={bgColor} title="We Are" title2="Wellmi"
            text="Watch the video to learn more about us" largeSecond={true} image="/images/about-us-1.png" link="#"/>
            <About />
            <OurOffices />
            <TeamImages />
        </Layout>
    )
}

export default Page
