import styled from 'styled-components';
import theme from '../layout/theme';

const SVG = styled.svg`
    position: absolute;
    height: 100%;
    top: 0;
    right:0;
    width: 100%;
    z-index: 1;
`;

const BackgroundText = ({ text }) => {
    const id = `svg${text.replace(' ', '')}`;
    const rightPath = "M100 100 L 100 0";
    return (
        <SVG xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMax" height="100" width="100" viewBox="0 0 100 100">
            <g>
                <path id={id} d={rightPath} fill="transparent" />
                <text>
                    <textPath
                        xlinkHref={`#${id}`}
                        method="stretch"
                        lengthAdjust="spacingAndGlyphs"
                        textLength="100%"
                        fontSize="34px"
                        fill={theme.global.colors["text-weak"].dark}
                        fontWeight="bold"
                        opacity={0.2}
                    >{text}</textPath>
                </text>
            </g>
        </SVG>
    )
}


export default BackgroundText;