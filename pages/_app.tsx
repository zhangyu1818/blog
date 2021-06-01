import { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import PageLayout from '../layouts/page-layout'
import getTheme from '../utils/get-theme'

import '../styles/global.scss'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

if (process.browser) {
  window.addEventListener('DOMContentLoaded', () => {
    document.documentElement.className = getTheme()
    document.body.classList.add('apply-transition')
  })
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  )
}

export default App
