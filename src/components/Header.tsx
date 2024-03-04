import Link from "next/link";
import React from "react";

function Header() {
  const Btn = ({ name, link }: { name: string; link: string }) => {
    return (
      <Link href={link} className="group flex flex-col items-center">
        <p className="font-mono text-sm">{name}</p>
        <div className="w-1 h-1 dark:bg-white bg-black  mt-1 rounded-full  invisible group-hover:visible " />
      </Link>
    );
  };
  return (
    <section className="flex flex-row w-full px-48 lg:px-28 md:flex-col pt-20  justify-between  md:items-center md:space-y-10 fixed left-0 top-0   bg-gradient-to-b from-zinc-200 pb-6  backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/10 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      <p className="font-mono text-sm">NNN</p>
      <nav className="flex  md:justify-center">
        <Btn name="Home/" link="" />
        <Btn name="Skills/" link="#skills" />
        <Btn name="Projects/" link="#projects" />
        <Btn name="Contact" link="#contact" />
      </nav>
    </section>
  );
}

export default Header;
