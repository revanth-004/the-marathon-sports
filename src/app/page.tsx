import HeroBanner from "./components/HeroBanner";
import FooterBanner from "./components/FooterBanner";
import ProductCard from "./components/ProductCard";
import Link from "next/link";
import { products } from "./constants";

export default function Home() {
  return (
    <>
      <HeroBanner />
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
          <div className="flex justify-center">
            <Link
              className="bg-red-500 rounded-lg text-white px-4 py-1 font-bold"
              href="/product"
            >
              See More
            </Link>
          </div>
        </div>
      </div>
      <FooterBanner />
    </>
  );
}
