import LenderProtectionPage from "@/containers/LenderProtectionPage"
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Lender Protection page",
//   description: "this is the Lender Protection page discription",
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

export default function LenderProtection() {
  return (
    <main className="lender-page">
      <LenderProtectionPage />
    </main>
  );
}
