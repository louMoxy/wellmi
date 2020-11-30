
import Head from "../../components/head"
import Layout from "../../components/layout"
import CareersBanner from "../../components/Banner"
import CareerIntro from '../../components/CareerIntro'
import CareerImages from '../../components/CareerImages'
import LifeAt from '../../components/LifeAt'
import Office from '../../components/OfficeSection'
import JobList from '../../components/JobList'
import theme from '../../components/layout/theme';

const Page = () => {
    return (
        <Layout bg={theme.global.colors["accent-2"].dark} dark={true}> 
            <Head title="Careers" />
           <CareersBanner />
           <CareerIntro />
           <CareerImages />
            <LifeAt />
            <Office />
            <JobList/>
        </Layout>
    )
}

export default Page
