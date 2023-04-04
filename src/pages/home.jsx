import React, { useState } from "react";
import Cardimg from "../assets/cardimg";
import Handlecart from "../assets/handlecart";
import AddtocartBTN from "../assets/addtocartBTN";

export default function home({ count, setCount, setStore }) {
  const pName = "Fall Limited Edition Sneakers";
  const desc = `These low-profile sneakers are your perfect casual wear companion.
  Featuring a durable rubber outer sole, they’ll withstand everything
  the weather can offer.`;
  const price = 125;

  return (
    <div className="grid md:grid-cols-2 h-full gap-x-12 py-12">
      <Cardimg />
      <div className="max-w-[420px] md:mr-auto md:my-auto max-md:m-auto max-md:pt-12 max-md:px-6">
        <div>
          <p className="text-orange-400 text-sm tracking-widest">
            SNEAKERS COMPANY
          </p>
          <h1 className="text-4xl font-bold mt-4">{pName}</h1>
          <p className="text-sm text-gray-500 mt-8">{desc}</p>
          <div className="flex items-center gap-x-6 mt-4">
            <h1 className="text-2xl font-bold">${price}.00</h1>
            <h1 className="font-bold p-1 bg-orange-200 bg-opacity-40 text-orange-600 rounded-lg text-sm">
              50%
            </h1>
          </div>
          <p className="text-sm text-gray-400 mt-[.25rem] line-through">
            $250.00
          </p>
          <div className="flex items-center flex-row mt-8 gap-x-8 gap-y-4 max-md:flex-col">
            <Handlecart
              handClick1={() => setCount((count) => count + 1)}
              handClick={() => setCount((count) => (count > 0 ? count - 1 : 0))}
              count={count}
            />
            <AddtocartBTN
              val={() => {
                setStore(count);
                setCount(0);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
