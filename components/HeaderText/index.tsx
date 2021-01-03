import { useEffect, useState } from 'react';
import { Heading } from "grommet";
import { useCMS } from "tinacms"
import { InlineTextarea } from 'react-tinacms-inline'
import theme from '../../components/layout/theme';

const color = theme.global.colors.brand.light;

export const HeaderText = ({data, ...args}) => {
    const cms = useCMS();
    const [headingText1, setHeadingText1] = useState('');
    const [headingText2, setHeadingText2] = useState('');
    useEffect(() => {
        const {headingText = ""} = data;
        const textArray = headingText.split(' ');
        setHeadingText1(textArray.splice(0, data.num || 2).join(' '));
        setHeadingText2(textArray.join(' '));

    }, [data.headingText])
    return (
        <Heading {...args}>{cms.enabled ? <InlineTextarea name="headingText" /> :
            <>
                <span style={{ color }}>{headingText1}</span> {headingText2}
            </>
        }</Heading>
    )
}