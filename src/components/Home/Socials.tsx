import { ThemeProvider, Tooltip } from "@material-tailwind/react";
import Link from "next/link";
import { ReactNode } from "react";
import { SocialsProps } from "../../../typings";
import { SocialIcon } from "react-social-icons";

type Props = {
  socials: SocialsProps[];
};

function Socials({ socials }: Props) {
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
      {socials?.map((item: SocialsProps, index) => (
        <Tip tooltip={item.name} key={index}>
          <Link
            href={item.url}
            className="bg-black dark:bg-light rounded-[4px]"
            target="_blank"
          >
            <SocialIcon
              url={item.url}
              as="div"
              bgColor="transparent"
              fgColor="black"
              className="text-white dark:text-black   "
              style={{
                margin: -5,
              }}
            />
          </Link>
        </Tip>
      ))}
    </section>
  );
}

export { ThemeProvider, Socials };
