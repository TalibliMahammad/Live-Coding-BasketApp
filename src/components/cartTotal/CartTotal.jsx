import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartTotal() {

const {total,totalPiece}= useContext(CartContext)

  return (
    <div>
      <div className="bg-white  shadow-2xl flex flex-col justify-between rounded-2xl  border border-gray-200 h-70 w-[20%]">
        <span className="font-bold text-gray-500  text-2xl p-2">Cart Total</span>

        <span className="flex gap-5 p-2 justify-between flex-col">
          <span className="flex gap-1  justify-between font-bold text-2xl text-gray-500">
            Subtotal: <h2>{total}</h2>
          </span>

          <span className="border-b border-gray-300"></span>
          <span className="flex gap-1  justify-between font-bold text-2xl text-gray-500">
            item: <h2>{totalPiece}</h2>
          </span>

          <span className="border-b border-gray-300"></span>
        </span>

        <span className="flex gap-1  justify-between p-2 font-bold text-2xl text-gray-500">
          Total: <h2>${total}</h2>
        </span>
      </div>
    </div>
  );
}
