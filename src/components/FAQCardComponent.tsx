import React from "react";

const FAQCards= ({ question }:any) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="faq-contentbox">
        <h3> {question.title}</h3>
        <div>
        {question.content}
        </div>
      </div>
    </div>
  );
};

export default FAQCards;
