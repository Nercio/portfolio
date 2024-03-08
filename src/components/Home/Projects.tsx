import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { openModalState, tabToggleState } from "@/utils/recoil";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Socials } from "./Socials";
import Modal from "../Project";

const data = [
  {
    img: "https://firebasestorage.googleapis.com/v0/b/solid-x-armor.appspot.com/o/img2.jpg?alt=media&token=d23b8a21-ba3d-4396-b505-a067d58c2c90",
    link: "",
    height: "h-[440px]",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/solid-x-armor.appspot.com/o/img3.jpg?alt=media&token=b29164bd-a363-480f-8e31-8820de8ff83f",
    link: "",
    height: "h-[350px]",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/solid-x-armor.appspot.com/o/img1.jpg?alt=media&token=eae32b81-b049-4054-bb0c-95294ee34f12",
    link: "",
    height: "h-96",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/solid-x-armor.appspot.com/o/img2.jpg?alt=media&token=d23b8a21-ba3d-4396-b505-a067d58c2c90",
    link: "",
    height: "h-96",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/solid-x-armor.appspot.com/o/img3.jpg?alt=media&token=b29164bd-a363-480f-8e31-8820de8ff83f",
    link: "",
    height: "h-[500px]",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/solid-x-armor.appspot.com/o/img1.jpg?alt=media&token=eae32b81-b049-4054-bb0c-95294ee34f12",
    link: "",
    height: "h-96",
  },
];

function Projects() {
  const Card = ({
    img,
    click,
    height,
    layoutId,
  }: {
    img: string;
    click: () => void;
    height: string;
    layoutId: number;
  }) => {
    return (
      <div
        className={`rounded-2xl ${height} bg-white/30 dark:bg-white/5  w-full hover:cursor-pointer`}
        onClick={click}
      >
        <motion.div layoutId={`img-${layoutId}`}>
          <Image
            className="rounded-md object-cover w-full h-full"
            src={img}
            alt="card name"
            width={1000}
            height={1000}
          />
        </motion.div>
      </div>
    );
  };
  const [index, setIndex] = useRecoilState(tabToggleState);
  const { ref, inView } = useInView();
  const [opens, setOpens] = useRecoilState(openModalState);

  useEffect(() => {
    if (inView) {
      setIndex(2);
    }
  }, [inView, setIndex]);

  const firstHalf = data.slice(0, Math.ceil(data.length / 2));
  const secondHalf = data.slice(Math.ceil(data.length / 2));

  return (
    <section
      className="px-48 lg:px-28 smm:px-0 pt-[28vh] xs:pt-[18vh]"
      id="projects"
    >
      <section className="space-x-5 flex" ref={ref}>
        <section className="w-full space-y-5">
          {firstHalf.map((card, i) => (
            <Card
              key={i}
              img={card.img}
              click={() => setOpens(true)}
              height={card.height}
              layoutId={i}
            />
          ))}
        </section>
        <section className="w-full space-y-5">
          {secondHalf.map((card, i) => (
            <Card
              key={i}
              img={card.img}
              click={() => setOpens(true)}
              height={card.height}
              layoutId={i + 1}
            />
          ))}
        </section>
      </section>
      {opens && <Modal desc="" img="" link="" name="" layoutId={1} />}
    </section>
  );
}

export default Projects;
