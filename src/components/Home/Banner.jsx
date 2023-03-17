import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      className={`xl:min-h-screen banner-container px-4 py-5 mx-auto md:px-24`}
    >
      <div className="grid grid-cols-1 justify-center items-center">
        <div className="my-20 xl:mt-52 md:w-11/12 lg:w-8/12 xl:w-7/12 text-white">
          <div>
            <h1 className=" text-3xl xl:text-5xl leading-snug font-semibold mb-5">
              Find the perfect <i>freelance</i> services for your business
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
