import Link from "next/link";
import React from "react";
import MotionTransition from "./Transition-component";
import { socialNetworks } from "@/data";

const Header = () => {
  return (
    <MotionTransition
      position="bottom"
      className=" z-40 inline-block w-full mt-10 t-5 md:t-10 px-20"
    >
      <header>
        <div className=" container justify-between max-w-6xl mx-auto md:flex">
          <Link href="/">
            <h1 className="my-3 text-4xl font-bold text-center md:text-left">
              Mauricio <br className="md:hidden" />
              <span className="text-secondary">Tognoli</span>
            </h1>
          </Link>
          <div className="flex items-center justify-center gap-7">
            {socialNetworks.map(({ logo, src, id }) => (
              <Link
                key={id}
                href={src}
                target="_blank"
                className="transition-all duration-300 hover:text-violet-800"
              >
                {logo}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </MotionTransition>
  );
};

export default Header;
