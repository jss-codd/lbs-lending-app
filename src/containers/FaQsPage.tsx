"use client";
import Image from "next/image";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React, { useState, useEffect } from "react";
import FAQCards from "@/components/FAQCardComponent";
import Link from "next/link";
import {
  FAQ_Borrower_Data,
  FAQ_General_Data,
  FAQ_Lender_Data,
} from "../assets/marketSelectionData";

export default function FAQPage() {
  const [activeKey, setActiveKey] = useState<string>("general");

  const redirectToApp = (routes: string) => {
    // console.log(`${process.env.NEXT_PUBLIC_APP_REDIRECT_URL + routes}`,"routes")
    return `${process.env.NEXT_PUBLIC_APP_REDIRECT_URL + routes}`;
  };

  return (
    <main className="faq-page">
      <section className="blog-banner blog-align">
        <Image
          className="banner-img"
          src="/faq-banner.jpg"
          height={1900}
          width={1900}
          alt={""}
        />
        <div className="blog-content">
          <h2 className="title_shadow">FAQs for sharing</h2>
          <p>
            Have a question or after more info on lending and borrowing on
            Little Big Shed? Youve come to the right place!
          </p>
          <p>
            If what youre looking for isnt answered below, feel free to Ask a
            Question
          </p>
        </div>
      </section>
      <section className="faq-listing-section">
        <div className="container-fluid">
          <div className="section-head">
            <h2 className="text-white mb-3">
              Protecting our Little Big Shed Users
            </h2>
            <p className="text-white">
              Your safety and security when using our sharing platform is of
              high importance. We want to make sure that you feel comfortable
              and protected when lending and borrowing via our shed. Check out
              the policies below:
            </p>
          </div>
          <div className="faq-tabs red-link">
            <Tabs
              onSelect={(k: any) => setActiveKey(k)}
              defaultActiveKey={activeKey}
              id="uncontrolled-tab-example"
            >
              <Tab eventKey="general" title="General FAQs">
                <div className="container">
                  <div className="row">
                    {FAQ_General_Data.map((question) => {
                      return <FAQCards question={question} key={question.id} />;
                    })}
                  </div>
                </div>
              </Tab>
              <Tab eventKey="lender" title="Lender FAQs">
                <div className="container">
                  <div className="row">
                    {FAQ_Lender_Data.map((question) => {
                      return <FAQCards question={question} key={question.id} />;
                    })}
                  </div>
                </div>
              </Tab>
              <Tab eventKey="borrower" title="Borrower FAQs">
                <div className="container">
                  <div className="row">
                    {FAQ_Borrower_Data.map((question) => {
                      return <FAQCards question={question} key={question.id} />;
                    })}
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="marketing_footer-seaction">
        <div className="container">
          <div className="section-head text-center pb-3">
            <h2 className="text-white">Got A Question Not Answered Here?</h2>
          </div>
          <div className="earning-content text-center">
            <Link className="sign-up-btn theme-btn download-btn" href={redirectToApp("/contact_us")}>
              <span>Ask A Question</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
