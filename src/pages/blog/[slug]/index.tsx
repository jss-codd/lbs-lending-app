import Instance from "@/utils/axios";
import BlogOverview from "@/components/BlogOverview";
import { Metadata } from "next";

export default function Blog({ blog }: any) {
  return (
    <main>
      <BlogOverview blog={blog} />
    </main>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

// export async function generateStaticParams() {
//   let searchQuery = `offset=${0}&limit=${10}`;
//   const { data, status } = await Instance.get(`/blogs?${searchQuery}`);
//   return data?.data.map((blog: any) => ({
//     slug: blog.id,
//   }));
// }

// export async function generateMetadata({ params: { slug } }: any) {
//   const { data, status } = await Instance.get(`/blogs/${slug}`);

//   return {
//     title: data.metaTitle,
//     Description: data.metaTitle,
//     icons: {
//       icon: "/favicon-32x32.png",
//     },
//     openGraph: {
//       images: "/favicon-32x32.png",
//     },
//     metadataBase: new URL("https://kwe5st.littlebigshed.com.au"),
//     applicationName: "Little Big Shed",
//     // referrer: 'origin-when-cross-origin',
//     keywords: data?.category?.split(","),
//   };
// }

export const getStaticProps = async ({ params: { slug } }: any) => {
  try {
    const { data, status } = await Instance.get(`/blogs/${slug}`);
    if (!data) {
      return {
        notFound: true,
      };
    }
    let blog = data || {};
    return {
      props: {
        blog,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
