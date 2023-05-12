import groq from "groq";
import { PortableText } from "@portabletext/react";
import { getClient } from "@/lib/sanity.server";
import { Layout } from "@/components/Layout";
import Image from "next/image";
import { BsArrowBarLeft } from "react-icons/bs";
import Link from "next/link";

const DetailsComponents = {
  block: {
    h2: ({ children }) => {
      return (
        <h2 className="py-4 px-2 text-2xl sm:text-3xl text-darkBlue border-y-[1px]">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      return (
        <h3 className="py-4 px-2 text-lg sm:text-xl text-darkBlue border-y-[1px]">
          {children}
        </h3>
      );
    },
    h4: ({ children }) => {
      return (
        <h4 className="py-4 px-2 text-base sm:text-lg text-darkBlue border-y-[1px]">
          {children}
        </h4>
      );
    },
    h5: ({ children }) => {
      return (
        <h5 className="py-4 px-2 text-base text-darkBlue border-y-[1px]">
          {children}
        </h5>
      );
    },
    p: ({ children }) => {
      return <p className="px-2 py-2">{children}</p>;
    },
    normal: ({ children }) => {
      return <p className="px-2 pt-2 pb-4">{children}</p>;
    },
  },
  marks: {
    em: ({ children }) => (
      <li className="inline-flex md:pl-4 font-medium">
        <em className="text-dark">{children}</em>
      </li>
    ),
    strong: ({ children }) => (
      <strong className="text-blue text-base">{children}</strong>
    ),
  },
};

const BlogDetail = ({ blogDetail }) => {
  const { title, body, titleSEO, SEOdescription } = blogDetail;

  return (
    <Layout title={titleSEO} content={SEOdescription}>
      <Link
        href="/blog#top"
        className="flex self-start items-center font-medium md:text-lg text-blue pt-4 w-full px-4 md:px-8"
      >
        <BsArrowBarLeft className="w-7 h-auto" /> Blog
      </Link>
      <article className="bg-white p-6 w-full h-auto flex flex-col justify-center items-center">
        <div className="flex justify-between flex-wrap flex-col w-full md:w-1/2 ">
          <h1
            className="font-medium text-center"
            style={{
              fontSize: "clamp(1.2rem, 1.1008rem + 0.5289vw, 1.6rem)",
              paddingTop: "clamp(0.5rem, 0.376rem + 0.6612vw, 1rem)",
              paddingBottom: "clamp(0.5rem, 0.376rem + 0.6612vw, 1rem)",
            }}
          >
            {title}
          </h1>
          <hr />
          <div
            className="pt-2 text-justify"
            style={{
              fontSize: "clamp(1rem, 0.9752rem + 0.1322vw, 1.1rem)",
            }}
          >
            <PortableText value={body} components={DetailsComponents} />
          </div>
        </div>
      </article>
    </Layout>
  );
};

const query = groq`*[_type == "blog" && slug.current == $slug][0]{
    titleSEO,
      SEOdescription,
    title, 
    body, 
}`;

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    groq`*[_type == "blog" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const blogDetail = await getClient(preview).fetch(query, {
    slug: params.slug,
  });

  return {
    props: { blogDetail },
  };
}

export default BlogDetail;
