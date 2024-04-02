import BlogsPage from "@/containers/BlogsPage";
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



export default function Blogs() {
  return (
    <main>
      <BlogsPage />
    </main>
  );
}
