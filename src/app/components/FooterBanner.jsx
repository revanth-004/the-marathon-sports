import React from "react";
import Button from "./Button";

const FooterBanner = () => {
  return (
    <div className=" ">
      <div className=" rounded-3xl m-3 bg-gray-200 text-black md:flex px-10 py-16 pt-36">
        <div className="w-1/2">
          <p className=" font-light ">20% OFF</p>
          <h1 className="md:text-7xl font-black text-5xl">FINE SMILE</h1>
          <p className="font-light">15 Nov to 7 Dec</p>
        </div>
        <div className="w-1/2">
          <p className="font-light">Beats Solo Air</p>
          <h3 className="md:text-6xl text-4xl font-extrabold ">Summer Sale</h3>
          <p className="font-extralight">
            company that's grown from 270 to 480 employees in the last 12
            months.
          </p>
          <Button text="Shop now" />
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
