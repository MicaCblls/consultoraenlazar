import React from "react";
import heroImage from "../../public/images/aprende-con-nosotros.webp";
import heroImageMobile from "../../public/images/aprende-con-nosotros-mobile.webp";
import Image from "next/image";
import Link from "next/link";

export default function LearnWithUsHero() {
  return (
    <>
      <div className="flex w-full max-h-[500px] flex-wrap justify-center items-center text-white text-center">
        <Image
          src={heroImage}
          alt="imagen cover"
          priority={true}
          quality={100}
          width={500}
          height={500}
          className="hidden w-full max-h-[500px]
           bg-cover sm:flex justify-center items-center p-0 m-0"
        />
        <Image
          src={heroImageMobile}
          alt="imagen cover"
          priority={true}
          quality={100}
          width={500}
          height={500}
          className="sm:hidden w-full max-h-[500px]
           bg-cover flex justify-center items-center p-0 m-0"
        />
        <div className="absolute px-3">
          <h2
            className="font-semibold"
            style={{
              fontSize: "clamp(1.25rem, 1.095rem + 0.8264vw, 1.875rem)",
            }}
          >
            Aprendé con los mejores profesionales del área de RRHH
          </h2>
          <p className="text-base font-semibold pb-4 whitespace-nowrap">
            Conocé toda nuestra propuesta formativa.
          </p>
          <Link
            className="text-dark bg-yellow inline-block align-middle text-center select-none whitespace-no-wrap rounded-full py-2 px-6 sm:px-10 leading-normal no-underline font-bold ease-in-out duration-200 hover:scale-105"
            href="/courses#top"
            scroll={false}
          >
            CURSOS Y CAPACITACIONES
          </Link>
        </div>
      </div>
    </>
  );
}
