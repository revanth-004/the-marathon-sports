import Link from "next/link";
import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../constants";

const page = () => {
  return (
    <>
      <div className="lg:mx-24 my-12">
        <div className="mb-12 text-center">
          <h1 className="font-black text-5xl lg:py-2">Best products</h1>
          <p className="font-extralight ">
            speaker There are many variations passages
          </p>
        </div>
        <div className=" flex flex-col justify-center gap-2">
          <div className="flex flex-wrap  justify-center ">
            {products?.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                imageURL={product.imageURL[0]}
              />
            ))}
          </div>
        </div>

        <div className="mb-12 text-center">
          <h1 className="font-black text-5xl lg:py-2">Cricket Bat</h1>
          <p className="font-extralight ">
            speaker There are many variations passages
          </p>
        </div>
        <div className=" flex flex-col justify-center gap-2">
          <div className="flex flex-wrap  justify-center ">
            {products?.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                imageURL={product.imageURL[0]}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
