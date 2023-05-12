import { LearnWithUs } from "@/components/home/LearnWithUs";
import { Layout } from "@/components/Layout";
import { getClient } from "@/lib/sanity.server";
import groq from "groq";

const Courses = ({ courses, benefits }) => {
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
    .fetch(groq`*[_type == "course"] | order(order asc){
    _id,
    order,
    title,
    mainImage,
      description,
      price,
    "commissions": commissions[]->{_id,commissionName,duration,dates, modality},
      body,
      slug,
      inscriptionLink
  }`);

  const benefits = await getClient().fetch(
    groq`*[_type == "benefit"] | order(title asc){
      _id,
      title,
      mainImage,
      description, 
      link
    }`
  );

  return {
    props: {
      courses,
      benefits,
    },
    revalidate: 1,
  };
}

export default Courses;
