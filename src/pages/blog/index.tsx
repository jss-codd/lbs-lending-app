import BlogsPage from "@/containers/BlogsPage";
import Instance from "@/utils/axios";

// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "blogs page",
//   description: "this is the blogs page discription",
//   icons: {
//     icon:  '/favicon-32x32.png',
//   },
//   openGraph: {
//     images: '/favicon-32x32.png',
//   },
//   metadataBase: new URL('https://kwe5st.littlebigshed.com.au'),
//   applicationName: 'Little Big Shed',
//   // referrer: 'origin-when-cross-origin',
//   keywords: ['rental', 'rent', 'borrow'],
// };

import FAQPage from "@/containers/FaQsPage";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "FAQs page",
//   description: "this is the FAQs page discription",
//   icons: {
//     icon:  '/favicon-32x32.png',
//   },
//   openGraph: {
//     images: '/favicon-32x32.png',
//   },
//   metadataBase: new URL('https://kwe5st.littlebigshed.com.au'),
//   applicationName: 'Little Big Shed',
//   // referrer: 'origin-when-cross-origin',
//   keywords: ['rental', 'rent', 'borrow'],
// };

export default function Blogs(props: { blogs: {} }) {
  const { blogs } = props;
  return (
    <main>
      <BlogsPage blogs={blogs} />
    </main>
  );
}

export const getServerSideProps = async () => {
  try {
    let searchQuery = `offset=${0}&limit=${10}`;
    const { data, status } = await Instance.get(`/blogs?${searchQuery}`);

    console.log(data,"datadatadatadatadatadatadata")
    if (!data?.data) {
      return {
        notFound: true,
      };
    }
    let blogs = data?.data || {};
    return {
      props: { blogs },
    };
  } catch (e) {
    console.log(e,"this is the rrr")
    return {
      notFound: true,
      props: {},
    };
  }
};
