import React from "react";
import Link from "next/link";
import Image from "next/image";


const ProductCard = ({ id, title, price, imageURL }) => {
  return (
    <Link href={`/product/${id}`}>
      <div className="m-4 sm:w-60  w-64 flex flex-col justify-center cursor-pointer duration-500 hover:scale-110">
        <div className="h-60 sm:w-60 w-full  rounded-2xl bg-gray-200 ">
          <Image
            alt=""
            width={500}
            height={300}
            src={imageURL}
            className="h-full w-full object-cover rounded-2xl"
          />
        </div>
        <div className="mx-1 my-2">
          <h2 className=" font-montserrat">{title}</h2>
          <p className="font-bold font-montserrat">₹{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
