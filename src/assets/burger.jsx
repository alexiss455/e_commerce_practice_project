import React from "react";

function burger({ openNav,className,className2,className3 }) {
  return (
    <div onClick={openNav} className="flex flex-col gap-y-[3px] z-50 md:hidden">
      <div className={`${className} duration-300 w-[30px] h-[3px] rounded-xl bg-black`}></div>
      <div className={`${className2} duration-300 w-[30px] h-[3px] rounded-xl bg-black`}></div>
      <div className={`${className3} duration-300 w-[30px] h-[3px] rounded-xl bg-black`}></div>
    </div>
  );
} 

export default burger;
