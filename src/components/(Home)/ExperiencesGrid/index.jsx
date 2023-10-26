"use client";
import React from "react";

export default function ExperiencesGrid() {
  const datasText = [
    {
      title: "40+",
      text: "Completed Projects",
    },
    {
      title: "BLOB-Agency",
      text: "Founder",
    },
    {
      title: "7+",
      text: "Satisfied Clients",
    },

    {
      title: "3+",
      text: "Years of Experience",
    },
  ];
  return (
    <div className="grid grid-col gap-10 col-span-1 text-center md:grid md:grid-cols-2 md:grid-rows-2 md:gap-24">
      {datasText.map((data, index) => (
        <div
          className="bg-darkgray p-24 flex flex-col justify-center rounded-xl"
          key={index}
        >
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </div>
      ))}
    </div>
  );
}
