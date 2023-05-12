import Image from "next/image";
import Link from "next/link";
import React from "react";
import letraE from "../../public/images/letra-e.png";
import letraEDos from "../../public/images/letra-e-dos.png";
import flechaDoble from "../../public/images/flecha-doble.svg";

export default function KnowOurServices() {
  return (
    <>
      <section className="relative bg-lightBlue container mx-auto sm:px-4 max-w-full overflow-hidden ">
        <div className="py-6 md:py-40 text-center">
          <div>
            <h2
              className="font-bold pb-4 sm:pb-0"
              style={{
                fontSize: "clamp(1.25rem, 1.095rem + 0.8264vw, 1.875rem)",
              }}
            >
              Conocé todo sobre nuestra propuesta de consultoría en RRHH
            </h2>
            <p className="text-base">
              Nuestros servicios profesionales están diseñados para acompañar tu
              desarrollo profesional.
            </p>
            <br />
          </div>
          <Link
            className="bg-yellow inline-block align-middle text-center select-none whitespace-no-wrap rounded-full py-2 px-6 sm:px-10 leading-normal no-underline font-bold ease-in-out duration-200 hover:scale-105"
            href="/services#top"
          >
            CONOCÉ NUESTROS SERVICIOS
          </Link>
        </div>
        <Image
          className="absolute w-64 -top-44 right-0"
          src={letraE}
          alt="Letra e"
          quality={100}
          width={100}
          height={100}
        />
        <Image
          className="hidden sm:block absolute w-64 top-56 left-0"
          src={letraEDos}
          alt="Letra e"
          quality={100}
          width={100}
          height={100}
        />
      </section>
    </>
  );
}
