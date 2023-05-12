import React, { useState } from "react";
import logoIndividuos from "public/images/card-individuos-grupos.webp";
import logoOrg from "public/images/card-empresas.webp";
import Image from "next/image";
import ServicesCard from "@/components/card/ServicesCard";
import ConsultationForm from "../../components/forms/ConsultationForm";

import Link from "next/link";

import styles from "./OurServices.module.css";
import coverImage from "public/images/portada-servicios.webp";
import coverImageCv from "public/images/revision-cv-gratis.webp";
import WorkWithUsForm from "../forms/CVSubmissionForm";
import { useSession } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useAuth } from "@/lib/AuthContext";

export const OurServices = ({ services }) => {
  const servicesCvFormTitle = "¡RECURSOS GRATIS!";
  const servicesCvFormDescription =
    "Conocé todos los recursos gratuitos que ofrecemos sobre empleabilidad y desarrollo profesional.";

  const [openForm, setOpenForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [section, setSection] = useState("");
  const { setCurrentPath, setPreviousPath } = useAuth();
  const session = useSession();
  const route = useRouter();

  const handleOpenForm = (e) => {
    e.preventDefault();
    setTitle(e.target.title);
    setSection(e.target.value);
    setOpenForm(true);
  };

  const handleCloseForm = (e) => {
    e.preventDefault();
    setTitle("");
    setOpenForm(false);
  };

  const handleOpenCv = (e) => {
    e.preventDefault();
    if (session) {
      setIsOpen(true);
    } else {
      setPreviousPath("/services#freeResources");
      setCurrentPath("/auth");
      route.push("/auth");
    }
  };

  const organizaciones = services.filter(
    (item) => item.categories[0].categoryName.toLowerCase() === "organizaciones"
  );
  const individuos = services.filter(
    (item) => item.categories[0].categoryName.toLowerCase() === "individuos"
  );

  return (
    <>
      {openForm ? (
        <ConsultationForm
          title={title}
          setTitle={setTitle}
          handleCloseForm={handleCloseForm}
          section={section}
        />
      ) : null}
      {isOpen && (
        <WorkWithUsForm
          handleClose={setIsOpen}
          title={servicesCvFormTitle}
          description={servicesCvFormDescription}
          uploadOpt={false}
        />
      )}

      <div className="w-full h-full flex justify-center items-center flex-col top-0 bottom-0 right-0 left-0">
        <div className={styles.containerCover}>
          <Image
            src={coverImage}
            alt="imagen cover"
            priority={true}
            quality={100}
            width={1000}
            height={1000}
            className="w-full "
          />
          <div
            className=" text-white font-bold w-auto  text-center  drop-shadow-[(4px 4px 10px rgba(0, 0, 0, 0.25))]  absolute"
            style={{ fontSize: "clamp(1rem, 0.7025rem + 1.5868vw, 2.2rem)" }}
          >
            Servicios personalizados de calidad
            <br />
            con profesionalismo garantizado.
          </div>
        </div>

        <div className=" bg-[#bbcacf] flex flex-col text-center justify-center w-full gap-10 p-8 h-auto pb-20">
          <div className="flex ">
            <h2
              className="text-ellipsis font-semibold"
              style={{
                padding: "clamp(1.5rem, 1.271rem + 1.2214vw, 2.5rem)",
                fontSize: "clamp(1.2rem, 1.076rem + 0.6612vw, 1.7rem)",
              }}
            >
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
                  <p className="text-white  mb-4 text-lg">Organizaciones</p>
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

        <div className={styles.containerCover} id="freeResources">
          <Image
            src={coverImageCv}
            alt="imagen cover"
            priority={true}
            quality={100}
            width={1000}
            height={1000}
            className="w-full "
          />
          <div className="w-full min-h-max drop-shadow-[(4px 4px 10px rgba(0, 0, 0, 0.25))] flex flex-col items-center justify-center absolute">
            <h2
              className="text-white font-semibold px-4 text-center mb-0 drop-shadow-[(4px 4px 10px rgba(0, 0, 0, 0.25))]"
              style={{
                fontSize: "clamp(0.8rem, 0.4794rem + 1.7099vw, 2.2rem)",
                paddingBottom: "clamp(0.2rem, 0.1313rem + 0.3664vw, 0.5rem)",
              }}
            >
              ¡RECURSOS GRATIS!
            </h2>
            <p
              className="text-white pb-2 px-4 text-center mb-0 drop-shadow-[(4px 4px 10px rgba(0, 0, 0, 0.25))]"
              style={{
                fontSize: "clamp(0.7rem, 0.5168rem + 0.9771vw, 1.5rem)",
                paddingBottom: "clamp(0.5rem, 0.3282rem + 0.916vw, 1.25rem)",
              }}
            >
              Conocé todos los recursos gratuitos que ofrecemos sobre
              <br /> empleabilidad y desarrollo profesional.
            </p>

            <button
              className="rounded-full font-semibold bg-yellow py-1 px-4 uppercase text-xs sm:max-md:text-base md:text-lg lg:py-2"
              onClick={handleOpenCv}
            >
              Me Interesa
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
