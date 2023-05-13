import { Layout } from "@/components/Layout";
import { Blogs } from "@/components/Blog/Blogs";

const Blog = () => {
  return (
    <>

      <Layout 
        title={"Blog"}
        content={"Consultora Enlazar."}
      >
        <Blogs/>
      </Layout>
    </>
  );
};
export default Blog;
