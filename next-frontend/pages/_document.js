import { Html, Head, Main, NextScript } from "next/document";
import { googleAnalyticsId } from "@/lib/enviroment";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}

                //este función es la que nos devuelve el valor de la cookie de preferencias
        function getCookie() {
            const value = "; " + document.cookie;
            const parts = value.split("; CookieConsent=");
            if (parts.length === 2) return parts.pop().split(';').shift();
        }

                //configuramos el permiso como denegado en primera instancia
            gtag('consent', 'default', {
                'analytics_storage': 'denied'
            });

                gtag('js', new Date());

              //comprobamos el consentimiento
            if(getCookie() === "true" ) {
                gtag('consent', 'update', {
                'analytics_storage': 'granted'
                });
            }

              gtag('config', '${googleAnalyticsId}', {
                page_path: window.location.pathname,
            });
              `,
          }}
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
