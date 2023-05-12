import { useState, useEffect } from "react";
import Image from "next/image";
import BackgroundImg from "@/public/images/letra-e-completa.png";
import supabase from "@/lib/supabaseClient";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const ContactUsForm = () => {
  const [input, setData] = useState({
    name: "",
    phone: "",
    email: "",
    comments: "",
    company: "",
  });

  const [errors, setErrors] = useState({
    name: " ",
    email: " ",
    comments: " ",
    company: " ",
  });

  const validate = (input) => {
    if (input.name === "email") {
      !/\S+@\S+\.\S+/.test(input.value)
        ? setErrors((prev) => ({
            ...prev,
            email: "Ingresa un email válido",
          }))
        : setErrors((prev) => ({ ...prev, email: "" }));
    } else if (input.name === "name") {
      !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(input.value)
        ? setErrors((prev) => ({
            ...prev,
            name: "Ingresa un nombre válido",
          }))
        : setErrors((prev) => ({ ...prev, name: "" }));
    } else if (input.name === "comments") {
      input.value.length > 1000
        ? setErrors((prev) => ({
            ...prev,
            comments: "Máximo 1000 caracteres",
          }))
        : setErrors((prev) => ({ ...prev, comments: "" }));
    } else if (input.name === "company") {
      !input.value.length
        ? setErrors((prev) => ({
            ...prev,
            company: "Ingresa un nombre válido",
          }))
        : setErrors((prev) => ({ ...prev, company: "" }));
    }
  };

  const handleOnChange = (event) => {
    event.preventDefault();
    setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    validate(event.target);
  };

  const handleSubmit = async (event) => {
    //en esta funcion se ejecuta el aviso y se envia la informacion a la base de datos y al mail
    const { data, error } = await supabase.from("Consultas").insert([
      {
        title: "General",
        name: input.name,
        phone: input.phone,
        email: input.email,
        consultation: input.comments,
        company: input.company,
      },
    ]);
    if (data) {
      setData({
        name: "",
        phone: "",
        email: "",
        comments: "",
        company: "",
      });
    }
    if (error) {
      console.log(error);
    }
    Swal.fire({
      title: "Tu consulta ha sido enviada con éxito.",
      text: "Nos pondremos en contacto a la brevedad.",
      imageUrl: "../images/consulta-enviada-con-exito.gif",
      imageWidth: 200,
      imageHeight: 150,
      imageAlt: "Consulta enviada",
      width: "45em",
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
    }).then((isOk) => {
      if (isOk) {
        event.target.submit();
      }
      return false;
    });
  };

  let isDisabled = Object.values(errors).join("").length ? true : false;

  return (
    <>
      <div
        id="contact"
        className="border flex flex-col justify-center items-center md:h-[50rem] h-[40rem] md:w-screen text-center"
      >
        <div className="">
          <Image
            src={BackgroundImg}
            width={600}
            height={600}
            alt="Background Img"
            priority
            className="w-auto h-auto"
          />
        </div>
        <div className="absolute rounded-lg w-fit content-center transition-all bg-transparent p-8 md:p-12">
          <div className="md:pt-4">
            <h2 className="text-darkBlue md:px-2 xsm:text-xl lg:text-3xl font-semibold text-ellipsis text-center">
              ¿Cómo podemos ayudarte?
            </h2>
            <p className="xsm:p-1 xsm:pb-8 md:p-3 md:pb-12 font-semibold text-ellipsis text-center xsm:text-sm lg:text-base">
              Envianos tu consulta y nos pondremos en contacto a la brevedad.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            action="https://formsubmit.co/hola@enlazar.xyz"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="w-full flex flex-col md:flex-row md:mb-2 justify-evenly items-center">
              <div className="flex flex-col w-full justify-center md:w-2/4 md:mr-2 md:mb-0">
                <input type="hidden" name="_subject" value="Contacto" />
                {/*En este input se tiene que poner la pagina final cuando se haga el hosting */}
                <input
                  type="hidden"
                  name="_next"
                  value="https://consultoraenlazar-git-dev-micacblls.vercel.app/"
                />
                <input type="hidden" name="_template" value="box" />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  placeholder="Nombre y Apellido"
                  onChange={handleOnChange}
                  className="flex w-full xsm:h-8 md:h-[3.3rem] xsm:py-1 xsm:px-4 md:py-2 md:px-4 border border-solid border-grey rounded-xl xsm:text-xs md:text-lg bg-transparent"
                  required
                />
                <small className="h-6 text-red-600 xsm:text-xs md:text-[13px] text-left">
                  {errors.name}
                </small>
              </div>
              <div className="flex flex-col w-full justify-center md:w-2/4 md:ml-2 md:mt-0">
                <input
                  type="text"
                  name="company"
                  value={input.company}
                  placeholder="Empresa"
                  onChange={handleOnChange}
                  className="flex justify-between w-full xsm:h-8 md:h-[3.3rem] xsm:py-1 xsm:px-4 md:py-2 md:px-4 border border-solid border-grey rounded-xl xsm:text-xs md:text-lg bg-transparent"
                  required
                />
                <small className="h-6 text-red-600 xsm:text-xs md:text-[13px] text-left">
                  {errors.company}
                </small>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row md:mb-2 justify-evenly items-center">
              <div className="flex flex-col w-full mb:mb-2 justify-center md:w-2/4 md:mr-2">
                <input
                  type="email"
                  name="email"
                  value={input.email}
                  placeholder="Email"
                  onChange={handleOnChange}
                  className="flex w-full xsm:h-8 md:h-[3.3rem] xsm:py-1 xsm:px-4 md:py-2 md:px-4 border border-solid border-grey rounded-xl xsm:text-xs md:text-lg bg-transparent"
                  required
                />
                <small className="h-6 text-red-600 xsm:text-xs md:text-[13px] text-left">
                  {errors.email}
                </small>
              </div>
              <div className="flex flex-col w-full justify-center md:w-2/4 md:ml-2 md:mt-0">
                <input
                  type="tel"
                  name="phone"
                  value={input.phone}
                  placeholder="Teléfono"
                  onChange={handleOnChange}
                  className="flex justify-between w-full xsm:h-8 md:h-[3.3rem] xsm:py-1 xsm:px-4 md:py-2 md:px-4 border border-solid border-grey rounded-xl xsm:text-xs md:text-lg bg-transparent"
                  required
                />
                <small className="h-6 text-red-600 xsm:text-xs md:text-[13px] text-left">
                  {errors.phone}
                </small>
              </div>
            </div>
            <div className="flex flex-col w-full justify-start xsm:mb-0 md:mb-2 md:h-2/4">
              <textarea
                name="comments"
                value={input.comments}
                placeholder="Contanos un poco sobre vos"
                onChange={handleOnChange}
                rows={8}
                className="flex w-full xsm:h-16 md:h-36 xsm:py-3 xsm:px-4 md:py-2 md:px-4 border border-solid border-grey rounded-xl xsm:text-xs md:text-lg resize-none md:mb-3 bg-transparent"
                required
              />
              <div className="flex justify-between">
                <small className="h-6 text-red-600 xsm:text-xs md:text-[13px] text-left">
                  {errors.comments}
                </small>
                <small
                  className={
                    errors.comments
                      ? "xsm:h-2 md:h-6 text-red-600 xsm:text-xs md:text-[13px]"
                      : "xsm:h-2 md:h-6 text-green-600 xsm:text-xs md:text-[13px]"
                  }
                >
                  {!input.comments.length ? "" : input.comments.length}
                </small>
              </div>
            </div>
            <div className="flex pt-3 justify-end self-center">
              <div className="pl-5">
                <button
                  className={
                    isDisabled
                      ? "bg-grey text-gray-500 rounded-2xl py-1 px-8 font-semibold uppercase self-center md:self-end"
                      : "bg-yellow rounded-2xl py-1 px-8 font-semibold uppercase self-center md:self-end"
                  }
                  type="submit"
                  disabled={isDisabled}
                >
                  Enviar consulta
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUsForm;
