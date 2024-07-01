"use client";

import { ThemeProvider, Tooltip } from "@material-tailwind/react";
import Link from "next/link";
import { ReactNode } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SocialsProps } from "../../../typings";

type Props = {
  socials: SocialsProps[];
};

function Socials({ socials }: Props) {
  const Tip = ({
    children,
    tooltip,
    link,
  }: {
    children: ReactNode;
    tooltip: string;
    link: string;
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
        <Link
          href={link}
          className="bg-black dark:bg-light rounded-[4px] p-[5px]"
          target="_blank"
        >
          {children}
        </Link>
      </Tooltip>
    );
  };
  return (
    <section className="flex flex-row space-x-3">
      <Tip tooltip={`${socials[1]?.name}`} link={`${socials[2]?.url}`}>
        <FaGithub size={25} className="text-white dark:text-black" />
      </Tip>
      <Tip tooltip={`${socials[0]?.name}`} link={`${socials[1]?.url}`}>
        <FaLinkedinIn size={25} className="text-white dark:text-black" />
      </Tip>
    </section>
  );
}

export { ThemeProvider, Socials };
