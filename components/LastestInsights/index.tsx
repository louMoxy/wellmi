import { Box } from "grommet";
import Title from "../title";
import BackgroundText from '../backgroundText';
import { ContentCard } from "../ContentCard";

export const LatestInsights = () => {
    return (
        <Box style={{ position: 'relative' }} align="center">
            <BackgroundText text="Insight" style={{ transform: 'rotate(-90deg)', transformOrigin: '100% 0', right: 214, width: 700 }} />
            <Box width="xlarge" align="center" style={{ zIndex: 2, position: 'relative' }}>
                <Title name="title" />
                {/* TODO: This should be generated from blogs */}
                <Box direction="row" gap="medium" align="start" wrap justify="center">
                    <ContentCard header="Life Out Loud: Self-Care: Taking better care of yourself" text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." img="/images/painting1.png" margin={{ top: 'xlarge' }} />
                    <ContentCard header="Life Out Loud: Self-Care: Taking better care of yourself" text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. " img="/images/painting1.png" />
                    <ContentCard header="Life Out Loud: Self-Care: Taking better care of yourself" margin={{ top: 'xlarge' }} text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. " img="/images/painting1.png" />
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
