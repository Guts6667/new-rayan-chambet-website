import React from "react";

export default function ClientSlider() {
  const words = [
    " ",
    "A.C. VENTURES",
    "SAUDI EXCELLENCE CO",
    "A.G. DESIGNS",
    "SARAH ROI",
    "EDGE DYNAMICS",
    "MBUZZ",
    "SCIENCES CO",
    "Dropper by EDMC",
    "ZNOJMO FK",
    "EDMC Network",
  ];

  return (
    <div className="w-full flex flex-col  overflow-hidden  font-semibold ">
      <div className="flex inline-flex flex-nowrap overflow-hidden">
        <ul className="flex items-center justify-center gap-24 md:justify-start [&_li]:mx-8 animate-infinite-scroll  ">
          {words.map((word, index) => {
            return (
              <li key={index} className="w-max text-[48px] ">
                {word}
              </li>
            );
          })}
        </ul>
        <ul className="flex items-center justify-center gap-24 md:justify-start [&_li]:mx-8 animate-infinite-scroll">
          {words.map((word, index) => {
            return (
              <li key={index} className="w-max text-[48px] ">
                {word}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex inline-flex flex-nowrap overflow-hidden">
        <ul
          className="  flex items-center justify-center gap-24 md:justify-start [&_li]:mx-8 animate-infinite-scroll-reverse"
          aria-hidden="true"
        >
          {words.map((word, index) => {
            return (
              <li key={index} className="w-max text-[48px] ">
                {word}
              </li>
            );
          })}
        </ul>
        <ul
          className="  flex items-center justify-center gap-24 md:justify-start [&_li]:mx-8 animate-infinite-scroll-reverse"
          aria-hidden="true"
        >
          {words.map((word, index) => {
            return (
              <li key={index} className="w-max text-[48px] ]">
                {word}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex inline-flex flex-nowrap overflow-hidden">
        <ul className="flex items-center justify-center gap-24 md:justify-start [&_li]:mx-8 animate-infinite-scroll">
          {words.map((word, index) => {
            return (
              <li key={index} className="w-max text-[48px] ">
                {word}
              </li>
            );
          })}
        </ul>
        <ul className="flex items-center justify-center gap-24 md:justify-start [&_li]:mx-8 animate-infinite-scroll">
          {words.map((word, index) => {
            return (
              <li key={index} className="w-max text-[48px] ">
                {word}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex inline-flex flex-nowrap overflow-hidden">
        <ul
          className="  flex items-center justify-center gap-24 md:justify-start [&_li]:mx-8 animate-infinite-scroll-reverse "
          aria-hidden="true"
        >
          {words.map((word, index) => {
            return (
              <li key={index} className="w-max text-[48px] ">
                {word}
              </li>
            );
          })}
        </ul>
        <ul
          className="  flex items-center justify-center gap-24 md:justify-start [&_li]:mx-8 animate-infinite-scroll-reverse"
          aria-hidden="true"
        >
          {words.map((word, index) => {
            return (
              <li key={index} className="w-max text-[48px] ]">
                {word}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
