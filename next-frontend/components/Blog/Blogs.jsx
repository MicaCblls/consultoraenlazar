import React from "react";
import Image from "next/image";
import styles from "./Blog.module.css";
import Link from "next/link";

export const Blogs = ({ blogs }) => {
  return (
    <div className="mx-auto w-full ">
      <div className="flex flex-col justify-center items-center w-full h-auto pb-6 md:pb-12 ">
        <h2
          className=" py-10 px-4 md:px-8 font-bold text-center text-ellipsis w-full"
          style={{
            fontSize: "clamp(1.2rem, 1.0017rem + 1.0579vw, 2rem)",
          }}
        >
          Conocé más sobre nuestros últimos artículos del área.
        </h2>
      </div>
      <div className="pb-12 w-full flex lg:flex-wrap flex-col justify-center md:justify-evenly items-center gap-10 xl:flex-row px-8">
        {blogs && blogs.length ? (
          blogs.map((blog) => (
            <div
              key={blog._id}
              className="flex flex-col md:flex-row justify-center md:justify-evenly items-center ease-in-out bg-white rounded-2xl shadow-2xl outline-offset-8 text-dark h-auto md:h-[350px] w-full"
              style={{
                width: "clamp(15.625rem, 7.1023rem + 45.4545vw, 50rem)",
              }}
            >
              <div className="bg-blue flex justify-center items-center w-full rounded-t-xl md:w-2/5 md:rounded-l-xl p-4 outline-offset-8 h-full max-h-[150px] md:max-h-full md:rounded-tr-none">
                <Image
                  src="/images/trabaja-con-nosotros.webp"
                  width={200}
                  height={200}
                  alt="payhous"
                  className="w-36 h-36 md:h-auto md:w-auto"
                />
              </div>
              <hr />
              <div className="flex flex-col xl:flex-wrap justify-center items-center w-full h-full">
                <h2
                  className="pt-4 pb-2 px-2 text-center"
                  style={{
                    fontSize: "clamp(1.1rem, 1.0504rem + 0.2645vw, 1.3rem)",
                  }}
                >
                  <strong className="text-dark opacity-90">{blog.title}</strong>
                </h2>
                <p className="text-center text-ellipsis pt-2 pb-4 px-4 overflow-y-auto max-h-56">
                  {blog.description}
                </p>
                <Link href={"/blogDetail/" + blog.slug.current + "#top"}>
                  <button
                    className="text-dark bg-yellow inline-block align-middle text-center select-none whitespace-no-wrap rounded-full mb-4 py-1 px-6 sm:px-10 leading-normal no-underline font-bold ease-in-out duration-200 hover:scale-105 uppercase"
                    /* onClick={handleClickOpen} */
                  >
                    Ver detalles
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col justify-center items-center w-1/2 h-auto text-2xl">
            <p>No hay blogs publicados actualmente.</p>
            <Link href="/" className="py-2">
              <button className="border-solid border-2 bg-darkBlue text-white rounded-full py-2 px-5 self-center md:self-end">
                Volver al inicio
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
