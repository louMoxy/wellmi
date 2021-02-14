import theme from '../layout/theme'
import styled from 'styled-components'
const color = theme.global.colors.brand.light

export const UnderLine = styled.div`
    width: ${props => props.width ? props.width : '60%'};
    height: 30px;
    margin: 20px auto;
    position: relative;
    &:after {
        content: '';
        position: absolute;
        top: 0px;
        width: 100%;
        background: linear-gradient(90deg, ${color} 0%, ${color} 44%, transparent 44%, transparent 57%, ${color} 57%, ${color} 100%);
        height: 3px;
    }
    &:before {
        content: '';
        background: ${theme.global.colors.brand.light};
        height: 22px;
        width: 22px;
        left: calc(50% - 10px);
        top: -9px;
        position: absolute;
        transform: rotate(45deg);
        border-radius: 4px;
    }
`
