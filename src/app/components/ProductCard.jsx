import React from "react";
import Link from "next/link";
import { products } from "../constants";

const ProductCard = ({ id, title, price, imageURL }) => {
  return (
    <Link href={`/product/${id}`}>
      <div className="m-4 sm:w-60  w-64 flex flex-col justify-center cursor-pointer duration-500 hover:scale-110">
        <div className="h-60 sm:w-60 w-full  rounded-2xl bg-gray-200 ">
          <img
            src={imageURL}
            alt=""
            className="h-full w-full object-cover rounded-2xl"
          />
        </div>
        <div className="mx-1">
          <h2 className="font-semibold">{title}</h2>
          <p className="font-black">{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
