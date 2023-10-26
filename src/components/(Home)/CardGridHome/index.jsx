
import React from "react";
import CardSlider from "../CardSlider";
import ClientSlider from "../ClientsSlider";
export default function CardGridHome() {
  return (
    <div className=" grid  grid-rows-2 grid-cols-1 col-span-1 gap-24 md:grid-cols-2 md:col-span-2">
      <CardSlider />
      <div className="group relative overflow-hidden flex flex-col min-h-[400px] bg-opacity-2 justify-center  rounded-xl  transition-all duration-600 md:row-span-2    bg-gradient-to-br from-rose-400 to-teal-400">
        <ClientSlider />
        <div className=" w-full h-full absolute bottom-[0px] p-10 flex italic group-hover:bg-transparent ">
          <h3>Trusted by 👇</h3>
        </div>
      </div>
    </div>
  );
}
