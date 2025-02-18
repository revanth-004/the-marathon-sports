"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { products, phoneNumber, whatsAppNumber } from "../../constants";
import ProductCard from "../../components/ProductCard";

const page = () => {
  const params = useParams();
  const product_id = params?.product_id as string;
  const product = products.find((p) => p.id === product_id) || products[0];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const handleImageClick = (index: number): void => {
    setSelectedImageIndex(index);
  };

  const [quantity, setQuantity] = useState(1);
  const addQuantity = () => setQuantity((prevQuantity) => prevQuantity + 1);

  const removeQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const whatsAppMessage = `Hi, I'm interested in your product: 
   *${product.title}* 
   Quantity: ${quantity} 
   Total Price: ${parseFloat(product.price) * quantity}`;

  return (
    <>
      <div className="my-10 overflow-x-hidden">
        <div className=" w-full lg:flex px-10 gap-10 ">
          <div className="max-h-[80vh] min-w-[400px] max-w-[500px] ">
            <div className="sm:h-[80%] min-h-[300px] sm:w-full w-[80vw] rounded-2xl ">
              <img
                src={product.imageURL[selectedImageIndex]}
                alt=""
                className="w-[80vw] h-[400px] rounded-2xl object-cover"
              />
            </div>
            <div className="h-[20%] w-full min-w-[80vw] flex overflow-x-scroll">
              {product.imageURL?.map((img, index) => (
                <div
                  key={index}
                  className="h-16 w-16 my-4 mx-2 rounded-md border border-gray-300"
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full rounded-md object-cover"
                    onClick={() => handleImageClick(index)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="max-h-[80vh] w-full ">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <div className="flex mt-2">
              <p className="">{product.rating}</p>
              <p className="">({product.reviews})</p>
            </div>
            <h4 className="font-bold mt-2">Details:</h4>
            <p className="mt-2 ">{product.details}</p>
            <p className="text-3xl font-bold mt-6">₹{product.price}</p>
            <div className="flex gap-4 mt-2">
              <h3 className="text-xl font-bold mt-2">Quantity:</h3>
              <div className="flex items-center">
                <button
                  onClick={removeQuantity}
                  className=" h-10 w-10  text-3xl text-red-400 border border-gray-400"
                >
                  -
                </button>

                <div className="w-16 h-10 flex items-center justify-center border-y border-gray-400 ">
                  <span className="text-xl">{quantity}</span>
                </div>

                <button
                  onClick={addQuantity}
                  className="h-10 w-10 text-3xl font-extralight text-green-500 border border-gray-400"
                >
                  +
                </button>
              </div>
            </div>
            <div className="sm:flex gap-10 my-10">
              <a
                href={`https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(
                  whatsAppMessage
                )}`}
                target="_blank"
              >
                <button className="my-2 sm:w-40 py-2 mx-2 w-64 text-green-500 font-semibold  font-medium border border-[1.5px] border-green-500 flex items-center justify-center gap-2">
                  <img src="/assets/WhatsApp.png" alt="" className="w-5 h-5" />
                  WhatsApp
                </button>
              </a>
              <a href={`tel:${phoneNumber}`}>
                <button className="my-2 sm:w-40 py-2 mx-2 w-64 text-white bg-green-500 font-semibold  font-medium border border-[2px] border-green-500">
                  Call Now
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
      <div className="px-10">
        <h1 className="font-bold text-3xl text-center my-2">
          You May Also Like
        </h1>
        <div className="flex overflow-x-scroll my-10">
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
    </>
  );
};
export default page;
