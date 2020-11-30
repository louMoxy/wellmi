import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import theme from '../layout/theme';
import { ResponsiveContext } from 'grommet';

const Container = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right:0;
    z-index: 1;
    pointer-event: none;
`;

interface Props {
    text: string;
    style?: object;
}

const BackgroundText = ({ text, style = {} }: Props) => {
    const ref = useRef(null);
    const [viewBox, setViewBox] = useState('0 0 100 100')
    useEffect(() => {
        const text = ref.current;
        if(text){
            const { x, y, width, height } = text.getBBox();
            setViewBox([x, y, width, height].join(' '));
        }
    }, [ref.current])
    return (
        <ResponsiveContext.Consumer>
            {size =>
                <Container style={style}>
                    {(size === "medium" || size === "large") && (
                        <svg viewBox={viewBox}>
                            <text ref={ref} opacity={0.2} fill={theme.global.colors["text-weak"].dark} fontWeight="bold" textAnchor="middle">
                                {text}
                            </text>
                        </svg>
                    )}
                </Container>
            }
        </ResponsiveContext.Consumer>
    )
}


export default BackgroundText;