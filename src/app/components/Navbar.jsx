import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="flex justify-between m-5 mx-10">
          <p className="">
            <a href="/" className="">
              <img src="/assets/logo.png" alt="Logo" className="w-32" />
            </a>
          </p>
          <button className="">
            <Link href="/product">
              <img src="/assets/cart.svg" alt="Cart" className="w-7" />
            </Link>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
