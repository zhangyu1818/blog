import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class BlogDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="zh-Hans">
        <Head>
          <meta
            name="google-site-verification"
            content="-EgIoAC_kAmCy86ZteXPlEBcl3e76-DVX3HLjXhRudg"
          />
          <meta name="description" content="zhangyu1818的博客" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default BlogDocument
