"use client";

import Image from "next/image";
import parser from "html-react-parser";
import { howItWorksProcedures, categories } from "@/assets/marketSelectionData";
import LBSStepCard from "@/components/LBSStepCard";
import CategoryCard from "@/components/CategoryCard";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Instance from "@/utils/axios";

interface propsType {
  blog: any;
}
const BlogOverview = ({ blog }: propsType) => {
  //   const history = useHistory()
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
  }
  const redirectToApp = (routes: string) => {
    return `${process.env.NEXT_PUBLIC_APP_REDIRECT_URL + routes}`;
  };

  return (
      <main>
        <div>
          <>
            <section className="founder-bio">
              <div className=" founder-bio-container relative">
                <div className="image-container">
                  <Image
                    className=" "
                    src={`http://dev.littlebigsocial.com/file-uploads?key=${blog.image}`}
                    alt="article"
                    height={200}
                    width={200}
                  />
                </div>

                <div className="content-bio ">
                  <h2 className="text-white title_shadow">
                    {blog.bannerTitle}
                  </h2>
                </div>
              </div>
              <div className="content-bio">
                <div>
                  <h3 className="text-center">{blog.contentTitle}</h3>
                  <div className="red-link">{parser(blog.contentBody)}</div>
                </div>

                {blog.id === 1 && (
                  <div className=" bg-dark">
                    <p className="">How does Little Big Shed work?</p>
                    <p>
                      If you’re starting a DIY project power tools, want to
                      experiment with a new craft creative/hobbies, or borrow
                      hobby equipment sporting to give a new activity a go but
                      don’t want to create waste by buying new, this platform is
                      for you. It’ll help you save money by not buying something
                      that will hardly get used or that you don’t have the
                      storage space for.
                    </p>
                    <div>
                      {howItWorksProcedures.map((step) => (
                        <LBSStepCard step={step} key={step.id} />
                      ))}
                    </div>
                    <p>
                      Plus, we’ve got you covered if something goes wrong, so no
                      worries if your item comes back damaged or is stolen.
                      Check out our{" "}
                      <a style={{ fontWeight: "600" }} href="/#/protection">
                        lender protection
                      </a>{" "}
                      policy to find out more about how you can lend worry-free
                      with our verified Little Big Shed users.
                    </p>
                  </div>
                )}
              </div>
              <div className="d-flex justify-content-center">
                <Link
                  className="btn_container red_btn"
                  href={redirectToApp("/register")}
                >
                  Sign Up To Start Sharing
                  <div className="work-img-btn">
                    <Image
                      height={200}
                      width={200}
                      src="/profile-icon.png"
                      alt="img"
                    />
                  </div>
                </Link>
              </div>
              <section className="discover pt-4 bg-white">
                <div className="container px-5">
                  <div className="text-center mb-3 border-top border-secondary pt-3">
                    <div className="topbar_main_title ">
                      <h2> What can you lend and borrow?</h2>
                    </div>
                    <div className="topbar_description discover_sub_title">
                      <p>
                        As our little shed grows into something big, you’ll be
                        able to lend and borrow all sorts of stuff! Our
                        categories will include listings for:
                      </p>
                    </div>
                  </div>
                  <div className="discover_card_wrapper w-100">
                    <div className="row g-4">
                      {/* {categories.map((category) => (
                        <div key={category.id}>
                          <CategoryCard category={category} categoryCount={""} />
                        </div>
                      ))} */}
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
                  <div className="content-bio">
                    <p>
                      What you have in your little shed can become part of
                      something big – the sharing economy. <br />
                      <br />
                      By making a collective effort to buy less and lend and
                      borrow more, we put less pressure on our planet’s natural
                      resources meaning we can all contribute to protecting the
                      planet. <br />
                      <br />
                      Go on, connect and share with locals like you so we can
                      all care for our place and our planet together!
                    </p>
                  </div>
                </div>
              </section>
            </section>
            <section className="ready-to-borrow-seaction py-4">
              <div className="container">
                <div className="section-head text-center ">
                  <h2 className="text-white">Ready To Start Borrowing?</h2>
                </div>
                <div className="d-flex justify-content-center my-2 mt-3">
                  <Link
                    className="btn_container red_btn"
                    href={redirectToApp("/register")}
                  >
                    Sign Up To Start Sharing
                    <div className="work-img-btn">
                      <Image
                        height={200}
                        width={200}
                        src="/profile-icon.png"
                        alt="img"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </section>
          </>
        </div>
      </main>
  );
};

export default BlogOverview;
