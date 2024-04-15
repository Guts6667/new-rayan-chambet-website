"use client";
import React from "react";
import SwiperCore, { Autoplay, Navigation, Effect } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import Link from "next/link";
SwiperCore.use([Autoplay, Navigation, Effect]);

export default function CardSlider() {
  const Images = [
    "/images/saudiexcellence-1.png",
    "/images/mbuzz-1.png",
    "/images/ag-designs-1.png",
    "/images/edge-dynamics-1.png",
    "/images/ac-ventures.png",
    "/images/sciencesco-1.png",
    "/images/Dropper-by-BLOB-Agency-1.png",
  ];

  return (
    <div className=" cursor-grab overflow-hidden flex flex-col min-h-[400px] bg-opacity-2 justify-center  rounded-xl  transition-all duration-600 md:row-span-2 group transition-all duration-400 hover:scale-105">
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
            <div  className="block relative w-full h-full">
              <Image
                src={image}
                alt={"Projects"}
                fill={"responsive"}
                sizes="100%"
                priority
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
        <Link href={"/projects"} className="w-full h-[25%] md:h-full bg-[#111111ba] z-50 absolute bottom-[0px] p-10 flex flex-col justify-center text-center transition-all duration-600 group-hover:bg-[#11111161] group-hover:md:h-[25%]">
          <h3 className="text-[28px]">Featured Projects</h3>
          <p className="text-blue-500">View all</p>
        </Link>
      </Swiper>
    </div>
  );
}
