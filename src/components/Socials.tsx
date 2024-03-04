"use client";

import { ThemeProvider, Tooltip } from "@material-tailwind/react";
import Link from "next/link";
import { ReactNode } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Socials() {
  const Tip = ({
    children,
    tooltip,
  }: {
    children: ReactNode;
    tooltip: string;
  }) => {
    return (
      <Tooltip
        className="bg-transparent"
        content={
          <div className="dark:bg-light bg-black mt-2 p-2 rounded-md">
            <p className="text-white font-semibold text-xs dark:text-black">
              {tooltip}
            </p>
          </div>
        }
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: -25 },
        }}
        placement="bottom"
      >
        {children}
      </Tooltip>
    );
  };
  return (
    <section className="flex flex-row space-x-3">
      <Tip tooltip="Github">
        <Link
          href={""}
          className="bg-black dark:bg-light rounded-[4px] p-[5px]"
        >
          <FaGithub size={25} className="text-white dark:text-black" />
        </Link>
      </Tip>
      <Tip tooltip="Twitter">
        <Link
          href={""}
          className="bg-black dark:bg-light rounded-[4px] p-[5px]"
        >
          <FaTwitter size={25} className="text-white dark:text-black" />
        </Link>
      </Tip>
      <Tip tooltip="Instagram">
        <Link
          href={""}
          className="bg-black dark:bg-light rounded-[4px] p-[5px]"
        >
          <FaInstagram size={25} className="text-white dark:text-black" />
        </Link>
      </Tip>
      <Tip tooltip="LinkedIn">
        <Link
          href={""}
          className="bg-black dark:bg-light rounded-[4px] p-[5px]"
        >
          <FaLinkedinIn size={25} className="text-white dark:text-black" />
        </Link>
      </Tip>
    </section>
  );
}

export { ThemeProvider, Socials };
