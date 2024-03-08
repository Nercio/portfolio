import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdArrowForward } from "react-icons/io";

function project() {
  return (
    <main className="flex h-screen  px-48 lg:px-28 smm:px-0  flex-col">
      <div className="mb-5 pt-16">
        <Link href={"/"}>
          <p className="font-mono text-sm ">NNN</p>
        </Link>
      </div>
      <section className="flex space-x-5">
        <Image
          className="rounded-md object-cover w-[100%] h-[80%]"
          src={
            "https://firebasestorage.googleapis.com/v0/b/solid-x-armor.appspot.com/o/img1.jpg?alt=media&token=eae32b81-b049-4054-bb0c-95294ee34f12"
          }
          alt="project img"
          width={2000}
          height={2000}
        />
        <section className="space-y-5 flex flex-col">
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

export default project;
