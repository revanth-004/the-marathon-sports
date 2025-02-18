import React from "react";

const page = () => {
  return (
    <>
      <div className="">
        <h6 className="font-medium mx-4 my-2 gap-4">
          <span>⬅️</span>
          Your Cart
          <span className="">(1 items)</span>
        </h6>
        <div className="m-2 p-4">
          <div className="px-2 py-4 flex gap-8">
            <div className="rounded-2xl h-28 w-28 bg-slate-200">📷</div>
            <div className=" gap-6 ">
              <div className="flex gap-4">
                <h4 className="font-bold text-xl">boAt Rockerz 451</h4>
                <h4 className="font-bold">$49</h4>
              </div>
              <div className="">count++</div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="">
            <h4 className="">Subtotal:</h4>
            <h4 className="$49"></h4>
          </div>
          <button className="">Request on whatsapp</button>
        </div>
      </div>
    </>
  );
};

export default page;
