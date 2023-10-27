"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Effect } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
SwiperCore.use([Autoplay, Navigation, Effect]);
export default function Tools() {
  const tools = [
    {
      name: "Figma",
      logo: "figma.svg",
      description:
        "Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows.",
      link: "https://www.figma.com/",
    },
    {
      name: "Notion",
      logo: "notion.svg",
      description:
        "Notion is an application that provides components such as databases, kanban boards, wikis, calendars and reminders. Users can connect these components to create their own systems for knowledge management, note taking, data management, project management, among others.",
      link: "https://www.notion.so/",
    },
    {
      name: "Miro",
      logo: "miro.svg",
      description:
        "Miro is an online collaborative whiteboard platform that enables distributed teams to work effectively together, from running brainstorming sessions and workshops to planning projects, from designing new products and services to facilitating agile ceremonies.",
      link: "https://miro.com/",
    },
    {
      name: "Adobe Photoshop",
      logo: "photoshop.svg",
      description:
        "Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS. It was originally created in 1988 by Thomas and John Knoll. Since then, the software has become the industry standard not only in raster graphics editing, but in digital art as a whole.",
      link: "https://www.adobe.com/products/photoshop.html",
    },
    {
      name: "Adobe Lightroom",
      logo: "lightroom.svg",
      description:
        "Adobe Lightroom is a family of image organization and image manipulation software developed by Adobe Systems for Windows, macOS, iOS, Android, and tvOS. It allows importing/saving, viewing, organizing, tagging, editing, and sharing large numbers of digital images.",
      link: "https://www.adobe.com/products/photoshop-lightroom.html",
    },
  ];

  const languages = [
    {
      name: "React",
      logo: "react.svg",
      description:
        "React is an open-source, front end, JavaScript library for building user interfaces or UI components.",
      link: "https://reactjs.org/",
    },
    {
      name: "Next.js",
      logo: "nextjs.svg",
      description:
        "Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications.",
      link: "https://nextjs.org/",
    },
    {
      name: "JavaScript",
      logo: "javascript.svg",
      description:
        "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.",
      link: "https://www.javascript.com/",
    },
    {
      name: "TypeScript",
      logo: "typescript.svg",
      description:
        "TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "TailwindCSS",
      logo: "tailwind.svg",
      description:
        "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Node.js",
      logo: "nodejs.svg",
      description:
        "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
      link: "https://nodejs.org/en/",
    },
    {
      name: "Express.js",
      logo: "express.svg",
      description:
        "Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License.",
      link: "https://expressjs.com/",
    },
    {
      name: "MongoDB",
      logo: "mongodb.svg",
      description:
        "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
      link: "https://www.mongodb.com/",
    },
    {
      name: "MySQL",
      logo: "mysql.svg",
      description:
        "MySQL is an open-source relational database management system. Its name is a combination of My, the name of co-founder Michael Widenius's daughter, and SQL, the abbreviation for Structured Query Language.",
      link: "https://www.mysql.com/",
    },
    {
      name: "Netlify",
      logo: "netlify.svg",
      description:
        "Netlify is a San Francisco-based cloud computing company that offers hosting and serverless backend services for web applications and static websites.",
      link: "https://www.netlify.com/",
    },
    {
      name: "Vercel",
      logo: "vercel.svg",
      description:
        "Vercel is a cloud platform for static sites and Serverless Functions that fits perfectly with your workflow. It enables developers to host Jamstack websites and web services that deploy instantly, scale automatically, and requires no supervision, all with no configuration.",
      link: "https://vercel.com/",
    },
    {
      name: "GitHub",
      logo: "github.svg",
      description:
        "GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features.",
      link: "https://github.com",
    },
  ];

  return (
    <section className="grid md:grid-cols-2 gap-10">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{
          delay: 200,
          disableOnInteraction: false,
        }}
        className="w-full h-full bg-darkgray rounded-xl transition-all duration-400 hover:scale-105 "
      >
        {tools.map((tool, index) => (
          <SwiperSlide key={index} data-swiper-autoplay="3000">
            <Link
              href={tool.link}
              className="relative grid grid-col gap-10 w-full h-full p-24 "
            >
              <div className=" relative h-[50px] w-[50px]">
                <Image
                  src={`/images/${tool.logo}`}
                  alt={tool.name}
                  fill
                  sizes="100%"
                  priority
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col gap-10">
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
                <p className="text-blue-500">View {tool.name}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{
          delay: 200,
          disableOnInteraction: false,
        }}
        className="w-full h-full bg-darkgray  rounded-xl transition-all duration-400 hover:scale-105 "
      >
        {languages.map((language, index) => (
          <SwiperSlide key={index} data-swiper-autoplay="3000">
            <Link
              href={language.link}
              className="relative grid grid-col  gap-10 w-full h-full p-24 "
            >
              <div className=" relative h-[50px] w-[50px]">
                <Image
                  src={`/images/${language.logo}`}
                  alt={language.name}
                  fill
                  sizes="100%"
                  priority
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-10">
                <h3>{language.name}</h3>
                <p>{language.description}</p>
                <p className="text-blue-500">View {language.name}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
