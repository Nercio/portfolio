import React from "react";
import { Socials } from "./Socials";

function Hero() {
  return (
    <section
      id="hero"
      className="space-y-10  h-[100vh]  flex px-48 lg:px-28 smm:px-0 md:items-center justify-center flex-col"
    >
      <h1 className="font-semibold text-2xl leading-10 md:text-center xs:text-base">
        Olá. <br />
        Chamo-me Nércio Nordino Nhatave. <br />
        Software Developer. <br />
      </h1>
      <p className="w-[60%] xl:w-[80%] md:text-center md:w-[100%] xs:text-sm font-mono text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, dolor
        reprehenderit magni ipsa repudiandae eaque eius quis, doloremque odio
        sapiente veniam veritatis velit unde minus? Distinctio aliquid officia
        eos aperiam.
      </p>
      <Socials />
      {/* <div className="absolute flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-black after:via-black after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div> */}
    </section>
  );
}

export default Hero;
