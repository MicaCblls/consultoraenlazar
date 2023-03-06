import Image from "next/image";
import Link from "next/link";
import CourseCard from "../card/CourseCard";
import diploma from "public/images/Diploma.png";
import BenefitCard from "../card/BenefitCard";
import ConsultationForm from "../forms/ConsultationForm";
import { useState } from "react";

export const LearnWithUs = ({ courses, benefits }) => {
  const benefitsWithUrl = benefits.filter((item) => item.link);
  const benefitsWithoutUrl = benefits.filter((item) => !item.link);
  //Form component functions
  const [openForm, setOpenForm] = useState(false);
  const [section, setSection] = useState("");
  const [title, setTitle] = useState("");

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

  return (
    <>
      {openForm ? (
        <ConsultationForm
          handleCloseForm={handleCloseForm}
          section={section}
          title={title}
          setTitle={setTitle}
        />
      ) : null}

      <div className="bg-white w-full h-auto lg:min-h-screen flex flex-col justify-center items-center">
        <div className="flex justify-center items-center w-full h-auto pb-6 md:pb-12 bg-grey">
          <h3 className="pt-16 px-4 md:px-8 text-2xl md:text-3xl font-bold text-center text-ellipsis opacity-90">
            Todo lo que vas a encontrar:
          </h3>
        </div>
        <div className="flex flex-col flex-wrap justify-center items-center h-auto gap-6 px-6 py-10 w-full lg:relative lg:flex-row lg:justify-center lg:items-center lg:px-4 lg:py-14 bg-grey">
          {courses &&
            courses.map((course) => (
              <CourseCard
                key={course._id}
                course={course}
                handleOpenForm={handleOpenForm}
              />
            ))}

          <div className="flex justify-center items-center w-full py-6">
            <p className="font-semibold text-center text-xl w-2/4 text-ellipsis lg:w-1/4">
              Actualizamos el contenido y brindamos más cursos cada año.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-8 md:p-20 flex-wrap">
          <h2 className=" p-14 font-bold text-2xl text-center text-ellipsis md:text-3xl md:pb-10 border-t-2">
            ¡Este será tu certificado!
          </h2>
          <Image
            className="shadow-2xl outline-offset-8 m-2 "
            src={diploma}
            priority={true}
            style={{
              width: "800px",
              height: "auto",
            }}
            alt="Consultora Enlazar Diploma"
          />
        </div>
        <div className="w-full h-auto bg-grey">
          <h2 className=" p-14 font-semibold text-2xl text-center text-ellipsis md:text-3xl md:pb-10 border-t-2">
            Disfrutá de nuestros beneficios:
          </h2>
          <div className="flex flex-col p-5 md:flex-row flex-wrap justify-evenly items-center mb-8">
            {benefitsWithUrl?.map((benefit) => {
              return (
                <Link
                  href={benefit.link.href}
                  target="_blank"
                  key={benefit._id}
                >
                  <BenefitCard
                    benefit={benefit}
                    handleOpenForm={handleOpenForm}
                  />
                </Link>
              );
            })}
            {benefitsWithoutUrl?.map((benefit) => {
              return (
                <BenefitCard
                  key={benefit._id}
                  benefit={benefit}
                  handleOpenForm={handleOpenForm}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
