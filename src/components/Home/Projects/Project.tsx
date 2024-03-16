import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { tabToggleState } from "@/utils/recoil";
import { useRecoilState } from "recoil";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import { ProjectsProps } from "../../../../typings";
import { urlFor } from "../../../../sanity";

const items = ["Next", "Typescript", "Tailwind"];

type Props = {
  flexRow?: string;
  textPosition: string;
  contentPosition: string;
  project: ProjectsProps[];
  idx: number;
};

function Project({
  flexRow,
  textPosition,
  contentPosition,
  project,
  idx,
}: Props) {
  const [index, setIndex] = useRecoilState(tabToggleState);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setIndex(2);
    }
  }, [inView]);

  return (
    <section
      id="hero"
      className="h-[100vh] flex px-48 lg:px-28 smm:px-0 md:items-center justify-center flex-col snap-center"
    >
      <motion.div
        className="space-y-10  items-center md:flex flex-col"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
        ref={ref}
      >
        <div className={`rounded-2xl w-full `}>
          <motion.div
            className={`flex ${flexRow} md:flex-col md:items-center justify-between`}
          >
            <Image
              className="rounded-md object-cover w-[60%] md:w-[80%] xs:w-[90%] h-[50%] grayscale hover:grayscale-0 duration-300 transition"
              src={`${urlFor(project[idx]?.imagesGallery[0])?.url()}`}
              alt="card name"
              width={1000}
              height={1000}
            />
            <div
              className={`flex flex-col justify-center space-y-5  ${textPosition} md:justify-center md:items-center md:text-center`}
            >
              <h1 className="text-2xl font-semibold md:mt-5">
                {project[idx]?.name}
              </h1>
              <p className="font-mono text-sm">{project[idx]?.description}</p>
              <div className="space-y-3 inline-block md:flex md:space-y-0 md:space-x-3">
                {project[idx]?.tech.map((item, index) => (
                  <div
                    key={index}
                    className={`flex group items-center justify-start md:text-center md:justify-center ${contentPosition}`}
                  >
                    <p className="font-mono text-sm text-gray-500 dark:text-gray-400 ">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <Link href={`${project[idx]?.url}`}>
                <FiExternalLink className="text-gray-500 hover:text-black  dark:text-gray-400 dark:hover:text-white transition-all" />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Project;
