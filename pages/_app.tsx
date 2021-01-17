import App from 'next/app'
import { TinaCMS, TinaProvider } from 'tinacms'
import { DateFieldPlugin } from "react-tinacms-date"
import { GithubClient, TinacmsGithubProvider, GithubMediaStore } from 'react-tinacms-github'
import './app.css';

export default class Site extends App {
  cms: TinaCMS

  constructor(props) {
    super(props)
    const github = new GithubClient({
      proxy: '/api/proxy-github',
      authCallbackRoute: '/api/create-github-access-token',
      clientId: process.env.GITHUB_CLIENT_ID,
      baseRepoFullName: process.env.REPO_FULL_NAME, // e.g: tinacms/tinacms.org,
      baseBranch: process.env.BASE_BRANCH, // e.g. 'master' or 'main' on newer repos
      authScope: 'repo' 
    })
    this.cms = new TinaCMS({
      apis: {
        github,
      },
      media: new GithubMediaStore(github),
      sidebar: true,
    })
    this.cms.plugins.add(DateFieldPlugin)

    import("react-tinacms-editor").then(
      ({ HtmlFieldPlugin }) => {
        this.cms.plugins.add(HtmlFieldPlugin)
      }
    )
  }

  render() {
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

const onLogin = async () => {
  const token = localStorage.getItem('tinacms-github-token') || null
  const headers = new Headers()

  if (token) {
    headers.append('Authorization', 'Bearer ' + token)
  }

  const resp = await fetch(`/api/preview`, { headers: headers })
  const data = await resp.json()

  if (resp.status == 200) window.location.href = window.location.pathname
  else throw new Error(data.message)
}

const onLogout = () => {
  return fetch(`/api/reset-preview`).then(() => {
    window.location.reload()
  })
}