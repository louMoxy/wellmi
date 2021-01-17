import { Box } from "grommet";
import Title from "../title";
import BackgroundText from '../backgroundText';
import { ContentCard } from "../ContentCard";

export const LatestInsights = ({posts}) => {   
    const scatter = posts.length === 3;
    return (
        <Box style={{ position: 'relative' }} align="center">
            <BackgroundText text="Insight" style={{ transform: 'rotate(-90deg)', transformOrigin: '100% 0', right: 214, width: 700 }} />
            <Box width="xlarge" align="center" style={{ zIndex: 2, position: 'relative' }}>
                <Title name="title" />
                <Box direction="row" gap="medium" align="start" wrap justify="center">
                    {posts.map(({fileName, data}, index) => (
                        <ContentCard header={data.title} text={data.description} img={data.featureImg} margin={{ top: (scatter && index == 1) ? 'xlarge' : 'none'} }  key={fileName} link={`/blog/${fileName}`}/>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export const latestInsights_template = {
    label: 'Latest Insights',
    fields: [
        {
            name: "title",
            label: "Title",
            component: "text",
        }
    ],
}
