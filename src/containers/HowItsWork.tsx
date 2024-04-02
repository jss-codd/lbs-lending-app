import DownloadLink from "@/components/DownloadLink";
import Image from "next/image";
import Link from "next/link";

export default function HowitworksPage() {

  const redirectToApp = (routes: string) => {
    // console.log(`${process.env.NEXT_PUBLIC_APP_REDIRECT_URL + routes}`,"routes")
    return `${process.env.NEXT_PUBLIC_APP_REDIRECT_URL + routes}`;
  };

  return (
    <main>
      <section className="how-it-work-page blog-banner hero_section">
        <Image
          className="banner-img"
          src="/how_it_work.jpg"
          height={1900}
          width={1900}
          alt={""}
        />

        <div className="main_content work_content">
          <h1 className="text-white text-shadow">
            Hire gear for your next adventure or DIY project
          </h1>

          <div className="d-flex">
            <Link className="btn_container red_btn" href={redirectToApp("/register")}>
              Sign Up To Start Sharing
              <div className="work-img-btn">
                <Image height={200}
                  width={200} src="/profile-icon.png" alt="img" />
              </div>
            </Link>
          </div>
          <DownloadLink />
        </div>
      </section>
      <section className="borrow-list-section">
        <div className="container my_container h-100">
          <div className="row align-items-center">
            <div className="col-md-6 col-12 col-lg-6">
              <div className="about-share-content">
                <div className="section-head pb-3">
                  <h2>
                    Borrow Items and Save with our Online Tool Rental Platform
                  </h2>
                </div>
                <p>
                  Starting a DIY project? Want to get creative with a new craft?
                  Keen to give a new activity a go? Look no further, our online
                  tool rental platform is designed for you. By borrowing stuff
                  on Little Big Shed you can:
                </p>
                <div className="borrow-list-container">
                  <ul>
                    <li >
                      Make, mend and learn – without the hefty costs of buying
                      items new or requiring space to store things you hardly use.
                    </li>
                    <li >
                      Support your community – borrowing from your neighbours
                      means that they get to make some money while you get to
                      save. Plus, it’s a great excuse to connect with locals like
                      you and build trust in your hood!
                    </li>
                    <li>
                      Care for the environment – through buying less and borrowing
                      more, demand for products reduces. Sharing helps remove
                      waste out of the whole supply chain before it has the chance
                      to do damage.
                    </li>
                  </ul>
                </div>
                <p>
                  Our hobby gear, equipment and online tool rental app makes it
                  easy to book and borrow items from within your community.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12 col-lg-6">
              <div className="borrow-list-img-container ">
                <Image
                  src={"/LBS_Model_transparent.cd3ca523ca455fd6879d.png"}
                  height={600}
                  width={600}
                  alt={""}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hire-section">
        <div className="container my_container">
          <div className="hire-content">
            <div className="section-head">
              <h2 className="text-center ">
                Here’s how to hire gear from our shared shed:
              </h2>
            </div>
            <div className="row g-4 ">
              <div className="col-md-6  col-sm-6 col-12 col-lg-3">
                <div className="hire-card">
                  <div className="hire-card-img-box">
                    <Image height={200}
                  width={200} src="/download.png" alt="" />
                  </div>
                  <h3>1. Explore and Find</h3>
                  <p>
                    To book your first borrow
                    <Link href={redirectToApp("/register")}>create an account</Link>
                    and follow the steps to verify your identity and payment
                    details. Search for your item on our little big platform via
                    category, location, and price. You can add an item to ‘your
                    favourites’ before requesting a booking to borrow.
                  </p>
                </div>
              </div>
              <div className="col-md-6  col-sm-6 col-12 col-lg-3">
                <div className="hire-card ">
                  <div className="hire-card-img-box ">
                    <Image height={200}
                  width={200} src="/download (1).png" alt="" />
                  </div>
                  <h3>2. Book and Pay</h3>
                  <div>
                    <p>
                      You’ll receive a notification when your booking has been
                      accepted. It’ll automatically be added to your trade
                      dashboard and the full payment deducted from your account.
                    </p>
                  </div>
                  <div>
                    <p>
                      You’ll receive a notification when your booking has been
                      accepted. It’ll automatically be added to your trade
                      dashboard and the full payment deducted from your account.
                      <Link href="/faqs">cancellation policy</Link>
                      section.
                    </p>
                    <p>
                      Use the chat function in the app to ask the lender any
                      questions and arrange handover details.
                    </p>
                    <p>
                      You can choose to have your item delivered and/or picked
                      up from the lender for an additional fee or arrange
                      <Link href={"/lender_protection"}>contactless sharing.</Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 col-lg-3">
                <div className="hire-card ">
                  <div className="hire-card-img-box ">
                    <Image
                      src="/share.f06a519bcd94561fadae8ef8ffe34030.svg"
                      alt=""
                      height={200}
                  width={200}
                    />
                  </div>
                  <h3>3. Collect and Enjoy</h3>
                  <p>Now you’re ready to make, mend or learn!</p>
                  <p>
                    If you’ve arranged to meet the lender in person, it’s a good
                    chance to ask them about any tips/quirks for using the item.
                    When using the item, take care and show respect as if it was
                    your own. If you come across any issues during your borrow,
                    learn
                    <Link href="/faqs">what to do</Link>
                    section about disputes.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 col-lg-3">
                <div className="hire-card">
                  <div className="hire-card-img-box ">
                    <Image height={200}
                  width={200} src="/download (2).png" alt="" />
                  </div>
                  <h3>4. Return and Rate</h3>
                  <p>
                    Once you have returned the item and the lender is happy that
                    it’s still in good condition, they will confirm the share is
                    complete.
                  </p>
                  <p>
                    Help build trust in your neighbourhood by leaving a review
                    about the lender and item via our 5-star rating system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ready-to-borrow-seaction py-4">
        <div className="container">
          <div className="section-head text-center ">
            <h2 className="text-white">Ready To Start Borrowing?</h2>
          </div>
          <div className="d-flex justify-content-center my-2 mt-3">
            <Link className="btn_container red_btn" href={redirectToApp("/register")}>
              Sign Up To Start Sharing
              <div className="work-img-btn">
                <Image height={200}
                  width={200} src="/profile-icon.png" alt="img" />
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="economy-share-section">
        <div className="container my_container h-100">
          <div className="row align-items-center">
            <div className="col-md-6 col-12 col-lg-6">
              <div className="about-share-content">
                <div className="section-head mb-3">
                  <h2>The Sharing Economy Is Growing Fast Globally</h2>
                </div>
                <div>
                <p>
                    We’re sharing more stuff with each other than ever before,
                    peer-to-peer technologies are changing the way we travel,
                    listen to music, work, borrow money and access other
                    people’s tools, hobby or leisure equipment.
                  </p>

                  <p>
                    In 2013 the sharing economy was worth just NZ$22 billion. It
                    is predicted to grow to more that NZ$495 billion by 2025,
                    matching traditional hire/rental models.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 col-lg-6">
              <div className="img-container ">
                <Image
                  src={
                    "/LBS Economy_Stats_transparent.2edfe6f44ea178f71a76.png"
                  }
                  height={600}
                  width={600}
                  alt={""}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-work download-section p-4">
        <div className="download-container">
          <div className="data-wrapper ">
            <div className="data me-4  text-white">
              <h3>Still Have Questions?</h3>
              <p className="text-white">Check out our guide and FAQ’s for more info!</p>
            </div>
          </div>
          <div className="btn_container dark_btn">
            <Link className="down-btn" href="/faqs">
              FAQs for sharing
            </Link>
          </div>
        </div>
      </section>
      <section className="share-your-stuff-section">
        <div className="container my_container">
          <div className="row g-4  align-items-center">
            <div className="col-md-6 col-12 col-lg-6">
              <div className="stuff-img-container ">
                <Image
                  src={"/hiw_surf_people.14b101817277634d3bb9.png"}
                  height={300}
                  width={300}
                  alt={""}
                />
              </div>
            </div>
            <div className="col-md-6 col-12 col-lg-6">
              <div className="about-share-content">
                <div className="section-head mb-3">
                  <h2>Share Your Stuff, Earn Cash And Do Good.</h2>
                </div>
                <div className="pt-3">
                  <button className="btn_container red_btn">
                  <Link href={redirectToApp("/lend_your_stuff")}>
                    Keen to start sharing your stuff?
                  </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
