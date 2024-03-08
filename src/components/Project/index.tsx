import Link from "next/link";
import React from "react";
import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";
import { openModalState } from "@/utils/recoil";
import { useRecoilState } from "recoil";
import { motion } from "framer-motion";

type ProjectProps = {
  img: string;
  link: string;
  name: string;
  desc: string;
  layoutId: number;
};

function Modal({ img, link, name, desc, layoutId }: ProjectProps) {
  const [opens, setOpens] = useRecoilState(openModalState);
  return (
    <main className="k absolute left-0 top-0 right-0 bottom-0  z-50  px-48 lg:px-28 smm:px-0  flex-col">
      <button onClick={() => setOpens(false)} className="mb-5 pt-16 ">
        <p className="font-mono text-sm ">NNN</p>
      </button>
      <section className="flex w-full h-[80%] space-x-5">
        <motion.div
          layoutId={`img-${layoutId}`}
          className="flex w-full h-full bg-red-200 rounded-md"
        >
          <Image
            className="rounded-md object-cover"
            src={
              "https://firebasestorage.googleapis.com/v0/b/solid-x-armor.appspot.com/o/img2.jpg?alt=media&token=d23b8a21-ba3d-4396-b505-a067d58c2c90"
            }
            alt="project img"
            width={2000}
            height={2000}
          />
        </motion.div>
        <section className="space-y-5 flex flex-col w-[20%]">
          <h1 className="font-mono text-sm">Classmate</h1>
          <Link href={""} className="font-mono text-sm flex items-center group">
            <p>Visitar site</p>
            <IoMdArrowForward className=" transition ease-in-out group-hover:translate-x-3 duration-150 opacity-0 group-hover:opacity-100 " />
          </Link>
          <p className="font-mono text-sm text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            enim ex omnis placeat modi soluta voluptas commodi beatae neque
            voluptates dolores quam culpa dignissimos perferendis labore, vitae
            explicabo mollitia laudantium?
          </p>
        </section>
      </section>
    </main>
  );
}

export default Modal;
