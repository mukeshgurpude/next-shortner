import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import '../styles/globals.css'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Shortly</title>

      <link href='/favicon.ico' rel='icon' />
    </Head>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}

export default MyApp
