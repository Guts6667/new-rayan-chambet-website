import AboutMe from "@/components/(About)/AboutMe";
import Tools from "@/components/(About)/Tools";
import React from "react";

export default function About() {


  return (
    <main className="flex flex-col bg-primary pt-[150px] p-24  md:p-[40px] md:pl-[240px] gap-24">
      <div>
        <h1>Product Manager & Software Engineer</h1>
        <p>Based in Paris</p>
      </div>
      <AboutMe />
      <h2>Tools I use</h2>
        <Tools />
    </main>
  );
}
