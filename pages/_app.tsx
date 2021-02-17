import '../styles/globals.css'
import App from 'next/app'
import { TinaCMS, TinaProvider } from 'tinacms'
import {
  GithubClient,
  TinacmsGithubProvider
} from 'react-tinacms-github'
// import { NextGithubMediaStore } from 'next-tinacms-github'
import { DateFieldPlugin } from 'react-tinacms-date'
import './app.css'
import { NextGithubMediaStore } from '../components/MediaStore'


const onLogin = async () => {
  const token = localStorage.getItem('tinacms-github-token') || null
  const headers = new Headers()

  if (token) {
    headers.append('Authorization', 'Bearer ' + token)
  }

  const resp = await fetch('/api/preview', { headers: headers })
  const data = await resp.json()

  if (resp.status === 200) window.location.href = window.location.pathname
  else throw new Error(data.message)
}

const onLogout = () => {
  return fetch('/api/reset-preview').then(() => {
    window.location.reload()
  })
}

export default class Site extends App {
  cms: TinaCMS

  constructor (props) {
    super(props)
    const github = new GithubClient({
      proxy: '/api/proxy-github',
      authCallbackRoute: '/api/create-github-access-token',
      clientId: process.env.GITHUB_CLIENT_ID,
      baseRepoFullName: process.env.REPO_FULL_NAME,
      baseBranch: process.env.BASE_BRANCH,
      authScope: 'repo'
    })

    this.cms = new TinaCMS({
      enabled: !!props.pageProps.preview,
      apis: {
        github
      },
      // @ts-ignore
      media: new NextGithubMediaStore(github),
      sidebar: props.pageProps.preview,
      toolbar: props.pageProps.preview
    })
    this.cms.plugins.add(DateFieldPlugin)
    import('react-tinacms-editor').then(
      ({ HtmlFieldPlugin }) => {
        this.cms.plugins.add(HtmlFieldPlugin)
      }
    )
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <TinaProvider cms={this.cms}>
        <TinacmsGithubProvider
          onLogin={onLogin}
          onLogout={onLogout}
          error={pageProps.error}
        >
          <Component {...pageProps} />
        </TinacmsGithubProvider>
      </TinaProvider>
    )
  }
}
