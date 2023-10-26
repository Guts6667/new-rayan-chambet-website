"use client";
import React from "react";
import SwiperCore, { Autoplay, Navigation, Effect } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import Link from "next/link";
// Install Swiper modules
SwiperCore.use([Autoplay, Navigation, Effect]);

export default function CardSlider() {
  const Images = [
    "/images/mbuzz.png",
    "/images/ag-designs.png",
    "/images/edge-dynamics.png",
    "/images/ac-ventures.png",
    "/images/sciencesco.png",
    "/images/saudiexcellence.png",
  ];

  return (
    <div className=" cursor-pointer overflow-hidden flex flex-col min-h-[400px] bg-opacity-2 justify-center  rounded-xl  transition-all duration-600 md:row-span-2 group transition-all duration-400 hover:scale-105">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{
          delay: 200,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {Images.map((image, index) => (
          <SwiperSlide key={index} data-swiper-autoplay="3000">
            <Link href={"/"} className="block relative w-full h-full">
              <Image
                src={image}
                alt={"Projects"}
                fill={"responsive"}
                sizes="100%"
                priority
                className="object-cover"
              />
            </Link>
          </SwiperSlide>
        ))}
        <div className="w-full h-[25%] md:h-full bg-[#111111ba] z-50 absolute bottom-[0px] p-10 flex flex-col justify-center text-center transition-all duration-600 group-hover:bg-[#11111161] group-hover:md:h-[25%]">
          <h3 className="">Featured Projects</h3>
          <p className="text-blue-500">View all</p>
        </div>
      </Swiper>
    </div>
  );
}
