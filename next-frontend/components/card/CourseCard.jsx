import { urlFor } from "@/lib/sanity";
import { useSession } from "@supabase/auth-helpers-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./CourseCard.module.css";
import Details from "./CourseDetail";

const CourseCard = ({ course, handleOpenForm }) => {
  const { title, description, mainImage } = course;
  //Detail component functions
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const session = useSession();
  const handleClickOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  return (
    <>
      {open ? (
        <Details
          handleClickOpen={handleClickOpen}
          open={open}
          course={course}
          scroll={scroll}
          handleClose={handleClose}
          handleOpenForm={handleOpenForm}
          session={session}
        />
      ) : null}

      {/* Cards a partir de 1024px */}
      <div className={styles.card}>
        <div className={styles.imgBox}>
          <span className={styles.imgTitle}>{title}</span>
          <Image
            alt={title + " image"}
            src={urlFor(mainImage).url()}
            width={150}
            height={150}
            priority={true}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.info}>
            <h2 className="pt-4 pb-4 px-2 text-lg text-center text-ellipsis">
              <strong className="text-dark opacity-90">{title}</strong>
            </h2>
            <p className="text-center text-clip px-3">{description}</p>
            <button
              className="bg-yellow rounded-2xl m-2 py-1 px-8 font-bold uppercase self-center"
              onClick={handleClickOpen}
            >
              Ver detalles
            </button>
          </div>
        </div>
      </div>
      {/* Cards responsive */}
      <div className="lg:hidden flex flex-col justify-start items-start ease-in-out bg-white max-w-xs h-[480px] relative rounded-2xl shadow-2xl outline-offset-8 text-dark">
        <div className="bg-blue flex justify-center items-center w-full rounded-t-xl rounded-b-none">
          <Image
            className="max-w-[150px]"
            alt={title + " image"}
            src={urlFor(mainImage).url()}
            width={150}
            height={150}
          />
        </div>
        <hr />
        <div className="flex flex-col flex-wrap justify-evenly items-center ">
          <h2 className="pt-4 pb-2 px-2 text-lg text-center">
            <strong className="text-dark opacity-90">{title}</strong>
          </h2>
          <p className="text-center text-ellipsis pt-2 pb-2 px-2 overflow-y-auto max-h-56">
            {description}
          </p>
          <button
            className="bg-yellow rounded-2xl py-1 px-8 font-bold uppercase my-2 "
            onClick={handleClickOpen}
          >
            Ver detalles
          </button>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
