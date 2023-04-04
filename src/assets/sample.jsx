import React, { useState } from "react";

export default function AddToCart() {
  const [count, setCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const pName = "Fall Limited Edition Sneakers";
  const price = 125;

  function addToCart() {
    if (count > 0) {
      const newItem = { name: pName, price: price, count: count };
        
      setCartCount(cartCount + count);
      setCount(0);
    }
  }

  return (
    <div className="flex items-center">
      <button
        className="bg-orange-400 text-white font-bold py-2 px-4 rounded-l-lg"
        onClick={() => setCount(count > 0 ? count - 1 : 0)}
      >
        -
      </button>
      <span className="mx-2">{count}</span>
      <button
        className="bg-orange-400 text-white font-bold py-2 px-4 rounded-r-lg"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <button
        className="bg-orange-400 text-white font-bold py-2 px-4 ml-4"
        onClick={addToCart}
      >
        Add to Cart
      </button>
      {cartCount > 0 && (
        <div className="ml-4">
          <span className="font-bold">{cartCount}</span>
          <span className="text-gray-500 ml-1">in Cart</span>
        </div>
      )}

      
    </div>
  );
}
