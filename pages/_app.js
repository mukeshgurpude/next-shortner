import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import Header from '../components/header'
import '../styles/globals.css'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Shortly</title>
      <link href='/favicon.ico' rel='icon' />
    </Head>
    <ThemeProvider theme={theme}>
      <Header/>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}

export default MyApp
