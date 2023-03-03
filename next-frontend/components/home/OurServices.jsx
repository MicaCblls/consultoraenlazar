import React from "react";
import logoIndividuos from "public/images/card-individuos-grupos.webp";
import logoOrg from "public/images/card-empresas.webp";
import Image from "next/image";
import ServicesCard from "@/components/card/ServicesCard";
import ConsultationForm from "../../components/forms/ConsultationForm";
import { useState } from "react";
import Link from "next/link";

import styles from "./OurServices.module.css";
import coverImage from "public/images/portada-servicios.webp"
import coverImageCv from "public/images/revision-cv-gratis.webp"
import WorkWithUsForm from "../forms/CVSubmissionForm";



export const OurServices = ({ services }) => {
  const [openForm, setOpenForm] = useState(false);

  const [isOpen, setIsOpen] = useState(false)


  const handleOpenForm = (e) => {
    e.preventDefault();
    setOpenForm(true);
  };

  const handleCloseForm = (e) => {
    e.preventDefault();
    setOpenForm(false);
  };

  const handleOpenCv = (e)=>{
    e.preventDefault()
    setIsOpen(true)
  }

  const organizaciones = services.filter(
    (item) => item.categories[0].categoryName.toLowerCase() === "organizaciones"
  );
  const individuos = services.filter(
    (item) => item.categories[0].categoryName.toLowerCase() === "individuos"
  );
  return (
    <>
      {openForm ? <ConsultationForm handleCloseForm={handleCloseForm} /> : null}
      {
        isOpen &&
        <WorkWithUsForm handleClose={setIsOpen} />
      }

      <div className="w-full h-full flex justify-center items-center flex-col top-0 bottom-0 right-0 left-0">
        <div className={styles.containerCover}>
          <Image
            src={coverImage}
            alt="imagen cover"
            priority={true}
            width={1000}
            height={1000}
            className="w-full "
          />
          <div className=" text-white font-bold w-auto  text-center  drop-shadow-[(4px 4px 10px rgba(0, 0, 0, 0.25))]   absolute" style={{ fontSize: "clamp(0.8rem, 0.4794rem + 1.7099vw, 2.2rem)" }}>
            Nuestros servicios están orientados a todas
            <br />
            las áreas que involucran el capital humano
            <br />
            garantizando la mayor profesionalidad.
          </div>

        </div>

        <div className=" bg-[#bbcacf] flex flex-col text-center justify-center w-full gap-10 p-8 h-auto pb-20">
          <div className="flex ">
            <h2 className="text-2xl text-ellipsis font-semibold" style={{ padding: "clamp(1.5rem, 1.271rem + 1.2214vw, 2.5rem)" }}>
              ¿Para quiénes los ofrecemos?
            </h2>
          </div>
          <div className=" flex flex-col justify-center gap-10  md:flex-row">
            <div className=" flex justify-center ">
              <div className="rounded-2xl shadow-lg bg-blue w-72 hover:shadow-lg  duration-300 transform hover:opacity-90 hover:scale-[1.02] h-[360px] flex flex-col justify-center items-center">
                <Image
                  className="rounded-t-lg w-52 "
                  src={logoIndividuos}
                  alt="individuos"
                  priority={true}
                  width={200}
                  height={200}
                />
                <div className="p-6 ">
                  <p className="text-white  mb-4 text-lg">
                    Individuos o grupos
                  </p>
                  <Link href={"#individuals"}>
                    <button className="rounded-full  bg-yellow p-2 px-4 font-semibold">
                      QUIERO SABER +
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center ">
              <div className="rounded-2xl shadow-lg bg-blue w-72 hover:shadow-lg  duration-300 transform hover:opacity-90 hover:scale-[1.02] h-[360px] flex flex-col justify-center items-center">
                <Image
                  className="rounded-t-lg w-52 "
                  src={logoOrg}
                  alt="empresa"
                  priority={true}
                  width={200}
                  height={200}
                />
                <div className="p-6 ">
                  <p className="text-white  mb-4 text-lg">
                    Organizaciones
                  </p>
                  <Link href={"#organization"}>
                    <button className="rounded-full  bg-yellow p-2 px-4 font-semibold">
                      QUIERO SABER +
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-5 text-dark w-full">
          <ServicesCard
            servicesForIndividuals={individuos}
            servicesForOrganizations={organizaciones}
            handleOpenForm={handleOpenForm}
          />
        </div>

        <div className={styles.containerCover}>
          <Image
            src={coverImageCv}
            alt="imagen cover"
            priority={true}
            width={1000}
            height={1000}
            className="w-full "
          />
          <div className="w-full min-h-max drop-shadow-[(4px 4px 10px rgba(0, 0, 0, 0.25))] flex flex-col items-center justify-center absolute" >

            <h2 className="text-white font-semibold px-4 text-center mb-0 drop-shadow-[(4px 4px 10px rgba(0, 0, 0, 0.25))]" style={{ fontSize: "clamp(0.8rem, 0.4794rem + 1.7099vw, 2.2rem)", paddingBottom: "clamp(0.2rem, 0.1313rem + 0.3664vw, 0.5rem)" }}>
              ¡RECURSOS GRATIS!
            </h2>
            <p className="text-white pb-2 px-4 text-center mb-0 drop-shadow-[(4px 4px 10px rgba(0, 0, 0, 0.25))]" style={{ fontSize: "clamp(0.7rem, 0.5168rem + 0.9771vw, 1.5rem)", paddingBottom: "clamp(0.5rem, 0.3282rem + 0.916vw, 1.25rem)" }}>
              Conocé todos los recursos gratuitos que ofrecemos sobre
              <br /> empleabilidad y desarrollo profesional.
            </p>

            <button className="rounded-full font-semibold bg-yellow py-1 px-4 uppercase text-xs sm:max-md:text-base md:text-lg" onClick={handleOpenCv}>
              Me Interesa
            </button>

          </div>
        </div>
      </div>
    </>
  );
};
