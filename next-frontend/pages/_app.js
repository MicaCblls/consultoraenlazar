import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";
import PrivacyPolicy from "@/components/privacyPolitics/PrivacyPolicy";
import { googleAnalyticsId } from "@/envitoment";

export default function App({ Component, pageProps }) {
  /*  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", googleAnalyticsId, {
        page_path: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
 */
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Component {...pageProps} />
      {open ? (
        <PrivacyPolicy handleClose={handleClose} scroll={scroll} open={open} />
      ) : null}
      {/* <CookieConsent
        location="bottom"
        buttonText="Sí, utilizar cookies"
        cookieName="CookieConsent"
        expires={150}
        enableDeclineButton="true"
        declineButtonText="No, no utilizar cookies"
        contentStyle={{ flex: "1 0 150px" }}
        style={{
          right: 0,
          left: "auto",
          maxWidth: "500px",
          backgroundColor: "#34668b",
          flexDirection: "column",
        }}
      >
        <p>
          Utilizamos cookies propias y de terceros para obtener datos
          estadísticos de la navegación de nuestros usuarios y mejorar nuestros
          servicios. Si acepta o continúa navegando, consideramos que acepta su
          uso. Puede cambiar la configuración ingresa{" "}
          <Link
            href={
              "https://support.google.com/accounts/answer/61416?hl=es-419&co=GENIE.Platform%3DDesktop"
            }
            target="_blank"
            className="font-bold"
          >
            aquí
          </Link>
          , puedes obtener más información sobre nuestros términos y condiciones{" "}
          <button onClick={handleClickOpen} className="font-bold">
            aquí
          </button>
        </p>
        <br />
        <p className="mb-3">
          Respetamos la política de protección de datos, para saber más visita:
        </p>
        <Link
          href="http://servicios.infoleg.gob.ar/infolegInternet/anexos/60000-64999/64790/norma.htm"
          target="_blank"
          className="border p-2 w-64"
        >
          <strong>Política de Protección de Datos</strong>
        </Link>
      </CookieConsent> */}
    </>
  );
}
