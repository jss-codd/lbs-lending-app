import HomePage from "@/containers/HomePage";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import DownloadLink from "@/components/DownloadLink";

// export const metadata: Metadata = {
//   title: "Home page",
//   description: "Let’s share stuff and do good Buy less, lend and borrow more. Care for your place and our planet together",
  
//   icons: {
//     icon: "/favicon-32x32.png",
//   },
//   openGraph: {
//     images: "/favicon-32x32.png",
//   },
//   metadataBase: new URL("https://kwe5st.littlebigshed.com.au"),
//   applicationName: "Little Big Shed",
//   keywords: ["rental", "rent", "borrow"],
// };
const redirectToApp = (routes: string) => {
  // console.log(`${process.env.NEXT_PUBLIC_APP_REDIRECT_URL + routes}`,"routes")
  return `${process.env.NEXT_PUBLIC_APP_REDIRECT_URL + routes}`;
};
export default function Home() {
  return (
    <>
      <main className="main">
      <section className="blog-banner hero_section">
          <Image
            className="banner-img"
            src="/HOME_oneshot.jpg"
            height={1900}
            width={1900}
            alt={""}
          />
          <div className="main_content">
            <h1>Let’s share stuff and do good.</h1>
            <p>
              Buy less, lend and borrow more. Care for your place and our planet
              together.
            </p>
            <div className="d-flex flex-wrap">
              <Link
                className="btn_container dark_btn"
                href={redirectToApp("/rent_stuff")}
                rel='canonical'
              >
                Want To Rent Stuff?
              </Link>
              <Link
                className="btn_container red_btn"
                href={redirectToApp("/lend_your_stuff")}
              >
                Have Stuff To Lend?
              </Link>
            </div>
            <DownloadLink/>
          </div>
        </section>
        <HomePage />
      </main>
    </>
  );
}
