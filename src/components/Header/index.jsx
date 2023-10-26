"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import Burger from "../Burger";
export default function Header() {
  // Let's make a header with a logo to the left and a burger menu to the right.
  // When the user clicks on the burger menu, the header should expand towards the bottom and show a menu on mobile.
  // The menu should contain links to the different pages of the website.
  // When the screen width is larger than 768px, the header should be a vertical sidebar on the left of the screen and the menu should be visible.
  // The header should be sticky.
  // The menu will display the following links: Home, Projects, About, Contact.
  // Let's start now!

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
        className={`flex-col justify-center gap-24 w-full md:flex text-[21px]  ${
          isMenuOpen ? "flex animate-slide-top" : "hidden"
        }`}
      >
        <Link
          onClick={toggleMenu}
          href="/"
          className="flex justify-between content-center gap-10 w-fit px-24 py-10 rounded-xl border-transparent border-[.5px] hover:bg-[#ffffff1c;] hover:border-[#ffffff2b;] hover:scale-105 transition-all "
        >
          <Image
            src="/images/icon-home.svg"
            width={20}
            height={20}
            alt="Home"
          />
          <span className="text-teal-300">Home</span>
        </Link>
        <Link
          onClick={toggleMenu}
          href="/projects"
          className="flex justify-between content-center gap-10 w-fit px-24 py-10 rounded-xl border-transparent border-[.5px] hover:bg-[#ffffff1c;] hover:border-[#ffffff2b;] hover:scale-105 transition-all "
        >
          <Image
            src="/images/icon-project.svg"
            width={20}
            height={20}
            alt="Projects"
          />
          <span className="text-teal-300">Projects</span>
        </Link>
        <Link
          onClick={toggleMenu}
          href="/about"
          className="flex justify-between content-center gap-10 w-fit px-24 py-10 rounded-xl border-transparent border-[.5px] hover:bg-[#ffffff1c;] hover:border-[#ffffff2b;] hover:scale-105 transition-all "
        >
          <Image src="/images/icon-@.svg" width={20} height={20} alt="About" />
          <span className="text-teal-300">About</span>
        </Link>
        <Link
          onClick={toggleMenu}
          href="/contact"
          className="flex justify-between content-center gap-10 w-fit px-24 py-10 rounded-xl border-transparent border-[.5px] hover:bg-[#ffffff1c;] hover:border-[#ffffff2b;] hover:scale-105 transition-all "
        >
          <Image
            src="/images/icon-mail-nav.svg"
            width={20}
            height={20}
            alt="Contact"
          />
          <span className="text-teal-300">Contact</span>
        </Link>
      </nav>
    </header>
  );
}
