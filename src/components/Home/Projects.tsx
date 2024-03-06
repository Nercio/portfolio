import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { tabToggleState } from "@/utils/recoil";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Socials } from "./Socials";

const dataLeft = [
  {
    img: "https://firebasestorage.googleapis.com/v0/b/solid-x-armor.appspot.com/o/img2.jpg?alt=media&token=d23b8a21-ba3d-4396-b505-a067d58c2c90",
    link: "",
    height: "bg-gradient-to-br from-slate-300 to-pink-700 h-[440px]",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/solid-x-armor.appspot.com/o/img3.jpg?alt=media&token=b29164bd-a363-480f-8e31-8820de8ff83f",
    link: "",
    height: "bg-gradient-to-br from-amber-600 to-indigo-900 h-[350px]",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/solid-x-armor.appspot.com/o/img1.jpg?alt=media&token=eae32b81-b049-4054-bb0c-95294ee34f12",
    link: "",
    height: "bg-gradient-to-r from-blue-300 to-emerald-300 h-96",
  },
];

const dataRight = [
  {
    img: "https://firebasestorage.googleapis.com/v0/b/solid-x-armor.appspot.com/o/img2.jpg?alt=media&token=d23b8a21-ba3d-4396-b505-a067d58c2c90",
    link: "",
    height: "bg-gradient-to-tr from-green-800 to-amber-200 h-96",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/solid-x-armor.appspot.com/o/img3.jpg?alt=media&token=b29164bd-a363-480f-8e31-8820de8ff83f",
    link: "",
    height: "bg-gradient-to-r from-green-800 to-blue-400 h-[500px]",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/solid-x-armor.appspot.com/o/img1.jpg?alt=media&token=eae32b81-b049-4054-bb0c-95294ee34f12",
    link: "",
    height: "bg-gradient-to-b from-cyan-300 to-violet-700  h-96",
  },
];

function Projects() {
  const Card = ({
    img,
    link,
    height,
  }: {
    img: string;
    link: string;
    height: string;
  }) => {
    return (
      <div className={`rounded-2xl ${height}  w-full hover:cursor-pointer`}>
        <Link href={link}>
          <Image
            className="rounded-md object-cover w-full h-full"
            src={img}
            alt="card name"
            width={1000}
            height={1000}
          />
        </Link>
      </div>
    );
  };
  const [index, setIndex] = useRecoilState(tabToggleState);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setIndex(2);
    }
  }, [inView, setIndex]);

  return (
    <section
      className="px-48 lg:px-28 smm:px-0 pt-[28vh] xs:pt-[18vh]"
      id="projects"
    >
      <section className="space-x-5 flex" ref={ref}>
        <section className="w-full space-y-5">
          {dataLeft.map((card, i) => (
            <Card
              key={i}
              img={card.img}
              link={card.link}
              height={card.height}
            />
          ))}
        </section>
        <section className="w-full space-y-5">
          {dataRight.map((card, i) => (
            <Card
              key={i}
              img={card.img}
              link={card.link}
              height={card.height}
            />
          ))}
        </section>
      </section>
    </section>
  );
}

export default Projects;
