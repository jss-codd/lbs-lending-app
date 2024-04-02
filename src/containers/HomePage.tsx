import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { categories } from "../assets/marketSelectionData";
import Instance from "../utils/axios";
import CategoryCard from "@/components/CategoryCard";

export default function HomePage() {
  const [itemCountByCategories, setItemCountByCategories] = useState([]);

  useEffect(() => {
    getItemCountByCategory();
  }, []);

  const getItemCountByCategory = async () => {
    try {
      const { data } = await Instance.get("/items/count-by-category");
      setItemCountByCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const redirectToApp = (routes: string) => {
    // console.log(`${process.env.NEXT_PUBLIC_APP_REDIRECT_URL + routes}`,"routes")
    return `${process.env.NEXT_PUBLIC_APP_REDIRECT_URL + routes}`;
  };
  console.log("version 1.0")

  return (
    <>
      <main className="main">
        <section className="topbar">
          <div className="container my_container">
            <div className="row g-4">
              <div className="col-md-6  col-12">
                <div className="row g-2">
                  <div className="col-md-12 col-12">
                    <div className=" topbar_main_title">
                      <h2 className="mb-3 pt-5">
                        Your Local Tool, Hobby Gear And Equipment Rental App.
                      </h2>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-12">
                    <div className="topbar_description">
                      <p>
                        {" "}
                        A LITTLE sharing makes a BIG difference – for us, our
                        community, and the planet. That’s why we created Little
                        Big Shed. It’s an online equipment sharing platform to
                        help you{''}
                        <Link
                        className="fw-bold" href={redirectToApp("/rent_stuff")}
                        >borrow more,</Link>buy less, and make some extra cash when you
                        {""}<Link
                          className="fw-bold"
                          href={redirectToApp("/lend_your_stuff")}
                        >
                          lend your stuff.
                        </Link>
                      </p>
                      <p>
                        Plus, when you share on our platform, we take no service
                        fee – which means more money in your back pocket!
                      </p>
                      <p>
                        We believe that no one should be restricted from doing a
                        DIY project, cultivating their talents, or going on an
                        adventure due to a lack of resources. Through the power
                        of sharing{""}
                        <Link
                          className="fw-bold"
                          href={redirectToApp(
                            "/search?category=DIY%20%26%20Garden"
                          )}
                        >
                        tools,
                        </Link>{""}
                        <Link
                          className="fw-bold"
                          href={redirectToApp("/search?category=Other")}
                        >hobby gear,</Link>{""}<Link
                          className="fw-bold"
                          href={redirectToApp(
                            "/search?category=Outdoor%20%26%20Sport"
                          )}
                        >
                        leisure equipment,
                        </Link>and more, we can support each other to make, mend, learn,
                        (and earn!).
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-12">
                    <div className="topbar_description">
                      <p>
                        Our Share Things app is based on people using stuff only
                        when required. This stops us from needing to buy and own more
                        stuff that just ends up cluttering the shed and
                        gathering dust.
                      </p>
                      <p>
                        {" "}
                        By pooling our resources, from lawnmowers and power
                        tools to camping gear and pasta makers, we can make a
                        collective neighborhood effort to reduce waste and put
                        less pressure on our planet's natural resources.
                      </p>
                      <p>
                        {" "}
                        What do you say? Ready to connect with locals like you
                        and help care for your place and our planet together?
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex justify-content-center  pb-5">
                      <Link
                        className="btn_container red_btn"
                        href={redirectToApp("/register")}
                      >
                        Sign up to start sharing
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="topbar-img-container">
                  <Image
                    src="/TopInfoGraphic.png"
                    height={600}
                    width={600}
                    alt={"graphic"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="your_stuff ">
          <div className=" container  ">
            <div className="row g-4">
              <div className="col-md-6 col-12">
                <div className="">
                  <Image
                    className="moving-icon"
                    src="/TopMowing.png"
                    height={500}
                    width={500}
                    alt={"mowing"}
                  />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="pt-5 px-4">
                  <div className="topbar_main_title ">
                    <h2>Share Your Stuff, Earn Cash And Do Good</h2>
                  </div>
                  <div className="topbar-description">
                    <p>
                      Our equipment rental app means that anything you have in
                      your ‘little shed’ (whether that’s a garage, a kitchen
                      drawer, or a cupboard shelf) can become part of something
                      much bigger — the sharing economy. Why not
                      <Link
                        className="ms-1 fw-bold"
                        href={redirectToApp("/lend_your_stuff ")}
                      >
                        lend your stuff
                      </Link>&nbsp;
                      to locals in your area when it is not in use and make some extra
                      cash on the side? Plus, there’s no platform service fee
                      when you share your stuff. We cover the costs for the
                      smooth sailing of our shed so that you get more in your
                      back pocket. We’ll take good care of you too, so you can
                      lend your items worry-free. Check out our
                      <a
                        className="ms-1 fw-bold"
                        href={"/Policies/LBS_LenderProtectionPolicy.pdf"}
                        download="LBS _ Lender Protection Policy.pdf"
                      >
                        lender protection
                      </a>&nbsp;
                      policy to find out more about sharing with our verified
                      users.
                    </p>
                  </div>
                  <div className="your-stuff-btn">
                    <Link
                      className="btn_container red_btn"
                      href={redirectToApp("/lend_your_stuff")}
                    >
                      Lend Your Stuff
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="borrow bg_wall">
          <div className="container my-container  ">
            <div className="row g-4 mb-5 align-items-center">
              <div className="col-md-6 col-12 col-sm-12">
                <div className=" px-4">
                  <div className="topbar_main_title ">
                    <h2>Borrow Items to Learn, Make, and Mend</h2>
                  </div>
                  <div className="topbar-description">
                    <p>
                      Did you know that 80% of the household items we own are used
                      less than once a month?&nbsp;
                      <Link
                        target="_blank"
                        href="https://circulareconomy.europa.eu/platform/sites/default/files/emaf_ce-in-cities-factsheets-products_all_mar19.pdf"
                      >
                        [Circular Economy Report].
                      </Link>
                      &nbsp; You can do your bit to reduce waste by borrowing
                      instead of buying to kick-start your next DIY project or
                      creative experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="">
                  <Image
                    src="/Screenshots.34ff043c3fe464d1c65b.png"
                    height={500}
                    width={500}
                    alt={"mowing"}
                  />
                </div>
              </div>
            </div>
            <div className="row g-4 ">
              <div className=" col-sm-6 col-md-6 col-lg-3 col-12">
                <div className="step_card_container">
                  <div className="step_card_image_box">
                    <Image height={200}
                  width={200} src="/search-icon.png" className="step_card_icon" alt="step card icon" />
                  </div>
                  <h6>1. Explore and Find</h6>
                  <p>
                    Search our little big platform to be matched with neighbors
                    nearby who want to share that item.
                  </p>
                </div>
              </div>
              <div className=" col-sm-6 col-md-6 col-lg-3 col-12 ">
                <div className="step_card_container">
                  <div className="step_card_image_box">
                    <Image height={200}
                  width={200} alt="step card icon" src="/calender-icon.png" className="step_card_icon" />
                  </div>
                  <h6>2. Book and Pay</h6>
                  <p>
                    Create an account to book your first borrow. You’ll
                    receive a notification from the lender once accepted.
                  </p>
                </div>
              </div>
              <div className=" col-sm-6 col-md-6 col-lg-3 col-12">
                <div className="step_card_container">
                  <div className="step_card_image_box">
                    <Image height={200}
                  width={200} alt="step card icon" src="/callout-icon.png" className="step_card_icon" />
                  </div>
                  <h6>3. Collect and Enjoy</h6>
                  <p>
                    Use the app chat to connect and arrange pickup details with
                    the lender. Now you’re ready to make, mend, or explore!
                  </p>
                </div>
              </div>
              <div className=" col-sm-6 col-md-6 col-lg-3 col-12">
                <div className="step_card_container">
                  <div className="step_card_image_box">
                    <Image height={200}
                  width={200} src="/thumb-icon.png" className="step_card_icon" alt="step card icon"/>
                  </div>
                  <h6>4. Return and Rate</h6>
                  <p>
                    Return your borrow when agreed upon and in the same condition you
                    found it. Review your share using our rating system and help
                    Build trust in your hood.
                  </p>
                </div>
              </div>
            </div>
            <div className="search_items_btn  pb-4 text-center">
              <a className="btn_container " href={redirectToApp("/search/?keyword=")}>
                Search Items
              </a>
            </div>
          </div>
        </section>
        <section className="discover ">
          <div className="container px-5">
            <div className="text-center mb-3">
              <div className="topbar_main_title ">
                <h2>Discover Your Next Borrow</h2>
              </div>
              <div className="topbar_description discover_sub_title">
                <p>
                  As our little shed grows into something big, you’ll be able to
                  lend and borrow all sorts of stuff. Some of our popular
                  categories include:
                </p>
              </div>
            </div>
            <div className="discover_card_wrapper">
              <div className="row g-4">
                {categories?.map((category: any) => {
                  return (
                    <Link
                      className="col-sm-6 col-md-4 col-lg-3 col-6"
                      key={category.id}
                      href={redirectToApp(
                        `/search/?keyword=&category=${encodeURIComponent(
                          category?.categorySearchParam
                        )}`
                      )}
                    >
                      <div className="discover_card_container ">
                        <Image
                          src={category.image.src}
                          height={600}
                          width={600}
                          alt=""
                        />
                        <CategoryCard
                          category={category}
                          categoryCount={itemCountByCategories?.find(
                            (itemCountByCategory: any) =>
                              itemCountByCategory.category ===
                              category.itemCountName
                          )}
                        />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
