import React from "react";

function handlecart({handClick, handClick1, count}) {
  
  return (
    <div className="flex bg-gray-100 rounded-md font-bold max-md:w-full">
      <button
        onClick={handClick}
        className=" cursor-pointer py-2 px-4 hover:text-orange-400 duration-500 text-xl  max-md:w-full">
        -
      </button>
      <button className="py-2 px-4 text-xl  max-md:w-full">{count}</button>
      <button
        onClick={handClick1}
        className=" cursor-pointer py-2 px-4 hover:text-orange-400 duration-500 text-xl max-md:w-full" >
        +
      </button>
    </div>
  );
}

export default handlecart;
