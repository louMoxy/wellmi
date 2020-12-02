import { Box, Heading, Text, Image, Anchor } from "grommet";
import theme from '../layout/theme';
import { UnderLine } from '../title/underline';
import { Location } from '../LocationText';
import styled from 'styled-components';

const StyledBox = styled(Box)`
    background: ${theme.global.colors.brand.light};
    trasition: background 0.4s;
    &:hover {
        background: ${theme.global.colors.brand.dark};
    }
`

const TeamImages = () => {

    const backgroundColor = theme.global.colors.brand.light;

    return (
        <Box align="center">
            <Box width="xlarge" direction="column" wrap={true} pad="medium">
                <Box width="medium">
                    <Text size="small" color="text-xweak">Our Team</Text>
                    <Heading margin="none" size="medium"><span style={{ color: theme.global.colors.brand.light }}>A Few  </span>People Behind Wellmi</Heading>
                    <Box style={{ position: 'relative', transform: 'scale(0.6)', marginLeft: -40 }} width="220px">
                        <UnderLine width="100%" />
                    </Box>
                </Box>
                <Box direction="row" margin={{top: "medium", bottom: "medium"}} wrap={true} justify="center" align="center">
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                    <Anchor href="/" >
                        <StyledBox background={backgroundColor} height="200px" width="200px" justify="center" align="center" margin="medium">
                            <Image src="/images/logo-white.png" width="90px" margin="medium"/>
                            <Text color="white" weight="normal">Join us</Text>
                        </StyledBox>
                    </Anchor>
                </Box>
            </Box>
        </Box>
    )
}


const EmployeeCard = () => {
    return (
        <Box basis="1/4" pad="large" width={{min: "180px"}}>
            <Box align="end">
                <Location />
            </Box>
            <Image src="/images/employee1.png" fill="horizontal"/>
            <Text size="2rem" textAlign="center" margin="small">Ben Caton</Text>
            <Text color="text-light" size="small" textAlign="center">Founder & CEO</Text>
        </Box>
    )
}

export default TeamImages;