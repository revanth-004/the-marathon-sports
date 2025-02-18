import React from "react";

const HeroBanner = () => {
  return (
    <div className="">
      <div className="lg:h-[80vh] h-[70vh] bg-gradient-to-b from-gray-200 to-gray-200 rounded-3xl m-3 p-5 sm:flex">
        <div className="">
          <h1 className="text-8xl text-black font-bigShoulders ">
            The Marathan Sports
          </h1>
          <button className="mt-5 bg-black-500 rounded-full text-black px-4  font-oswald  border border-black">
            Shop now
          </button>
        </div>
        <div className="p-4 relative w-full flex justify-center items-center">
          <img
            src="/assets/icon.png"
            alt="Background"
            className="h-28 sm:h-[80%]  object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
