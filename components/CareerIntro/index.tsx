import { Box, Heading, Text, Image, Button} from "grommet";
import styled from 'styled-components';
import theme from '../layout/theme';

const StyledText = styled(Text)`
    position: relative;
    padding-left: 20px;
    &:before {
        content: '';
        position: absolute;
        height: 10px;
        width: 10px;
        top: 8px;
        left: 0;
        border-radius: 50%;
        background: ${theme.global.colors.brand.light};
    }
`

const Component = () => {
    return (
        <Box direction="column" align="center" pad="medium">
            <Box width="xlarge" justify="start" direction="row">
                <Box basis="3/4">
                    <Text size="xlarge">At Wellmi, we’re all about supporting people when and where they need it the most. If you want to work for one of the fastest growing wellbeing providers in the UK , while growing and developing personally and professionally, then Wellmi is the right place for you.</Text>
                </Box>
            </Box>
            <Box width="xlarge" justify="between" direction="row" pad={{top: 'large', bottom: 'large'}} wrap={true}>
                <StyledText margin={{ bottom: 'medium'}}>We are currently looking for new people  to join us.</StyledText>
                <Button primary label="View Open Positions" margin={{left: 'medium', bottom: 'medium'}}/>
            </Box>
        </Box>
    )
}

export default Component;