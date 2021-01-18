# Wellmi Website

A serverless website for Wellmi

## How to edit
For details on how to edit the site, using the CMS, view the [wiki](https://github.com/louMoxy/wellmi/wiki)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Running locally

```
yarn install
yarn dev
```
Then you should be up and running on [http://localhost:3000](http://localhost:3000)

## Deployment

Currently deployed on [Netlify](https://www.netlify.com/) 
Editing is handled by [Tinacms](http://tinacms.org/)
For the editing to work, it uses the github repo as the backend, and [GitHub OAuth App](https://tinacms.org/guides/nextjs/github-open-authoring/github-oauth-app) for the editing login. 
Netlify should have the enviroment variables setup, and to edit it locally you will need to create an .env file (Not to be added to the repo)

```env
# OAuth App Credentials from GitHub
GITHUB_CLIENT_ID=************
GITHUB_CLIENT_SECRET=************
SIGNING_KEY=*********

# The path to your repository in GitHub
REPO_FULL_NAME=<GitHub Username>/<Repo Name>

# The base branch that new changes and forks are created from. Defaults to 'master'.
BASE_BRANCH=master
```

## Built With

* [Nextjs](https://nextjs.org/) - The web framework used
* [Grommet](https://v2.grommet.io/) - Style react framework
* [Tinacms](http://tinacms.org/) - CMS
* [Yarn](https://yarnpkg.com/) Package manager

## Authors

Designs from Wellmi and developed by [Louise Moxhay](https://louisemoxhay.co.uk/)
