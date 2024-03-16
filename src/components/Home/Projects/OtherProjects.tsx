import { tabToggleState } from "@/utils/recoil";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useRecoilState } from "recoil";
import { ProjectsProps } from "../../../../typings";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { CiFolderOn } from "react-icons/ci";
import { motion } from "framer-motion";

function OtherProjects({ project }: { project: ProjectsProps[] }) {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const items = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.9,
      },
    },
  };
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
      className="h-[100vh] xl:h-full flex px-48 lg:px-28 smm:px-0  md:items-center justify-center flex-col snap-center"
    >
      <motion.section
        className="w-full h-[50%]  grid grid-cols-3 gap-5 xl:grid-cols-2  xl:h-full xl:pt-[18vh] xl:pb-[18vh] mdd:grid-cols-1 md:w-[80%] xs:w-[90%]"
        ref={ref}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {project?.map((item, index) => (
          <Link
            href={`${item?.url}`}
            className="transition-all hover:-translate-y-3"
            key={index}
          >
            <motion.div
              className="w-full h-full xl:h-[370px] mdd:h-[330px] bg-white/50 dark:bg-gray-900 rounded-md p-5 space-y-5 relative"
              variants={items}
            >
              <CiFolderOn
                className="text-gray-500 hover:text-black  dark:text-gray-400 dark:hover:text-white transition-all"
                size={50}
              />
              <h1 className="text-2xl font-semibold md:mt-5">{item.name}</h1>
              <p className="font-mono text-sm">{item?.description}</p>
              <div className="flex flex-row space-x-3">
                {item.tech.map((tech_item, tech_index) => (
                  <div
                    key={tech_index}
                    className={`items-center justify-start md:text-center md:justify-center`}
                  >
                    <p className="font-mono text-sm text-gray-500 dark:text-gray-400 ">
                      {tech_item}
                    </p>
                  </div>
                ))}
              </div>
              <FiExternalLink className=" absolute bottom-7 text-gray-500 hover:text-black  dark:text-gray-400 dark:hover:text-white transition-all" />
            </motion.div>
          </Link>
        ))}
      </motion.section>
    </section>
  );
}

export default OtherProjects;
