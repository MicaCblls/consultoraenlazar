import { Layout } from "@/components/Layout";
import { ContactUs } from "@/components/home/ContactUs";
import { Feedback } from "@/components/home/Feedback";
import { Goal } from "@/components/home/Goal";
import { Landing } from "@/components/home/Landing";
import { LearnWithUs } from "@/components/home/LearnWithUs";
import { OurServices } from "@/components/home/OurServices";
import { WeAre } from "@/components/home/WeAre";
import { CompaniesThatTrust } from "@/components/home/CompaniesThatTrust";
import ContactUsForm from "@/components/forms/ContactUsForm";
import { getClient } from "@/lib/sanity.server";
import groq from "groq";

const Home = () => {
  return (
    <>
      <Layout
        title={"Inicio"}
        content={"Consultora Enlazar - Se parte del futuro del capital Humano"}
      >
        <>
          <Landing />
          <Goal />
          <Feedback/>
          <CompaniesThatTrust />
          <ContactUsForm />
          {/*<WeAre/>
          <OurServices/>
          <LearnWithUs/>
            */}
        </>
      </Layout>
    </>
  );
};
export default Home;

export async function getStaticProps() {
  const companies = await getClient().fetch(
    groq`*[_type == "company"] | order(title asc){
      _id,
      title,
      mainImage,
    }`
  );

  return {
    props: {
      companies,
    },
    revalidate: 1,
  };
}
