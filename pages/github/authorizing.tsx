import { useGithubAuthRedirect } from 'react-tinacms-github'
import { Box, Text } from 'grommet'

// Our GitHub app redirects back to this page with auth code
export default function Authorizing () {
  // Let the main app know, that we received an auth code from the GitHub redirect
  useGithubAuthRedirect()

  return (
    <Box width='medium' margin={'auto'} pad='10'>
      <Text textAlign={'center'}>Authorising your account with Github, please wait...</Text>
    </Box>
  )
}
