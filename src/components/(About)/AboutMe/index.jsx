import React from "react";
import Image from "next/image";
export default function AboutMe() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-24">
      <div className="col-span-1 ">
        <p className="[&>em]:text-teal-400 [&>em]:not-italic">
          As a <em>Product Manager</em> rooted in a{" "}
          <em>Software Engineering</em> background, I offer a practical blend of
          technical know-how and strategic insight to each project. I value
          teamwork and focus on effective <em>problem-solving</em>, aiming to
          foster connections that drive meaningful business growth.
          Detail-oriented and dedicated to delivering valuable digital
          experiences, my goal is to consistently meet and exceed client
          expectations.
          <br /> <br />
          Continuously learning and adapting to industry changes, I enjoy
          crafting <em>user-friendly</em> solutions that resonate with
          audiences. My experience in the tech industry has taught me to tackle
          challenges head-on, transforming them into opportunities for progress.
          Committed to staying updated with the latest trends, I aim to
          contribute to <em>innovation</em> and make a genuine impact in the
          digital sphere."
          <br /> <br />
          In my free time, I find joy in the challenges of <em>
            boxing
          </em> and <em>bouldering</em>, channeling my passion for physical and
          mental strength. I also nurture a deep love for <em>writing</em>,
          stemming from my previous role as a Narrative Designer. With a diverse
          background that includes stints as a bartender, sous chef, and
          photographer,{" "}
          <em>
            I bring a rich tapestry of experiences that shape my approach to
            problem-solving and creativity.
          </em>
        </p>
      </div>
      <div className=" col-span-1 relative overflow-hidden min-h-[300px] md:min-h-[400px] h-full w-full rounded-xl ">
        <Image
          src="/images/rayan.jpg"
          fill={"responsive"}
          sizes="100%"
          priority
          alt="Rayan Chambet"
          className="object-cover"
        />
      </div>
    </section>
  );
}
