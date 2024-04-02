import HowitworksPage from "@/containers/HowItsWork";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "HowItsWork page",
//   description: "this is the HowItsWork page discription",
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

export default function Howitworks() {
  return (
    <main>
      <HowitworksPage />
    </main>
  );
}
