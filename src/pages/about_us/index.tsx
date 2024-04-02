import { Metadata } from "next";
import AboutUsPage from "@/containers/AboutUsPage";

// export const metadata: Metadata = {
//   title: "about_us page",
//   description: "this is the about_Us page discription",
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

export default function AboutUs() {
  return (
    <main>
      <AboutUsPage />
    </main>
  );
}
