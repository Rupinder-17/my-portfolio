import React from "react";
import Link from "next/link";

export const NavBar = () => {
  return (
    <>
      <div className=" sticky top-0 z-50 flex justify-around  bg-amber-300">
        <header>
          <nav className=" ">
            <div className="flex gap-4">
              <Link href="/">Home</Link>
              <Link href="#about">About</Link>
              <Link href="#skills">Skills</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#contact">Contact</Link>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};
