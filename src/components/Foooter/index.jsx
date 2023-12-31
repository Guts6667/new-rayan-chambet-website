import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../button";
export default function Footer() {
  const socials = [
    {
      name: "linkedin",
      icon: "icon-linkedin.svg",
      link: "https://www.linkedin.com/in/rayan-chambet/",
    },
    {
      name: "github",
      icon: "icon-github.svg",
      link: "https://www.linkedin.com/in/rayan-chambet/",
    },
    {
      name: "mail",
      icon: "icon-mail.svg",
      link: "mailto:chambet.dev@gmail.com",
    },
    {
      name: "phone",
      icon: "icon-phone.svg",
      link: "tel:+336 44 16 77 76",
    },
    {
      name: "blob-agency",
      icon: "blob-white.svg",
      link: "https://www.blob-agency.com/",
    },
  ];
  return (
    <footer className="bg-primary p-24 flex flex-col gap-24 md:p-[40px] md:pl-[240px]">
      <h2 className="text-[48px] sm:text-[56px]">Let's work together</h2>
      <p>
        Are you ready to transform your digital journey into an unforgettable
        user experience? Join forces with me, your dedicated Product Manager &
        Software Engineer, and let's create products that captivate, engage, and
        leave a lasting impression.
      </p>
      <Button
        link="https://calendly.com/chambet-dev/30min"
        text="Schedule a consultation"
        icon={"arrow-right.svg"}
        target={"_blank"}
        classBtn={"group bg-teal-400 hover:bg-none hover:bg-black "}
        classImg={"group-hover:rotate-[-45deg] transition-all duration-400"}
      />
      <h3>CONTACT INFOS</h3>
      <div className="grid grid-col md:grid-cols-3 gap-24">
        <div className="flex flex-col gap-24 md:col-span-2">
          <div>
            <p>© 2023 Rayan Chambet. All rights reserved.</p>
            <p>
              Made with{" "}
              <Link href={"https://nextjs.org/"} target="_blank">
                Nextjs
              </Link>
            </p>
            <p>
              Rayan Chambet | Product Manager | Software Engineer | Paris,
              France | chambet.dev@gmail.com
            </p>
          </div>
          <div className="flex gap-24 items-center ">
            {socials.map((social, index) => (
              <Link
                href={social.link}
                key={index}
                target="_blank"
                className=" p-10 rounded-full w-[40px] h-[40px] flex items-center justify-center transition-all hover:scale-105 hover:border hover:border-teal-300"
              >
                <Image
                  src={`/images/${social.icon}`}
                  width={15}
                  height={15}
                  alt={social.name}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-end gap-24">
          <Button
            link="/about"
            text="About"
            icon={"arrow-right.svg"}
            classBtn={"group  bg-black hover:scale-105  "}
            classImg={"group-hover:rotate-[-45deg] transition-all duration-400"}
          />
          <Button
            link="/contact"
            text="Schedule a consultation"
            icon={"arrow-right.svg"}
            classBtn={"group bg-black hover:scale-105 "}
            classImg={"group-hover:rotate-[-45deg] transition-all duration-400"}
          />
        </div>
      </div>
    </footer>
  );
}
