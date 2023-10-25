import React from "react";
import Link from "next/link";
export default function HomeMain() {
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
    <div className="grid grid-cols-1  col-span-2 gap-[24px] md:grid-cols-2">
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

      <div className=" grid gap-10 hover:bg-white ">
        <Link
          href="/contact"
          className="bg-darkgray p-24 col-span-1 justify-center flex flex-col gap-10 rounded-xl transition-all duration-400   hover:scale-105 hover:bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-green-300 to-purple-400"
        >
          <h2>Your Trusted Blob Partner</h2>
          <p>
            With a genuine commitment to collaboration, I strive to bridge the
            gap between design and development. Leveraging my expertise and
            dedication, I bring your vision to life with attention to detail and
            a deep understanding of your unique needs.
          </p>
          Let's Talk
        </Link>
      </div>
    </div>
  );
}
