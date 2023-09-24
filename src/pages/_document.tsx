import { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default function Document() {

  return (
    <Html lang="pt-br">
      <Head>
      <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-S6CJ4JVQTX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-S6CJ4JVQTX');
</script>
          <Head />
      <body >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
