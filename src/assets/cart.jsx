import React, { useRef, useState, useEffect } from "react";
import imges from "../model/model";
import dete from "../../images/icon-delete.svg";
import carts from "../../images/icon-cart.svg";

function Cart({ className, count }) {
  const [cart, openCart] = useState(false);

  const price = 125;
  const pName = "Fall Limited Edition Sneakers";
  return (
    <div className={`${className}`}>
      <div
        onClick={() => openCart((preVlaue) => !preVlaue)}
        className="relative cursor-pointer active:scale-90"
      >
        <img src={carts} />
        {count === 0 ? null : (
          <span className=" text-[10px] bg-orange-400 text-white px-[6px] rounded-lg absolute left-2 -top-1">
            {count}
          </span>
        )}
      </div>

      <div
        className={`${
          cart === false ? "opacity-0 scale-75" : "scale-100 opacity-100"
        } duration-200 rounded-lg shadow-xl w-full lg:w-64 top-[5rem] right-0 bg-white absolute z-[30] `}
      >
        <h1 className="p-4 font-bold border-b border-gray-200">Cart</h1>

        {count === 0 ? (
          <p className="text-center p-12 text-gray-500">Empty cart</p>
        ) : (
          <div className="p-4">
            <div className="flex  flex-row items-center gap-x-4">
              <img src={imges[0].img} className="w-14 rounded-md" />
              <div className="text-xs text-gray-500 font-semibold">
                <p>{pName}</p>
                <div className="flex justify-between ">
                  <p className="flex gap-1">
                    ${price}.00 x {count}
                    <span className="font-bold text-black">
                      ${price * count}.00
                    </span>
                  </p>
                  <span>
                    <img src={dete} className="active:scale-75" />
                  </span>
                </div>
              </div>
            </div>
            <button className="active:scale-90 duration-500 w-full py-2 bg-orange-400 text-white rounded-lg mt-4">
              Check out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
