"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CardSlider from "../CardSlider";
export default function CardGridHome() {
  const Images = [
    "projects-3.png",
    "clients.png",
    "projects-3.png",
    "clients.png",
    "projects-3.png",
    "clients.png",
  ];
  // We want to take the block below and modify it so it renders the images in the array above in an infinite loop sliding from right to left.
  // Loop through the array and render the images in the array
  // The images should be constantly sliding from right to left
  // Let's start with 2 images and then we can add more

  return (
    <div className=" grid  grid-rows-2 grid-cols-1 col-span-1 gap-24 md:grid-cols-2 md:col-span-2">
      {/* <Link
        href={"/portfolio"}
        className="relative overflow-hidden bg-slate-100 flex flex-col justify-center rounded-xl md:row-span-2 transition-all duration-600  group hover:scale-105 hover:bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-green-300 to-purple-400"
      >
        <Image
          src={"/images/projects-3.png"}
          alt={"Projects"}
          fill={"responsive"}
          objectFit="cover"
          priority
        />
        <div className="w-full h-full bg-[#111111ba] absolute bottom-[0px] p-10 flex flex-col justify-center text-center transition-all duration-600 group-hover:bg-[#11111161]">
          <h3 className="">Featured Projects</h3>
          <p className="text-blue-500">View all</p>
        </div>
      </Link> */}

      <CardSlider />

      <div className="group relative overflow-hidden flex flex-col min-h-[400px] bg-opacity-2 justify-center  rounded-xl  transition-all duration-600 md:row-span-2    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400 via-green-300 to-purple-400">
        <Image
          src={"/images/clients.png"}
          alt={"Projects"}
          fill={true}
          sizes="100%"
          priority
          className="object-cover"
        />
        <div className=" w-full h-full absolute bottom-[0px] p-10 flex italic group-hover:bg-transparent ">
          <h3>Trusted by 👇</h3>
        </div>
      </div>
    </div>
  );
}
