import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Goal = () => {
  return (
    <div className="flex flex-wrap w-full h-auto">
      <div className="hidden md:block md:w-1/2 mb-0">
        <Image
          className="w-full h-[500px]"
          alt="Somos Enlazar hero"
          src="/images/nuestro-objetivo.webp"
          quality={100}
          priority={true}
          width={500}
          height={500}
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-5 flex flex-col justify-center py-6 md:py-6">
        <h2
          style={{
            fontSize: "clamp(1.25rem, 1.095rem + 0.8264vw, 1.875rem)",
          }}
          className="font-bold text-center text-ellipsis text-gray-800  mb-4 lg:mb-8"
        >
          Somos Enlazar
        </h2>
        <p className="text-gray-800 text-base lg:text-lg md:mb-4 md:text-left text-center px-6">
          Nuestra misión: Revolucionar el área de RRHH. Creamos y brindamos
          soluciones de desarrollo para personas, equipos y organizaciones en
          materia de formación profesional y consultoría, basadas en la
          experiencia, la innovación y las buenas prácticas, apoyándonos en el
          valor humano y las nuevas tecnologías.
        </p>
        <div className="flex justify-center pb-5 pt-5">
          <Link href="/team#top">
            <button className="bg-yellow inline-block align-middle text-center select-none whitespace-no-wrap rounded-full py-2 px-6 sm:px-10 leading-normal no-underline font-bold ease-in-out duration-200 hover:scale-105">
              Conoce nuestro Equipo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
