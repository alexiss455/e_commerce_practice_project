import Navitem from "./navitem";
import Avatar from "./avatar";
import Cart from "./cart";
import Burger from "./burger";
import { useState } from "react";
function header({count,setCount}) {
  const [open, setOpen] = useState(false)
  return (
    <header className="max-w-7xl mx-auto max-md:px-6 bg-white flex items-center justify-between h-24 border-b fixed w-[100vw] z-[100] right-0 left-0 ">
      <div className=" flex items-center justify-center gap-x-10">
      <Burger 
        openNav={() => setOpen(prev => !prev ) 
        }
        className={`${open === true ? "rotate-45 translate-y-1.5 " : ""}`}
        className2={`${open === true ? "opacity-0" : ""}`}
        className3={`${open === true ? "-rotate-45 -translate-y-1.5" : ""}`}
      />
        <h1 className="text-3xl font-bold">sneakers</h1>
        <Navitem 
          className={`${open === true ? "max-md:left-0" : "max-md:-left-full"}`}
        />
      </div>
      <div className="flex flex-row items-center justify-center gap-x-10">
        <Cart 
          count={count}
          setCount={setCount} 
        />
        <Avatar />
      </div>
    </header>
  );
}


export default header;
