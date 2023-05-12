import React from "react";
import Head from "next/head";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export const Layout = ({ title, content, children }) => {
  const route = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <meta name="description" content={content} />
        <meta
          name="keywords"
          content="Recursos humanos, psicologia, psicología laboral, consultora enlazar, enlazar, consultoría, relaciones laborales, trabajo, educación, capital humano, talento, cursos, cursos online, capacitaciones, webinars gratuitos, curriculum, revisión de cv, empleabilidad, orientación vocacional, calidad de trabajo, comunidad, encontrar empleo, desarrollo profesional, reclutamiento, selección de personal, recruiting, coaching, acompañamiento personalizado, asesorías, recursos gratis, consultas, cosching, experiencia laboral,"
        />
        <title>{title}</title>
        <link rel="icon" href="/images/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/images/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/images/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/images/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/images/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/images/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/images/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/images/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/images/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/images/favicon/favicon-96x96.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png?v=2"
        />
        <link rel="manifest" href="/images/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/images/favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#34668a" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:title" content="Consultora Enlazar" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://consultoraenlazar.com.ar" />
        <meta
          property="og:image"
          content="https://consultoraenlazar.com.ar/images/logo-enlazar-ogp.jpg"
        />
      </Head>
      <>
        <Navbar />
        <main
          id="top"
          className="w-full flex flex-1 flex-wrap justify-center items-center  mx-auto h-auto relative pt-28 text-dark"
        >
          {children}
        </main>
        <Link
          href="https://wa.me/5491133130958/?text=Hola Consultora Enlazar, quería realizarles una consulta..."
          target="_blank"
        >
          <Image
            src="/images/logo-whatsapp.svg"
            alt="Logo WhatsApp"
            width={50}
            height={50}
            priority
            className="fixed bottom-5 right-5 hover:w-[52px] hover:transition-all z-10 drop-shadow-lg"
          />
        </Link>
        <Footer />
      </>
    </>
  );
};
