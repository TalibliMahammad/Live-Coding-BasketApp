import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { TbShoppingCartHeart } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import CartTotal from "../../components/cartTotal/CartTotal";

export default function Cart() {
  const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  return (
    <div className="flex justify-center   ">
      <div className=" mt-10 pt-10 w-[90%]  flex  flex-col relative  gap-10  overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
        {cart.length < 1 ? (
          <span className="text-4xl font-extrabold flex gap-10 text-blue-600 animate-pulse">
            Cart is empty
            <TbShoppingCartHeart className="text-5xl" />
          </span>
        ) : (
          cart.map((product) => (
            <div
              key={product.id}
              className="bg-white  w-[50%] shadow-xl ml-10 border border-gray-200  rounded-2xl justify-evenly items-center gap-10   flex "
            >
              <div className="flex  gap-5 items-center ">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-35 w-60 rounded-2xl object-cover"
                />

                <div className="">
                  <h3 className=" text-md font-semibold text-gray-800">
                    {product.name}
                  </h3>

                  <h3 className=" text-sm  font-light text-gray-800">
                    {product.description}
                  </h3>

                  <p className=" text-xl font-bold text-gray-900">
                    ${product.price}
                  </p>
                </div>
              </div>

              <div className="  flex justify-between w-50  mr-5 rounded-lg bg-orange-500 px-4 py-2 text-white transition ">
                <FaPlus
                  className=" 
             transition-all duration-150  active:scale-70"
                  onClick={() => increaseQuantity(product.id)}
                />
                <FaMinus
                  onClick={() => decreaseQuantity(product.id)}
                  className=" transition-all duration-150 active:scale-70"
                />
              </div>
            </div>
          ))
        )}

        <div className="fixed left-280 w-full">
          <CartTotal />
        </div>
      </div>
    </div>
  );
}
