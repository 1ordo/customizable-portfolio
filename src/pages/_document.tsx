import { Html, Head, Main, NextScript } from "next/document";

// Runs before first paint — sets the theme attribute so there's no flash,
// and decides whether the opening sequence plays this session. When it does,
// html.intro paints an instant curtain (see globals.css) and --intro-hold
// delays the hero animation until the curtain lifts.
const themeScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');d.dataset.theme=(t==='light'||t==='dark')?t:'light';}catch(e){d.dataset.theme='light';}try{var m=window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(!m&&!sessionStorage.getItem('introSeen')){d.classList.add('intro');d.style.setProperty('--intro-hold','1.85s');setTimeout(function(){d.classList.remove('intro');},6000);}}catch(e){}})();`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#131110" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#faf7f2" media="(prefers-color-scheme: light)" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
