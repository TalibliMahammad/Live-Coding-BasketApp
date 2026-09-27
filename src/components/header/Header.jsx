import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";

export default function Header() {
  return (
    <header className=" w-full">
      <div className="bg-gray-300  h-20 flex justify-between md:px-20 px-5 items-center  shadow-2xl rounded-2xl mx-10 mt-5">
        <span className="md:text-2xl font-bold text-gray-600">
          Shopping Cart
        </span>

        <div className="flex items-center gap-5 ">
          <span className="">
            <Link to="/">
              <IoHome className="text-2xl  relative  z-1 text-gray-600" />
            </Link>
          </span>
          <span className=" ">
            <span className="relative">
              <Link to="/cart">
                {" "}
                <FaShoppingCart className="text-2xl  relative  z-1 text-gray-600" />
              </Link>
              <span className="bg-orange-500 h-5 flex justify-center items-center rounded-full text-[10px] bottom-4  p-1 left-4  z-0 absolute">
                2
              </span>
            </span>
          </span>
        </div>
      </div>
    </header>
  );
}
