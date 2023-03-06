import { Layout } from "@/components/Layout";
import { OurServices } from "@/components/home/OurServices";
import { getClient } from "@/lib/sanity.server";
import groq from "groq";

const Services = ({ services } ) => {
  return (
    <>
      <Layout
        title={"Servicios"}
        content={"Servicios de Consultora Enlazar para empresas e individuos."}
      >
        <OurServices services={services} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const services = await getClient()
    .fetch(groq`*[_type == "services"] | order(title desc){
    _id,
    title,
    mainImage,
      description,
      slug,
      "categories": categories[]->{categoryName},
      "provider": provider->{providerName}
  }`);

  return {
    props: {
      services,
    },
    revalidate: 1,
  };
}
export default Services;
