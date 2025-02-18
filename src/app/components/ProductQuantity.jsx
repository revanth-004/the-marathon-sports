"use client";
import { useState } from "react";

const ProductQuantity = () => {
  const [quantity, setQuantity] = useState(1);
  const addQuantity = () => setQuantity((prevQuantity) => prevQuantity + 1);

  const removeQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
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
  );
};

export default ProductQuantity;
