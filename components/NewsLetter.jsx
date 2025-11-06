import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 pt-8 pb-14">
      <div className="text-center px-2 mb-12">
        <h2 className="text-3xl font-bold text-text-primary">Subscribe now & get 20% off</h2>
        <div className="flex justify-center mt-2">
          <div className="w-24 h-1 bg-primary"></div>
        </div>
      </div>
      <p className="md:text-base text-text-secondary pb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="flex items-center justify-between max-w-2xl w-full px-2  md:h-14 h-12">
        <input
          className="border border-border-color rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-text-secondary"
          type="text"
          placeholder="Enter your email id"
        />
        <button className="md:px-12 px-8 h-full text-white bg-accent rounded-lg rounded-l-none font-semibold">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
