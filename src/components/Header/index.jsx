"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import Burger from "../Burger";
export default function Header() {
  const links = [
    { href: "/", label: "Home", icon: "icon-home.svg" },
    { href: "/projects", label: "Projects", icon: "icon-project.svg" },
    { href: "/about", label: "About", icon: "icon-@.svg" },
    { href: "mailto:chambet.dev@gmail.com", label: "Contact", icon: "icon-mail-nav.svg" },
    {href: "tel:+336 44 16 77 76", label: "Phone", icon: "icon-phone.svg" }
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <header
      className={`fixed z-[80] top-0 w-full bg-darkgray flex flex-col justify-between items-center gap-24 p-24 transition-all duration-500 group md:flex-col md:w-[200px] md:h-[100vh] md:justify-start animate-top-slide ${
        isMenuOpen ? "h-fit" : "h-[100px]"
      } `}
    >
      <div className="flex flex-row gap-10 md:flex-col justify-between md:justify-center items-center w-full ">
        <Link
          href="/"
          className="block rounded-full overflow-hidden w-fit h-fit"
        >
          <Image
            src="/images/rayan.jpg"
            width={50}
            height={50}
            alt="Rayan Chambet"
          />
        </Link>
        <span className="hidden md:block">Rayan Chambet</span>
        <Burger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
      <nav
        className={`flex-col justify-center gap-24 w-full md:flex text-[21px] transition-all group  ${
          isMenuOpen ? "flex  " : "hidden"
        }`}
      >
        {links.map(({ href, label, icon }) => (
          <Link
            onClick={toggleMenu}
            key={`${href}${label}`}
            href={href}
            className="flex justify-between content-center gap-10 w-fit px-24 py-10 rounded-xl border-transparent border-[.5px] hover:bg-[#ffffff1c;] hover:border-[#ffffff2b;] hover:scale-105 transition-all  "
          >
            <Image src={`/images/${icon}`} width={20} height={20} alt={label} />
            <span >{label}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
