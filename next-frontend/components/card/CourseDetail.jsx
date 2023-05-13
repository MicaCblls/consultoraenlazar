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
        <h3 className="py-4 px-2 text-lg sm:text-xl text-darkBlue border-y-[1px]">
          {children}
        </h3>
      );
    },
    h4: ({ children }) => {
      return (
        <h4 className="py-4 px-2 text-base sm:text-lg text-darkBlue border-y-[1px]">
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
    normal: ({ children }) => {
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
        <div className="flex items-center justify-center max-h-screen px-4 py-5 text-center sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <span
            className="hidden xsm:inline-block xsm:align-middle xsm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div
            className="flex flex-col align-bottom rounded-lg text-left shadow-2xl transform transition-all my-4 sm:align-middle sm:max-w-2xl sm:w-full bg-white"
            style={{
              height: "clamp(25rem, 20.3512rem + 24.7934vw, 43.75rem)",
              maxHeight: "100vh",
              fontSize: "clamp(0.9rem, 0.8752rem + 0.1322vw, 1rem)",
            }}
          >
            <div className="bg-blue px-4 py-2 rounded-t-lg">
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
              <h2
                className="font-medium text-white transition duration-150 ease-in-out pl-2 pr-6"
                style={{
                  fontSize: "clamp(1.3rem, 1.1512rem + 0.7934vw, 1.9rem)",
                  paddingTop: "clamp(0.5rem, 0.376rem + 0.6612vw, 1rem)",
                  paddingBottom: "clamp(0.5rem, 0.376rem + 0.6612vw, 1rem)",
                }}
              >
                {course.title}
              </h2>
            </div>

            <div className={styles.contentScroll}>
              <PortableText
                value={course.body}
                components={DetailsComponents}
              />
              {course.commissions !== null && course.commissions.length >= 1 ? (
                <>
                  <h3 className="py-4 px-2 text-lg sm:text-xl text-blue border-y-[1px]">
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
