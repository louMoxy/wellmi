import Link from "next/link";
import { Box, Text, Button, ResponsiveContext } from "grommet";
import { InlineTextarea, BlocksControls, InlineText } from 'react-tinacms-inline'
import { PlayFill } from 'grommet-icons';
import ImageComponent from '../Image';
import { StyledButton, IconButton } from "./style";
import BackgroundText from '../backgroundText';
import {HeaderText} from '../HeaderText';

export const WorldClassComponent = ({ index, data }) => {
    return (
        <BlocksControls index={index} insetControls>
            <ResponsiveContext.Consumer>
                {size =>
                    <Box style={{ position: 'relative' }} align="center">
                        {(size === "medium" || size === "large") && (
                            <BackgroundText text="WorldClass" style={{ width: '60%', left: 0 }} />
                        )}
                        <Box direction="row" justify="center" align="center" style={{ zIndex: 2 }} width="xlarge">
                            {(size === "medium" || size === "large") && (
                                <Box width="xlarge" margin={{ top: '150px' }}>
                                    <ImageComponent name="image"/>
                                </Box>
                            )}
                            <Box width="xlarge" direction="row" align="center">
                                <Box pad="large">
                                    <HeaderText data={data}/>
                                    <Text><InlineTextarea name="text"/></Text>
                                    <Box direction="row" margin={{ top: 'large' }} gap="large">
                                        <Link href={data.link1 || '/'}>
                                            <StyledButton primary>
                                                <InlineText name="button1" />
                                            </StyledButton>
                                        </Link>
                                        <Link href={data.link2 || '/'}>
                                            <IconButton direction="row" align="center" gap="small">
                                                <Button icon={<PlayFill color="white" size="small" />} />
                                                <Text><InlineText name="button2" /></Text>
                                            </IconButton>
                                        </Link>
                                    </Box>
                                </Box>

                            </Box>
                        </Box>
                    </Box>
                }
            </ResponsiveContext.Consumer>
        </BlocksControls>
    )
}

export const worldclass_template = {
    label: 'World class section',
    fields: [
        {
            component: 'select',
            name: 'alignment',
            label: 'Alignment',
            description: 'Card alignment',
            options: ['left', 'right'],
        },
        {
            component: "text",
            name: "headerText",
            label: "Title text"
        },
        {
            name: "num",
            label: "Number of words in accent color for title text",
            component: "number",
            step: 1
        },
        {
            component: 'textarea',
            name: 'text',
            label: 'Text',
        },
        {
            component: "text",
            name: "button1",
            label: "Button 1 text"
        },
        {
            component: "text",
            name: "link1",
            label: "Button 1 link"
        },
        {
            component: "text",
            name: "link2",
            label: "Button 2 link"
        },
        {
            label: 'Image',
            name: 'image',
            component: 'image',
            parse: media => `/images/${media.filename}`,
            uploadDir: () => 'public/images/',
            previewSrc: fullSrc => fullSrc.replace('/public', ''),
        }
    ],
}