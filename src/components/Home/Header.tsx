import { tabToggleState } from "@/utils/recoil";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";

function Header() {
  const [index, setIndex] = useRecoilState(tabToggleState);
  const div = () => {
    return (
      <div className="w-1 h-1 dark:bg-white bg-black mt-[6px] rounded-full" />
    );
  };
  const Btn = ({ name, link }: { name: string; link: string }) => {
    return (
      <Link href={link} className="flex flex-col items-center">
        <p className="font-mono text-sm">{name}</p>
        {index === 1 && link.includes("#skills") && div()}
        {index === 2 && link.includes("#projects") && div()}
        {index === 3 && link.includes("#contact") && div()}
      </Link>
    );
  };
  return (
    <motion.section
      className="flex z-20 flex-row w-full px-48 lg:px-28 md:flex-col pt-16  justify-between  md:items-center md:space-y-5 fixed left-0 top-0   bg-gradient-to-b from-zinc-200 pb-6  backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/10 dark:from-inherit md:pb-3 md:pt-5 md:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeOut",
        duration: 0.5,
      }}
    >
      <Btn name="NNN" link="#hero" />

      <motion.nav className="flex  md:justify-center">
        <Btn name="Skills/" link="#skills" />
        <Btn name="Projectos/" link="#projects" />
        <Btn name="Contacto" link="#contact" />
      </motion.nav>
    </motion.section>
  );
}

export default Header;
