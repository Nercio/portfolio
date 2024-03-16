import React, { useEffect } from "react";
import { Socials } from "./Socials";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { tabToggleState } from "@/utils/recoil";
import { useRecoilState } from "recoil";
import { PageInfoProps, SocialsProps } from "../../../typings";

type Props = {
  socials: SocialsProps[];
  pageInfo: PageInfoProps | null;
};

function Hero({ socials, pageInfo }: Props) {
  const [index, setIndex] = useRecoilState(tabToggleState);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setIndex(0);
    }
  }, [inView]);

  return (
    <section
      id="hero"
      className="h-[100vh] flex px-48 lg:px-28 smm:px-0 md:items-center justify-center flex-col"
    >
      <motion.div
        className="space-y-10 items-center md:flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
        ref={ref}
      >
        <h1
          className="font-semibold text-2xl leading-10 md:text-center xs:text-base"
          dangerouslySetInnerHTML={{ __html: pageInfo?.title ?? "" }}
        ></h1>
        <p className="w-[60%] xl:w-[80%] md:text-center md:w-full xs:text-sm font-mono text-sm">
          {pageInfo?.quote}
        </p>

        <Socials socials={socials} />
      </motion.div>
    </section>
  );
}

export default Hero;
