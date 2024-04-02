"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { teamMembers } from "../assets/marketSelectionData";
import MemberCard from "@/components/MemberCard";


export default function AboutUsPage() {
  const [isBioOpen, setIsBioOpen] = useState(false);

  const redirectToApp = (routes: string) => {
    // console.log(`${process.env.NEXT_PUBLIC_APP_REDIRECT_URL + routes}`,"routes")
    return `${process.env.NEXT_PUBLIC_APP_REDIRECT_URL + routes}`;
  };

  return (
    <main>
      {isBioOpen ? (
        <>
          <section className="founder-bio">
            <div className="founder-bio-image">
              <Image
                className="blog_banner_image"
                src={"/founder.png"}
                alt={"profile"}
                height={200}
                width={200}
              />
            </div>
            <div className="content-bio">
              <h3>Sarmuhabat Singh | Founder</h3>
              <p>
                Social entrepreneur and business lecturer, Sarmuhabat Singh,
                believes that one's success and resources should be shared
                within the community to help support society as a whole. He’s
                currently looking to borrow a pair of hedge clippers to take
                care of a few jobs in the garden.
              </p>
              <p>
                With roots descending from a long line of Punjab farmers,
                Sarmuhabat learnt the importance of cultivating land, growing
                vegetables, and doing things by hand from a young age. Although
                academia never came naturally to him, Sarmuhabat discovered his
                strength and purpose in business and entrepreneurship after
                moving to Australia as an international student.
              </p>
              <p>
                During his Executive MBA research project with RMIT Melbourne,
                Sarmuhabat uncovered the heartbreaking statistics of Australia's
                recycling crises. Research showed that developed countries are
                recycling less than 30% of plastic with only 56% of all
                packaging being recovered and recycled.
              </p>
              <p>There must be something he could do to help.</p>
              <p>
                While unpacking a new lawnmower, an idea came to mind. He
                thought, ‘If we all need to take care of our place, why should
                we all purchase several tools that spend most of their time
                sitting in the shed?’ “The a-ha moment for me came when I
                realised how many of my neighbours were doing the same thing.
                There are some tools you may only need once, and not everyone
                has the means to buy every tool. Many people, including myself,
                hesitate to ask their neighbours if we can share things and help
                each other out.”
              </p>
              <p>
                The solution to our waste crisis is not about bettering our
                recycling system but finding ways to move to zero waste. One way
                is to revitalise the power of sharing.
              </p>
              <p>
                And so Little Big Shed was born – an online platform to share
                tools, equipment, hobby gear and more between neighbours. A
                platform intended to eliminate barriers and enable people to
                connect, share, earn and thrive. Read more about our Little Big
                Shed evolution and global mission in our Founder’s Story blog.
              </p>
              <p>
                Sarmuhabat is currently pursuing his Doctorate in Business
                Administration from the University of Technology Sydney in
                collaboration with the Business Science Institute, Luxembourg
                and Lyon University, France. His research explores the most
                effective government policies required in Victoria to achieve
                the targeted 50% new car sales to be zero-emission vehicles by
                2030.
              </p>
              <p>
                With dedication, courage and integrity, Sarmuhabat has proved
                his abilities in business, management, and leadership levels.
                His diverse business portfolio consists of retail, e-commerce,
                pre-delivery services for automotive retailers and a
                not-for-profit venture that produces and publishes audio books in
                the Punjabi language.
              </p>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="blog-banner blog-align">
            <Image
              className="banner-img"
              src="/about-bg.jpg"
              height={1900}
              width={1900}
              alt={""}
            />
            <div className="blog-content">
              <h2 className="text-shadow ">A little idea, with a big impact</h2>
            </div>
          </section>
          <section className="about-marketing-section">
            <div className="container">
              <div className="about-content">
                <div className="section-head pb-3">
                  <h2>A Way We Can All Be Zero Waste</h2>
                </div>
                <p>
                  Our little idea to create a sharing culture among neighbours
                  is a practical way to reduce waste and support each other.
                </p>
                <p>
                  It’s a shocking reality that developed countries such as New
                  Zealand and Australia recycle less than 30% of plastic – with
                  packaging being the single largest contributor to waste. The
                  fact that big box retailers make stuff so cheap and easy to
                  buy doesn’t help the situation.
                </p>
                <p>What can we do about it?</p>
                <p>
                  Sharing is one of the ways we can all do our bit to help
                  achieve zero waste. Little Big Shed does this by people using
                  stuff only when required. We don’t all need to own the same
                  tools, equipment or hobby gear that spend most of their life
                  sitting in the shed!
                </p>
              </div>
            </div>
          </section>
          <section className="about-share-section">
            <div className="container">
              <div className="row g-4">
                <div className=" col-12 col-lg-4">
                  <div className="img-container">
                    <Image
                      src={"/washing_and_sawing.4407a3a450dbec1c2938.png"}
                      height={600}
                      width={600}
                      alt={""}
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-8">
                  <div className="about-share-content ">
                    <div className="section-head mb-3">
                      <h2>The Power Of Sharing</h2>
                    </div>
                    <div className="red-link">
                    <p>
                      The Power Of Sharing Through buying less, and lending and
                      borrowing more, we can reimagine supply chains and make a
                      collective effort to support sustainable living. Not only
                      does this put less pressure on our planet’s natural
                      resources but, by sharing within our communities, we can
                      remove barriers of social disparity.
                    </p>
                    <p>
                      We believe that no one should be restricted from doing a
                      DIY project, cultivating their talents or going on an
                      adventure due to a lack of resources. By lending and
                      borrowing within our community, everyone can afford to
                      make, mend, learn (and earn). Sharing should be as easy,
                      accessible and beneficial as possible. That’s why we
                      decided to have no platform service fee. We cover the
                      costs for the smooth sailing of our shed so that you can
                      earn more when you do good sharing your stuff.
                    </p>
                    <p>
                      Little Big Shed enables people to connect, share, earn and
                      thrive, for the collective purpose of doing good. Read
                      more about the inspiring evolution of Little Big Shed in
                      our Founder’s Story blog.
                    </p>
                    <p>
                      A LITTLE sharing really can make a BIG difference – for
                      us, our community and the planet. Are you ready to
                      <Link href={redirectToApp("/rent_stuff")}>
                        borrow more,
                      </Link>
                      buy less, and make some extra cash when you
                      <Link href={redirectToApp("/lend_your_stuff")}>
                        lend your stuff?
                      </Link>
                    </p>
                    </div>
                    <div className="pt-3">
                      <button className="btn_container red_btn">
                        <Link href={redirectToApp("/register")}>
                          Sign Up To Start Sharing
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="founder-section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <div className="founder-bio">
                    <div className="section-head">
                      <h2 className="text-white mb-3">
                        Sarmuhabat Singh | Founder
                      </h2>
                    </div>
                    <p className="text-white">
                      Social entrepreneur and business lecturer, Sarmuhabat
                      Singh, believes that one’s success and resources should be
                      shared within the community to help support society as a
                      whole.
                    </p>
                    <div className="pt-3">
                      <button
                        onClick={() => {
                          window.scrollTo(0, 0);
                          setIsBioOpen(true);
                        }}
                        className="theme-btn download-btn"
                      >
                        Read More: Full Bio
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="founder-img">
                    <Image
                      src="/founder.png"
                      height={600}
                      width={600}
                      alt={""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="our-team-section">
            <div className="container px-4">
              <div className="our-team-content">
                <div className="section-head ">
                  <h2 className="text-center mb-3 ">Our Team</h2>
                </div>
                <div className="row g-4">
                  {teamMembers.map((member) => (
                    <div className="col-md-4 " key={member.id}>
                      <MemberCard member={member} keyId={member.id} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="marketing_footer-seaction ">
            <div className="container">
              <div className="section-head text-center pb-3">
                <h2>Ready To Start Earning And Do Good?</h2>
              </div>
              <div className="earning-content text-center">
                <Link
                  className="sign-up-btn theme-btn dark_btn"
                  href={redirectToApp("/register")}
                >
                  <span>Sign Up To Start Sharing</span>
                  <Image src="/avtar.png" height={30} width={30} alt={""} />
                </Link>
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
}
