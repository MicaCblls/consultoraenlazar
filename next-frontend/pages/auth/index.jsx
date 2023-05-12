import { Layout } from "@/components/Layout";
import SignIn from "@/components/session/SignIn";

const Authentication = () => {
  return (
    <Layout title={"Sesión"} content={"Consultora Enlazar."}>
      <SignIn />
    </Layout>
  );
};

export default Authentication;
