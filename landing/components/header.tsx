"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import MotionTransition from "./Transition-component";
import { socialNetworks } from "@/data";
import { track } from "@vercel/analytics";

const Header = () => {
  const handleSocialClick = (description: string) => {
    track("click_red_social", { red: description });
  };

  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MotionTransition
      position="bottom"
      className={`fixed top-0 left-0 z-50 w-full px-6 md:px-20 py-4 backdrop-blur-md bg-black/30 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <header className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-row">
          <Image
            src="/logo-mt.png"
            alt="Logo de Mauricio Tognoli"
            width={70}
            height={70}
          />
        </div>

        <div className="flex items-center justify-center gap-6 mt-4 md:mt-0">
          {socialNetworks.map(({ logo, src, description, id }) => (
            <Link
              key={id}
              href={src}
              target="_blank"
              title={description}
              className="transition-all duration-300 hover:text-secondary"
              onClick={() => handleSocialClick(description)}
            >
              {logo}
            </Link>
          ))}
        </div>
      </header>
    </MotionTransition>
  );
};

export default Header;
