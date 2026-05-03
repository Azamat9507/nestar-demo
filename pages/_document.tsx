import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF_8"/>
        <meta name="title" content="Nestar DEMO"/>
        <meta name="robots" content="index,follow" />
        <link rel="icon" type="image/png" href="/img/logo/favicon.svg"/>  
        {/*SEO */}
        <meta name="keyword" content={"nestar, nestar.uz,"}/>
        <meta name="description" content={"Buy and sell properties anywhere anytime in South korea"} />
        
       </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
