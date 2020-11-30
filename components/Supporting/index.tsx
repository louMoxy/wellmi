import Link from "next/link";
import { Box, Heading, Text, Image, Button, ResponsiveContext } from "grommet";
import { PlayFill } from 'grommet-icons';
import { StyledButton, IconButton } from "./styles";
import BackgroundText from '../backgroundText';
import theme from '../layout/theme';
import {ContentCard} from '../ContentCard';

const Columns = () => {
    return (
        <ResponsiveContext.Consumer>
            {size =>
                <Box style={{position: 'relative'}} align="center" margin={{top: '150px'}} >
                    <BackgroundText text="sotries" style={{transform: 'rotate(-90deg)', transformOrigin: '0%', top: '50%', width: '50%', left: '18%'}}/>
                    <Box justify="center" align="center" style={{zIndex: 2}} width="xlarge">
                        <Box width="xlarge" direction="row" align="center" wrap={true} justify="center">
                            <Box pad="medium" flex={true} width={{min: '300px'}}>
                                <Heading size="2"><span style={{color: theme.global.colors.brand.light}}>Supporting</span> Millons of employees around the world</Heading>
                                <Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </Text>
                                <Text margin={{top: 'medium'}}>LifeWorks by Morneau Shepell combines modern employee assistance, wellness, recognitio</Text>
                                <Box direction="row" margin={{ top: 'large' }} gap="large" >
                                    <Link href="/">
                                        <StyledButton plain={false}>JOIN US</StyledButton>
                                    </Link>
                                    <Link href="/">
                                        <IconButton direction="row" align="center" gap="small">
                                            <Button icon={<PlayFill color="white" size="small" />} />
                                            <Text>GET A DEMO</Text>
                                        </IconButton>
                                    </Link>
                                </Box>
                            </Box>
                            <Box width="large" direction="row" align="center" justify="center" pad="small"  wrap={true}>
                                <Box pad="small">
                                    <ContentCard text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." img="/images/pexels-pixabay.png" header="London City Airport" secondaryButton={true}/>
                                </Box>
                                <Box pad="small" gap="medium">
                                    <ContentCard text="It is a long established fact that a reader will be distracted " img="/images/woman-in-blue-suit-jacket.png" header="Nestlé" showButton={false}/>
                                    <ContentCard text="It is a long established fact that a reader will be distracted" img="/images/group-of-people-sitting-indoors.png" header="Dr. Martens" showButton={false}/>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            }
        </ResponsiveContext.Consumer>
    )
}

export default Columns;