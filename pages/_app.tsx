import Head from 'next/head'
import { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'

import Mask from '../components/mask'

import '../styles/global.scss'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App = ({ Component, pageProps, router }: AppProps) => {
  const content = <Component {...pageProps} />

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
      </Head>
      <Mask position="top" />
      {content}
      <Mask position="bottom" />
    </>
  )
}

export default App
