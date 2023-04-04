import React, { useEffect, useRef, useState } from "react";
import imges from "../model/model";

function cardimg() {
  // home
  const [tabimg, setimgTab] = useState(0);
  // for lightbox
  const [tabimgs, setimgTabs] = useState(0);
  // state for lightbox
  const [box, setBox] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // -----------------  click document close ---------------
  const wrapperRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        box === true &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        setBox(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [box]);
  // --------------------- home -----------------------
  const next = () => {
    setimgTab((prevTab) => {
      const newIndex = prevTab + 1 >= imges.length ? 0 : prevTab + 1;
      return newIndex;
    });
  };
  const prev = () => {
    setimgTab((prevTab) => {
      const newIndex = prevTab - 1 < 0 ? imges.length - 1 : prevTab - 1;
      return newIndex;
    });
  };
  //------------ for light box -------------
  const nextLight = () => {
    setimgTabs((prevTab) => {
      const newIndex = prevTab + 1 >= imges.length ? 0 : prevTab + 1;
      return newIndex;
    });
  };
  const prevLight = () => {
    setimgTabs((prevTab) => {
      const newIndex = prevTab - 1 < 0 ? imges.length - 1 : prevTab - 1;
      return newIndex;
    });
  };

  // ------------------------ disable click image when it comes 768pixel ------------------
  const handleClick = () => {
    if (!isMobile) {
      setBox((prevBox) => !prevBox);
    }
  };
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col gap-y-8 m-auto max-md:gap-x-8">
      <div className="relative flex items-center">
        <button
          onClick={prev}
          className=" flex items-center justify-center md:hidden active:scale-90 absolute left-[15px] shadow-xl bg-white text-black  rounded-full w-10 h-10 "
        >
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        <button
          onClick={next}
          className=" flex items-center justify-center md:hidden active:scale-90 absolute right-[15px] shadow-xl bg-white text-black rounded-full w-10 h-10 "
        >
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </button>

        <button onClick={handleClick}>
          <img
            src={imges[tabimg].imgs}
            className=" md:rounded-[1rem] w-[430px]"
          />
        </button>
      </div>

      <div className="flex max-md:hidden">
        {imges.map((item, index) => (
          <button
            key={index}
            className={`${item.class} ${
              tabimg === index
                ? "border-[2px] border-orange-400 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-white after:opacity-60"
                : ""
            } overflow-hidden relative rounded-[1rem] bg-orange-400  after:w-full  after:h-full  after:absolute  after:top-0  after:left-0  hover:after:bg-white  hover:after:opacity-60`}
            onClick={() => setimgTab(index)}
          >
            <img
              src={item.img}
              className="object-cover object-center rounded-[1rem] max-w-[80px]  w-full  h-full"
            />
          </button>
        ))}
      </div>
      {/* ligbox content */}
      <div
        className={`${
          box === true ? "" : "hidden"
        } z-[100] absolute min-h-screen min-w-[100vw] flex top-0 left-0 after:w-[100vw] after:h-[100%] after:absolute after:bg-black after:opacity-70`}
      >
        <div
          ref={wrapperRef}
          className="flex flex-col gap-y-8 m-auto max-md:gap-x-8 z-50 relative mt-20"
        >
          <button
            onClick={() => setBox(false)}
            className="active:scale-75 duration-300 text-orange-400 text-5xl absolute font-black -top-[3rem] right-0"
          >
            x
          </button>

          <div className="relative flex items-center">
            <button
              onClick={prevLight}
              className="flex items-center justify-center z-[101] active:scale-90 absolute -left-[20px] shadow-xl bg-white text-black  rounded-full w-10 h-10 "
            >
              <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 1 3 9l8 8"
                  stroke="#1D2026"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
            <button
              onClick={nextLight}
              className="flex items-center justify-center z-50 active:scale-90 absolute -right-[20px] shadow-xl bg-white text-black rounded-full w-10 h-10 "
            >
              <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m2 1 8 8-8 8"
                  stroke="#1D2026"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
            <img
              src={imges[tabimgs].imgs}
              className="rounded-[1rem] w-[530px]"
            />
          </div>

          <div className="flex gap-4 m-auto">
            {imges.map((item, index) => (
              <button
                key={index}
                className={` ${
                  tabimgs === index
                    ? "border-[2px] border-orange-400 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-white after:opacity-60"
                    : ""
                } overflow-hidden relative rounded-[1rem] bg-orange-400  after:w-full  after:h-full  after:absolute  after:top-0  after:left-0  hover:after:bg-white  hover:after:opacity-60`}
                onClick={() => setimgTabs(index)}
              >
                <img
                  src={item.img}
                  className="object-cover object-center rounded-[1rem] max-w-[80px]  w-full  h-full"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default cardimg;
