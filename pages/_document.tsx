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
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Hammersmith+One&family=Inconsolata:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              // i don't know hot to use DOMContentLoaded on Next.js
              let theme = 'light';
              let pref = window.matchMedia('(prefers-color-scheme: light)');
              if (pref.matches) theme = 'light';
              pref = window.matchMedia('(prefers-color-scheme: dark)');
              if (pref.matches) theme = 'dark';
              document.documentElement.className = theme;
              setTimeout(() => {
                document.body.classList.add('apply-transition');
              })
              `,
            }}
          />
        </body>
      </Html>
    )
  }
}

export default BlogDocument
