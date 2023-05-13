import { Layout } from "@/components/Layout";
import { ContactUs } from "@/components/home/ContactUs";
import { Feedback } from "@/components/home/Feedback";
import { Goal } from "@/components/home/Goal";
import { Landing } from "@/components/home/Landing";
import { LearnWithUs } from "@/components/home/LearnWithUs";
import { OurServices } from "@/components/home/OurServices";
import { WeAre } from "@/components/home/WeAre";
import { CompaniesThatTrust } from "@/components/home/CompaniesThatTrust";

const Home = () => {
  return (
    <>
      <Layout
        title={"Inicio"}
        content={"Consultora Enlazar - Se parte del futuro del capital Humano"}
      >
        <>
          <Landing />
          <CompaniesThatTrust />
          {/*<WeAre/>
          <Goal/>
          <OurServices/>
          <LearnWithUs/>
          <Feedback/>
          <CompaniesThatTrust/>
          <ContactUs/>*/}
        </>
      </Layout>
    </>
  );
};
export default Home;
