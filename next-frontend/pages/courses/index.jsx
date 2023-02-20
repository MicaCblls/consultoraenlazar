import { LearnWithUs } from "@/components/home/LearnWithUs";
import { Layout } from "@/components/Layout";
import { urlFor } from "@/lib/sanity";
import { getClient } from "@/lib/sanity.server";
import groq from "groq";
import Link from "next/link";

const Courses = ({ courses, benefits }) => {
  console.log(benefits, "COURSES");
  return (
    <>
      <Layout
        title={"Cursos & Capacitaciones"}
        content={
          "Cursos y capcitaciones de Consultora Enlazar para empresas e individuos"
        }
      >
        <LearnWithUs courses={courses} benefits={benefits} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const courses = await getClient()
    .fetch(groq`*[_type == "course"] | order(title asc){
    _id,
    title,
      description,
      price,
    commissions,
      body,
      mainImage,
      slug
  }`);

  const benefits = await getClient().fetch(
    groq`*[_type == "benefit"] | order(title asc){
      _id,
      title,
      description
    }`
  );
  return {
    props: {
      courses,
      benefits,
    },
  };
}

export default Courses;
