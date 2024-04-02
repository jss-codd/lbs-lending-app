import Image from "next/image";
import Link from "next/link";

export default function LenderProtectionPage() {
  const redirectToApp = (routes: string) => {
    // console.log(`${process.env.NEXT_PUBLIC_APP_REDIRECT_URL + routes}`,"routes")
    return `${process.env.NEXT_PUBLIC_APP_REDIRECT_URL + routes}`;
  };

  return (
    <main className="lender-page">
      <section className="blog-banner blog-align">
        <Image
          className="banner-img"
          src="/lender-protection.jpg"
          height={1900}
          width={1900}
          alt={""}
        />
        <div className="blog-content">
          <h2 className="text-shadow">Lender protection</h2>
          <p className="text-shadow ">
            No worries if your item comes back damaged or is stolen weve got you
            covered!
          </p>

          <p className="text-shadow ">
            Rest assured that when you share your shed on our platform, we have
            your listed items covered against damage during the lending period
            if something goes wrong up to NZ$2000 of cover per item.
          </p>
        </div>
      </section>
      <section className="lender-protection">
        <div className="container">
          <div className="lender-content">
            <div className="section-head pb-3">
              <h2>Are you eligible?</h2>
            </div>
            <p>
              To learn more about our lender protection policy, read this list
              of what is covered and what is not under the policy.
            </p>
            <h5>What is covered</h5>
            <ul>
              <li>
                The cost of repair, replacement or the fair market value of the
                asset. The value of the asset is determined by the price that
                you set on as the items value and the price the asset would sell
                for.
              </li>
              <li>
                Insurance of stolen items - the lender will be covered by up to
                $2,000 if the borrower steals the item. Any item above this
                value is the lender's liability and you will need to consult
                your insurance company.
              </li>
            </ul>
            <h5>What is not covered</h5>
            <ul>
              <li>Damage caused by a breakdown or mechanical fault</li>
              <li>Existing defects, such as corrosion</li>
              <li>
                General wear and tear, which is minor damage that occurs while
                using the item
              </li>
              <li>
                Property or person liability. Little Big Shed is not responsible
                if if any person or property is injured/damaged as a result of
                your equipment during a Little Big Shed borrow
              </li>
              <li>Real estate</li>
              <li>Campervans and motorhomes</li>
              <li>People and services</li>
              <li>
                Anything that is classified as a chemical or dangerous weapon
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="hire-section what-to-do">
        <div className="container ">
          <div className="">
            <div className=" section-head text-center mb-4" >
              <h2 className=" w-50 m-auto  ">
                What To Do If My Item Is Returned Damaged.
              </h2>
              <div className="topbar_description mt-2 discover_sub_title ">
                <p >Now you know what’s covered, learn how to raise a dispute for a damaged or stolen item, by following the four easy steps outlined below.</p>
              </div>

            </div>
            <div className="row g-4 ">
              <div className="col-md-6  col-sm-6 col-12 col-lg-3">
                <div className="hire-card">
                  <div className="hire-card-img-box">
                    <Image height={200}
                  width={200} src="/download (1).png" alt="" />
                  </div>
                  <h3>1. Take photos or videos</h3>
                  <p>
                    Take clear photos or videos of the item(s) on your mobile phone or camera with a timestamp immediately (and no more than 24 hours) before the rental to prove they were in your possession undamaged at that time.
                  </p>
                </div>
              </div>
              <div className="col-md-6  col-sm-6 col-12 col-lg-3">
                <div className="hire-card ">
                  <div className="hire-card-img-box ">
                    <Image height={200}
                  width={200} src="/download (1).png" alt="" />
                  </div>
                  <h3>2.Take photos and videos of the damage on return</h3>
                  <div>
                    <ul className="p-0">
                      <li>Take clear photos or videos on your mobile phone or camera with a timestamp immediately (and no more than 24 hours) after the rental to prove the damage happened during the rental and not during your own subsequent use.</li>
                      <li>
                        In the case of theft, report the incident to the police as soon as reasonably possible, and obtain a crime reference number from them.
                      </li>
                    </ul>

                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 col-lg-3">
                <div className="hire-card ">
                  <div className="hire-card-img-box ">
                    <Image height={200}
                  width={200} src="/download (2).png" alt="" />
                  </div>
                  <h3>3. Raise a dispute</h3>
                  <div>
                    <ul className="p-0">
                      <li>
                        Immediately raise a dispute with the borrower via the chat function seeking compensation for any damage, loss or theft of your items during the rental period.
                      </li>
                      <li>
                        Immediately raise a dispute with Little Big Shed by contacting <a href="mailto:support@littlebigshed.co.nz">support@littlebigshed.co.nz.</a>
                      </li>
                      <li>
                        Do not post on social media, online, or make public information about your claim before the claim process has completed.'
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 col-lg-3">
                <div className="hire-card">
                  <div className="hire-card-img-box ">
                    <Image height={200}
                  width={200} src="/download (2).png" alt="" />
                  </div>
                  <h3>4.Provide documents</h3>
                  <p>
                    Provide Little Big Shed with the appropriate documentation to support the claim. This is included but not limited to:
                  </p>
                  <div>
                    <ul className="p-0">
                      <li> An itemised breakdown of all items that have suffered damage, loss or theft;</li>
                      <li>
                        Evidence of the value when you purchased the items;
                      </li>
                      <li>
                        Serial numbers on item.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
            <div className="btn_container dark_btn  mt-4">
              <a className="down-btn" href='/Policies/LBS_LenderProtectionPolicy.pdf' download={'LBS_LenderProtectionPolicy.pdf'} >Check out our full <u> lender protection policy</u> here.
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marketing_footer-seaction">
        <div className="container">
          <div className="section-head text-center pb-3">
            <h2>Got A Question Not Answered Here?</h2>
          </div>
          <div className="earning-content text-center">
            <Link className="sign-up-btn theme-btn dark_btn" href={redirectToApp("/contact_us")}>
              <span>Ask A Question</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
