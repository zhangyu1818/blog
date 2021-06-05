import { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import PageLayout from '../layouts/page-layout'
import BlogLayout from '../layouts/blog-layout'
import Mask from '../components/mask'

import '../styles/global.scss'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App = ({ Component, pageProps, router }: AppProps) => {
  const { pathname } = router

  let content = <Component {...pageProps} />

  if (pathname.includes('/post/')) {
    content = <BlogLayout>{content}</BlogLayout>
  } else {
    content = <PageLayout>{content}</PageLayout>
  }
  return (
    <>
      <Mask position="top" />
      {content}
      <Mask position="bottom" />
    </>
  )
}

export default App
