import * as React from "react";
import { PortableText } from "@portabletext/react";
import closeIcon from "public/images/x-cerrar.svg";
import Image from "next/image";
import styles from "./CourseDetail.module.css";

const DetailsComponents = {
  block: {
    h2: ({ children }) => {
      return (
        <h2 className="py-4 px-2 text-2xl sm:text-3xl text-darkBlue border-y-[1px]">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      return (
        <h3 className="py-4 px-2 text-xl sm:text-2xl text-darkBlue border-y-[1px]">
          {children}
        </h3>
      );
    },
    h4: ({ children }) => {
      return (
        <h4 className="py-4 px-2 text-lg text-darkBlue border-y-[1px]">
          {children}
        </h4>
      );
    },
    h5: ({ children }) => {
      return (
        <h5 className="py-4 px-2 text-base text-darkBlue border-y-[1px]">
          {children}
        </h5>
      );
    },
    p: ({ children }) => {
      return <p className="px-2 pt-2 pb-4">{children}</p>;
    },
  },
  marks: {
    em: ({ children }) => (
      <em className="text-dark font-semibold">{children}</em>
    ),
    strong: ({ children }) => (
      <strong className="text-blue font-semibold">{children}</strong>
    ),
    link: ({ children, value }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" && "noindex nofollow"}
          className="underline text-blue font-semibold"
        >
          {children}
        </a>
      );
    },
  },
};

export default function Details({ handleOpenForm, handleClose, open, course }) {
  return (
    <>
      <div className="fixed z-[300] inset-0 font-Noah overflow-y-auto">
        <div className="flex items-center justify-center max-h-screen pt-10 px-4 pb-5 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block align-bottom rounded-lg text-left shadow-2xl transform transition-all my-2 sm:align-middle sm:max-w-2xl sm:w-full bg-white">
            <div className="bg-blue px-4 py-3 rounded-t-lg">
              <button
                className="float-right transition duration-150 ease-in-out bg-white rounded-full ml-4 mb-4 top-0 h-8 md:h-10"
                onClick={handleClose}
              >
                <Image
                  src={closeIcon}
                  alt="Logo cerrar detalles"
                  priority={true}
                  width={32}
                  height={32}
                  className="md:w-10 md:h-10"
                />
              </button>
              <h3 className="text-2xl font-medium text-white transition duration-150 ease-in-out md:text-3xl sm:pt-12 pl-2 pr-6 pb-2 pt-4">
                {course.title}
              </h3>
            </div>

            <div className={styles.contentScroll}>
              <PortableText
                value={course.body}
                components={DetailsComponents}
              />
              {course.commissions !== null && course.commissions.length >= 1 ? (
                <>
                  <h3 className="py-4 px-2 text-2xl text-blue border-y-[1px]">
                    <strong>Próximas comisiones:</strong>
                  </h3>
                  {course.commissions.map((item) => (
                    <ul key={item._id} className="py-4 px-6">
                      <li className="list-disc py-2">
                        <strong className="text-blue font-semibold">
                          {item.duration}
                        </strong>
                      </li>
                      <li className="pl-4 py-1">
                        <strong className="text-blue font-semibold">
                          Duración:{" "}
                        </strong>
                        {item.dates}
                      </li>
                      <li className="pl-4 py-1">
                        <strong className="text-blue font-semibold">
                          Modalidad de cursada:{" "}
                        </strong>
                        {item.modality}
                      </li>
                    </ul>
                  ))}
                </>
              ) : null}
            </div>

            <div className="bg-white border-t rounded-b-lg px-4 py-1 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center items-center border border-transparent shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 h-8 text-sm sm:ml-3 sm:w-auto sm:text-base bg-yellow rounded-2xl py-1 px-8 font-bold uppercase my-1"
                onClick={handleClose}
              >
                Inscribirse
              </button>

              <button
                type="button"
                className="w-full inline-flex justify-center items-center border border-transparent shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 h-8 text-sm sm:ml-3 sm:w-auto sm:text-base bg-yellow rounded-2xl py-1 px-8 font-bold uppercase my-1"
                onClick={handleOpenForm}
                value="courses"
                title={course.title}
              >
                Consultar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
