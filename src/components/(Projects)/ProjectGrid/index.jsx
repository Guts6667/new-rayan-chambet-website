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

export default function ProjectGrid({ pictures, title, description, link }) {
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
        {pictures.map((picture, index) => (
          <SwiperSlide key={index} data-swiper-autoplay="3000">
            <div className="block relative w-full h-full">
              <Image
                src={`/images/${picture}`}
                alt={title}
                fill
                sizes="100%"
                priority
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
        {link ? (
          <Link
            href={link}
            className="w-full h-[30%]  bg-[#111111ba] z-50 absolute bottom-[0px] p-24 flex  justify-between items-center  transition-all duration-600 "
          >
            <div>
              <h3 className="">{title}</h3>
              <p className="">{description}</p>
            </div>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 20"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:scale-105 group-hover:-rotate-45 transition-all duration-400"
            >
              <path
                d="M23.7067 10.7077L14.707 19.7074C14.5194 19.895 14.2649 20.0005 13.9995 20.0005C13.7342 20.0005 13.4797 19.895 13.2921 19.7074C13.1044 19.5198 12.999 19.2653 12.999 18.9999C12.999 18.7346 13.1044 18.4801 13.2921 18.2925L20.5856 11.0002H0.999967C0.734759 11.0002 0.480414 10.8948 0.292884 10.7073C0.105354 10.5198 0 10.2654 0 10.0002C0 9.73502 0.105354 9.48068 0.292884 9.29315C0.480414 9.10562 0.734759 9.00026 0.999967 9.00026H20.5856L13.2921 1.708C13.1044 1.52037 12.999 1.26588 12.999 1.00052C12.999 0.735168 13.1044 0.480681 13.2921 0.293046C13.4797 0.105412 13.7342 0 13.9995 0C14.2649 0 14.5194 0.105412 14.707 0.293046L23.7067 9.29275C23.7997 9.38562 23.8735 9.49591 23.9238 9.6173C23.9741 9.7387 24 9.86882 24 10.0002C24 10.1316 23.9741 10.2618 23.9238 10.3832C23.8735 10.5046 23.7997 10.6148 23.7067 10.7077Z"
                fill="#2DD4BF"
              />
            </svg>
          </Link>
        ) : (
          <div className="w-full h-[30%] bg-[#111111ba] z-50 absolute bottom-[0px] p-24 flex  flex-col transition-all duration-600 ">
            <h3 className="">{title}</h3>
            <p className="">{description}</p>
          </div>
        )}
      </Swiper>
    </div>
  );
}
