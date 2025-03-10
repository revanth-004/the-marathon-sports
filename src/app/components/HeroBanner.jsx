import React from "react";
import Button from "./Button";

const HeroBanner = () => {
  return (
    <div className="">
      <div className="lg:h-[80vh] h-[70vh] bg-gradient-to-b from-gray-200 to-gray-200 rounded-3xl m-3 p-5 sm:flex">
        <div className="">
          <h1 className="text-8xl text-black font-bigShoulders ">
            The Marathan Sports
          </h1>
          <Button text="Shop now" />
        </div>
        <div className="p-4 relative w-full flex justify-center items-center"></div>
      </div>
    </div>
  );
};

export default HeroBanner;
