import HeroBanner from "./components/HeroBanner";
import FooterBanner from "./components/FooterBanner";
import ProductCard from "./components/ProductCard";
import Link from "next/link";
import { products, brands } from "./constants";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <div className="lg:mx-24 my-12">
        <div className="mb-12 text-center">
          <h1 className="font-bold text-5xl lg:py-2 font-montserrat">
            Best products
          </h1>
          <p className="font-extralight font-montserrat">
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
          <div className="flex justify-center">
            <Link
              className="mt-5 bg-black-500 rounded-full text-black text-lg px-5 font-oswald border border-black"
              href="/product"
            >
              See More
            </Link>
          </div>
        </div>
      </div>
      <Marquee className="py-3" speed={50} pauseOnHover={true}>
        {brands.map((brand, index) => (
          <div
            key={index}
            className="mx-6 px-6 py-1 group flex justify-center items-center relative border border-gray-300 rounded-md"
          >
            <img
              className="max-h-[90%] m-2 absolute  group-hover:opacity-0 transition-opacity duration-500"
              src={brand.logo}
              alt={brand.name}
            />

            <span className=" text-4xl font-medium font-bigShoulders opacity-0  group-hover:opacity-100 transition-opacity duration-300">
              {brand.name}
            </span>
          </div>
        ))}
      </Marquee>
      <Marquee
        className="py-3"
        speed={50}
        direction="right"
        pauseOnHover={true}
      >
        {brands.map((brand, index) => (
          <div
            key={index}
            className="mx-6 px-6 py-1  group flex justify-center items-center relative border border-gray-300 rounded-md"
          >
            <img
              className="max-h-[90%] m-2 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              src={brand.logo}
              alt={brand.name}
            />

            <span className=" text-4xl font-medium font-bigShoulders   group-hover:opacity-0 transition-opacity duration-300">
              {brand.name}
            </span>
          </div>
        ))}
      </Marquee>

      <FooterBanner />
    </>
  );
}
