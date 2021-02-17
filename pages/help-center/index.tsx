import { useState } from 'react'
import { useGithubJsonForm } from 'react-tinacms-github'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { InlineForm, InlineBlocks, InlineTextarea } from 'react-tinacms-inline'
import { usePlugin } from 'tinacms'
import { InlineWysiwyg } from 'react-tinacms-editor'
import { getGlobalStaticProps } from '../../utils/getGlobalStaticProps'
import {
  Box,
  Heading,
  Text,
  Accordion,
  FormField,
  TextInput,
  Button,
  TextArea,
  Select,
  AccordionPanel
} from 'grommet'
import Layout from '../../components/layout'
import theme from '../../components/layout/theme'
import Head from '../../components/head'
import { Header } from '../../components/Accordion'
import { Banner, banner_template } from '../../components/Banner'

import countries from '../../components/DemoForm/countries.json'
import { config } from '../../utils/globalCMSConfig'
import { HeaderText } from '../../components/HeaderText'
import getBlogPosts from '../../utils/getBlogPosts'

const formConfig = {
  id: 'HelpCenter',
  label: 'Help Center',
  fields: [
    ...config,
    {
      component: 'textarea',
      name: 'text',
      label: 'Text'
    },
    {
      component: 'text',
      name: 'headerText',
      label: 'Title'
    },
    {
      name: 'num',
      label: 'Number of words in accent color for title text',
      component: 'number',
      step: 1
    },
    {
      label: 'FAQ',
      name: 'accordionPanels',
      component: 'group-list',
      itemProps: (item) => ({
        key: item.id,
        label: item.question
      }),
      defaultItem: {
        question: 'Add question here',
        text: '...',
        id: Math.random().toString(36).substr(2, 9)
      },
      fields: [
        {
          label: 'Question',
          name: 'question',
          component: 'text'
        },
        {
          label: 'text',
          name: 'text',
          component: 'html'
        }
      ]
    }
  ],
  initialValues: {
    title: 'Help Center',
    bgColor: theme.global.colors['accent-3']
  }
}

const HelpPage = ({ file, global }) => {
  const [data, form] = useGithubJsonForm(file, formConfig)
  usePlugin(form)
  const { title } = data
  const [active, setActive] = useState([0])
  return (
    <InlineForm form={form}>
      <Layout bg={data.bgColor} dark={true} global={global?.props}>
        <Head title={title} />
        <InlineBlocks name="blocks" blocks={PAGE_BLOCKS} itemProps={{ bgColor: data.bgColor }} />
        <Box justify="center" direction="row" margin={{ top: 'medium' }}>
          <Box width="xlarge" pad="medium">
            <Box pad="medium">
              <Box width={{ max: '500px' }}>
                <HeaderText data={data} size="3rem" />
              </Box>
              <Text color="text-weak">
                <InlineTextarea name="text" />
              </Text>
            </Box>
            <Accordion
              margin={{ top: 'medium', bottom: 'medium' }}
              pad="medium"
              gap="medium"
              activeIndex={active}
              onActive={setActive}
              multiple={true}
            >
              {data.accordionPanels.map(({ question, id }, index) => (
                <AccordionPanel
                  label={question}
                  header={Header(`accordionPanels[${index}].question`)}
                  key={id}
                >
                  <Box pad="medium" background="white" style={{ paddingTop: 0 }}>
                    <InlineWysiwyg
                      name={`accordionPanels[${index}].text`}
                      format="html"
                      imageProps={{
                        parse: media => `/images/${media.filename}`,
                        uploadDir: () => '/images/'
                      }}
                    >
                      <Box
                        dangerouslySetInnerHTML={{
                          __html: data.accordionPanels[index].text
                        }}
                      />
                    </InlineWysiwyg>
                  </Box>
                </AccordionPanel>
              ))}
            </Accordion>
          </Box>
        </Box>
        <Box justify="center" direction="row">
          <Box width="xlarge" pad="medium">
            <Box pad="medium" align="end">
              <Heading size="3rem" textAlign="end">
                <span style={{ color: theme.global.colors.brand.light }}>Still need </span>help?{' '}
                <br/>Contact us.
              </Heading>
            </Box>
            <Box>
              <form method="POST" data-netlify="true" name="help">
                <input type="hidden" name="form-name" value="help" />
                <Box direction="row" wrap={true}>
                  <Box basis="1/2" flex pad="small">
                    <FormField name="name" label="Your Name" style={{ background: 'white' }}>
                      <TextInput name="name" placeholder="Jahid Jaykar" required />
                    </FormField>
                    <FormField name="country" label="Your Country" style={{ background: 'white' }}>
                      <Select placeholder="Select a country" options={countries} />
                    </FormField>
                    <FormField name="email" label="Your Email" style={{ background: 'white' }}>
                      <TextInput name="email" placeholder="jahid.jaykar@gmail.com" required />
                    </FormField>
                  </Box>
                  <Box basis="1/2" width={{ min: '320px' }} flex pad="small">
                    <FormField
                      name="message"
                      label="Your Message"
                      style={{ background: 'white' }}
                      height="100%"
                      required
                    >
                      <TextArea
                        name="message"
                        placeholder="Write your message here..."
                        fill
                        resize={false}
                        style={{ height: '220px' }}
                      />
                    </FormField>
                  </Box>
                </Box>
                <Box align="end" margin="small">
                  <Button
                    type="submit"
                    primary
                    label="Submit"
                    style={{ width: '30%', minWidth: 200 }}
                  />
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </Layout>
    </InlineForm>
  )
}

const PAGE_BLOCKS = {
  banner: {
    Component: Banner,
    template: banner_template
  }
}

/**
 * Fetch data with getStaticProps based on 'preview' mode
 */
export const getStaticProps = async function ({ preview, previewData }) {
  const pages = await getBlogPosts(preview, previewData, 'content')
  const allPages = pages.map((page: any) => page.data.title?.toLowerCase()).filter(Boolean)
  const blogs = await getBlogPosts(preview, previewData, 'content/blog')
  const allBlogs = blogs.map((post: any) => post.data.title?.toLowerCase()).filter(Boolean)
  const global = await getGlobalStaticProps(preview, previewData)

  const pageName = 'help-center'
  const fileRelativePath = `content/${pageName}.json`
  if (preview) {
    try {
      const previewProps = await getGithubPreviewProps({
        ...previewData,
        fileRelativePath,
        parse: parseJson
      })
      return {
        props: {
          global,
          allPages,
          allBlogs,
          previewURL: `https://raw.githubusercontent.com/${previewData.working_repo_full_name}/${previewData.head_branch}`,
          ...previewProps.props
        }
      }
    } catch (e) {
      return {
        props: {
          global,
          allPages,
          allBlogs,
          previewURL: `https://raw.githubusercontent.com/${previewData.working_repo_full_name}/${previewData.head_branch}`,
          file: {
            fileRelativePath,
            data: null
          }
        }
      }
    }
  }

  const content = (await import(`../../content/${pageName}.json`))?.default

  return {
    props: {
      global,
      allPages,
      allBlogs,
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath,
        data: content
      }
    }
  }
}

export default HelpPage
