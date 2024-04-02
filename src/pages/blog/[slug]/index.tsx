import Instance from "@/utils/axios";
import BlogOverview from "@/components/BlogOverview";
import { Metadata } from "next";


async function getBlog(blogId: string) {
  const { data, status } = await Instance.get(`/blogs/${blogId}`);
  return data;
}

export default async function Blog({ params: { slug } }: any) {
  const data = await getBlog(slug);
  return (
    <main>
      <BlogOverview blog={data} />
    </main>
  );
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
