import { Layout } from "@/components/Layout";
import { Blogs } from "@/components/Blog/Blogs";
import { useSession } from "@supabase/auth-helpers-react";
import { useAuth } from "@/lib/AuthContext";
import { useEffect } from "react";
import SignIn from "@/components/session/SignIn";
import { getClient } from "@/lib/sanity.server";
import groq from "groq";

const Blog = ({ blogs }) => {
  const session = useSession();
  const { setCurrentPath, setPreviousPath } = useAuth();

  useEffect(() => {
    setCurrentPath("/auth");
    setPreviousPath("/blog");
  }, []);

  return (
    <>
      <Layout title={"Blog"} content={"Consultora Enlazar."}>
        {session ? <Blogs blogs={blogs} /> : <SignIn />}
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const blogs = await getClient().fetch(
    groq`*[_type == "blog"] | order(order asc){
      _id,
      titleSEO,
      SEOdescription,
      title,
      body,
      description,
      slug,

    }`
  );

  return {
    props: {
      blogs,
    },
    revalidate: 1,
  };
}

export default Blog;
