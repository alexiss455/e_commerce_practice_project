import React from "react";
import { NavLink } from "react-router-dom";
function navitem() {
  return (
    <ul className="max-md:hidden flex flex-row items-center justify-center gap-x-4 text-gray-500">
      <li>
        <NavLink className={`pb-4 relative after:h-[2px] after:bg-orange-400 after:absolute after:left-0 after:bottom-0 after:hover:w-full `} to="/collection">Collection</NavLink>
      </li>
      <li>
        <NavLink className={`pb-4 relative after:h-[2px] after:bg-orange-400 after:absolute after:left-0 after:bottom-0 after:hover:w-full `} to="/men">Men</NavLink>
      </li>
      <li>
        <NavLink className={`pb-4 relative after:h-[2px] after:bg-orange-400 after:absolute after:left-0 after:bottom-0 after:hover:w-full `} to="/women">Women</NavLink>
      </li>
      <li>
        <NavLink className={`pb-4 relative after:h-[2px] after:bg-orange-400 after:absolute after:left-0 after:bottom-0 after:hover:w-full `} to="/about">About</NavLink>
      </li>
      <li>
        <NavLink className={`pb-4 relative after:h-[2px] after:bg-orange-400 after:absolute after:left-0 after:bottom-0 after:hover:w-full `} to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
}

export default navitem;
