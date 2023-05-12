import React from "react";
import Image from "next/image";
// import "tailwindcss/tailwind.css";

export const Feedback = () => {
  return (
    <div className="w-full h-auto  bg-blue  text-white mx-auto ">
      <h2
        className="pt-10 px-6 md:px-8 font-bold text-center text-ellipsis opacity-90"
        style={{
          fontSize: "clamp(1.25rem, 1.064rem + 0.9256vw, 1.8rem)",
        }}
      >
        Te acompañamos siempre.
      </h2>
      <h2
        style={{
          fontSize: "clamp(1.25rem, 1.064rem + 0.9917vw, 2rem)",
        }}
        className="font-bold text-center text-ellipsis opacity-90 text-yellow"
      >
        ¡Garantizamos tu aprendizaje!
      </h2>

      <div className="flex justify-center xl:justify-between items-center bg-blue p-4 md:p-12 flex-wrap">
        <div className="flex flex-col items-center justify-center text-center md:m-4 mt-10 w-full md:w-auto">
          <div className="w-60 h-60 rounded-full border-2 border-yellow flex flex-col items-center justify-center relative">
            <Image
              alt="uno"
              src="/images/logos-empresas/registrarse.png"
              width={70}
              height={70}
              quality={100}
              style={{ position: "absolute", top: "-25px" }}
            />
            <h3 className="text-5xl font-bold m-0 text-yellow">+800</h3>
            <p className="text-lg m-0 text-center">
              Inscriptos a nuestros
              <br />
              cursos.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center md:m-4 mt-10 w-full md:w-auto">
          <div className="w-60 h-60 rounded-full border-2 border-yellow flex flex-col items-center justify-center relative">
            <Image
              alt="uno"
              src="/images/logos-empresas/cinco.png"
              width={70}
              height={70}
              quality={100}
              style={{ position: "absolute", top: "-25px" }}
            />
            <h3 className="text-5xl font-bold m-0 text-yellow">+900</h3>
            <p className="text-lg m-0">
              Personas que confiaron <br /> en nuestros servicios.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center md:m-4 mt-10 w-full md:w-auto">
          <div className="w-60 h-60 rounded-full border-2 border-yellow flex flex-col items-center justify-center relative">
            <Image
              alt="uno"
              src="/images/logos-empresas/cero.png"
              width={70}
              height={70}
              quality={100}
              style={{ position: "absolute", top: "-25px" }}
            />
            <h3 className="text-5xl font-bold m-0 text-yellow">+900</h3>
            <p className="text-lg m-0">Personas en nuestra comunidad.</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center md:m-4 mt-10 mb-6 w-full md:w-auto">
          <div className="w-60 h-60 rounded-full border-2 border-yellow flex flex-col items-center justify-center relative">
            <Image
              alt="uno"
              src="/images/logos-empresas/rud.png"
              width={70}
              height={70}
              quality={100}
              style={{ position: "absolute", top: "-25px" }}
            />
            <h3
              className="text-5xl font-bold m-0 text-yellow"
              style={{ lineHeight: "1.2" }}
            >
              +70.000
            </h3>
            <p className="text-lg m-0">
              Seguidores
              <br />
              en nuestras redes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
