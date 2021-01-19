import { useState } from 'react';
import { Box, Heading, Text, FormField, TextInput, Button, Select } from "grommet";
import {FormNextLink} from 'grommet-icons';
import theme from '../layout/theme';
import countries from './countries.json';
import { InlineTextarea, InlineText } from 'react-tinacms-inline'

const employeeOptions = [
    "1-20",
    "21-50",
    "50-99",
    "99-200",
    "200+"
]

export const DemoForm = () => {
    const [employees, setEmployees] = useState(employeeOptions[0]);
    const [country, setCountry] = useState(countries[0]);

    return (
        <Box align="center">
            <Box direction="row" width="xlarge" wrap={true}>
                <Box basis="1/2" flex={true} pad="medium">
                    <Heading color={theme.global.colors.brand.light} margin="none" size="3rem"><InlineText name="title1"/></Heading>
                    <Heading margin="none" size="3rem"><InlineText name="title2"/></Heading>
                    <Text margin={{ top: "medium", bottom: "medium" }}><InlineTextarea name="text"/></Text>
                </Box>
                <Box basis="1/2" flex={true} pad="medium" width={{ min: "medium" }}>
                    <form method="POST" data-netlify="true" name="demo">
                        <input type='hidden' name='form-name' value='demo' />
                        <FormField name="firstName" label="First Name" style={{ background: 'white' }}>
                            <TextInput id="firstName" name="First Name" placeholder="Jahid" required/>
                        </FormField>
                        <FormField name="lastName" label="Last Name" style={{ background: 'white' }}>
                            <TextInput id="lastName" name="Last Name" placeholder="Jaykar" />
                        </FormField>
                        <FormField name="email" label="Work Email" style={{ background: 'white' }}>
                            <TextInput id="email" name="email" placeholder="Jahid.jaykar@gmail.com" required />
                        </FormField>
                        <FormField name="phone" label="Phone" style={{ background: 'white' }}>
                            <TextInput id="phone" name="phone" placeholder="+880 1745639584" />
                        </FormField>
                        <FormField name="title" label="Job Title" style={{ background: 'white' }}>
                            <TextInput id="title" name="Job Title" placeholder="Manager" />
                        </FormField>
                        <FormField name="company" label="Company" style={{ background: 'white' }}>
                            <TextInput id="company" name="company" placeholder="Wellmi" />
                        </FormField>
                        <FormField name="country" label="Country" style={{ background: 'white' }}>
                            <Select
                                options={countries}
                                value={country}
                                onChange={({ option }) => setCountry(option)}
                            />
                        </FormField>
                        <FormField name="employees" label="How many employees work there?" style={{ background: 'white' }}>
                            <Select
                                options={employeeOptions}
                                value={employees}
                                onChange={({ option }) => setEmployees(option)}
                            />
                        </FormField>
                        <Box direction="row" justify="between" gap="medium" margin={{top: "medium"}} pad="small">
                            <Box>
                                <Text size="xsmall">By registering, I confirm that I have read and agree to the <a href="/privacyPolicy">privacy policy.</a></Text>
                            </Box>
                            <Box direction="row" width="small">
                                <Button type="submit" primary label="Submit" gap="large" icon={<FormNextLink color="white"/>} reverse={true}/>
                            </Box>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    )
}

export const demo_template = {
    label: 'Demo',
    fields: [
        {
            component: 'text',
            name: "title1",
            label: "Title text 1",
        },
        {
            component: 'text',
            name: "title2",
            label: "Title text 2",
        },
        {
            component: 'textarea',
            name: "text",
            label: "Text",
        }
    ],
}