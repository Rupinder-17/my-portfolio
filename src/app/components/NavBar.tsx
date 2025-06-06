"use client";
import React, { useState } from "react";
// import Link from "next/link";
import logo from "@/app/images/namelogo.png"
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import Image from "next/image";
const navItems = [
  {
    name: "Home",
    link: "#home",
  },
  // {
  //   name: "About",
  //   link: "#about",
  // },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Contact",
    link: "#contact",
  },
  {
    name: "Project",
    link: "#projects",
  },
];



export const NavBar1 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 top-0 bg- backdrop-blur-sm border-b border-gray-200 dark:bg-gray-900/95 dark:border-gray-800 shadow-sm">

    <div className="relative w-full  z-50 top-0">
      <Navbar className="sticky  top-0">
        {/* Desktop Navigation */}
        <NavBody>
          {/* <NavbarLogo /> */}
          <Image src={logo} alt=""height={100} width={70} className="rounded-4xl"/>
          
          <NavItems items={navItems} />
          {/* <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="primary">bhbhbh</NavbarButton>
          </div> */}
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

           <MobileNavMenu 
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600  dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
           </MobileNavMenu> 
        </MobileNav>
      </Navbar>
      {/* <DummyContent /> */}

      {/* Navbar */}
    </div>
    </nav>

  );
}



  // return (
  //   <>
  //     <div className=" sticky top-0 z-50 flex justify-around  bg-amber-300">
  //       <header>
  //         <nav className=" ">
  //           <div className="flex gap-4">
  //             <Link href="/">Home</Link>
  //             <Link href="#about">About</Link>
  //             <Link href="#skills">Skills</Link>
  //             <Link href="#projects">Projects</Link>
  //             <Link href="#contact">Contact</Link>
  //           </div>
            
  //         </nav>
  //       </header>
  //     </div>
  //   </>
  // );

