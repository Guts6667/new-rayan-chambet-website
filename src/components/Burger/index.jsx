import React from "react";

export default function Burger({ isMenuOpen, toggleMenu }) {
  return (
    <button
      className="w-[50px]  flex flex-col gap-[10px]  relative md:hidden"
      onClick={toggleMenu}
    >
      <div
        className={`w-full h-[1px] bg-white transition-all duration-500 transform ${
          isMenuOpen ? "h-[2px] absolute  rotate-45 translate-y-2" : ""
        }`}
      ></div>
      <div
        className={`w-full h-[1px] bg-white transition-all duration-500 transform ${
          isMenuOpen ? "opacity-0" : ""
        }`}
      ></div>
      <div
        className={`w-full h-[1px] bg-white transition-all duration-500 transform ${
          isMenuOpen ? "h-[2px] absolute  -rotate-45 -translate-y-2" : ""
        }`}
      ></div>
    </button>
  );
}
