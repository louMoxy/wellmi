import theme from '../layout/theme';
import styled from 'styled-components';
const color = theme.global.colors.brand.light;

export const UnderLine  = styled.div`
    width: ${props => props.width ? props.width : "60%"};
    height: 2px;
    margin: 20px auto;
    background: linear-gradient(90deg, ${color} 0%, ${color} 43%, transparent 43%, transparent 56%, ${color} 56%, ${color} 100%);
    position: relative;
    &:before {
        content: '';
        background: ${theme.global.colors.brand.light};
        height: 20px;
        width: 20px;
        left: calc(50% - 10px);
        top: -9px;
        position: absolute;
        transform: rotate(45deg);
        border-radius: 4px;
    }
`;

