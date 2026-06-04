import { Html, Head, Main, NextScript } from "next/document";

// Runs before first paint — sets the theme attribute so there's no flash.
// Defaults to dark; honours a stored preference.
const themeScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');d.dataset.theme=(t==='light'||t==='dark')?t:'light';}catch(e){d.dataset.theme='light';}})();`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#0c0c0d" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#fbfbfa" media="(prefers-color-scheme: light)" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
