import React from "react";
import carts from "../../images/icon-cart.svg";

function addtocartBTN({ val }) {
  return (
    <button
      onClick={val}
      className="active:scale-90 duration-300 cursor-pointer flex gap-x-4 py-3 font-bold justify-center bg-orange-400 rounded-md w-full hover:text-white relative after:w-full after:h-full after:absolute hover:after:bg-white after:opacity-20 after:top-0 overflow-hidden after:duration-300"
    >
      <img src={carts} />
      Add to cart
    </button>
  );
}

export default addtocartBTN;
