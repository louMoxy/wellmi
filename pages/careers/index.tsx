
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
    const bgColor = theme.global.colors["accent-2"].dark;
    return (
        <Layout bg={bgColor} dark={true}> 
            <Head title="Careers" />
           <CareersBanner color={bgColor} title="Careers" title2="at Wellmi" 
           text="Want to Join The Wellmi family? <br>Looking for a career that let's you make a difference?" image="/images/carreer1.png"/>
           <CareerIntro />
           <CareerImages />
            <LifeAt />
            <Office />
            <JobList/>
        </Layout>
    )
}

export default Page
