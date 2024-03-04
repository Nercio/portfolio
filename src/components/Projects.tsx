import React from "react";
import { Socials } from "./Socials";
import Image from "next/image";
import Link from "next/link";

function Projects() {
  const Card = ({
    img,
    link,
    gradient,
  }: {
    img: string;
    link: string;
    gradient: string;
  }) => {
    return (
      <div
        className={`rounded-md ${gradient} hover:cursor-pointer group relative`}
        id="projects"
      >
        <Link href={link}>
          <Image
            className="rounded-md  transform transition duration-300 ease-in-out scale-75 group-hover:scale-100"
            src={img}
            alt="card name"
            width={500}
            height={300}
          />
        </Link>
      </div>
    );
  };
  return (
    <section className=" space-y-5 h-[100vh] bg-red-300  items-center  flex flex-col px-48 lg:px-28 smm:px-0 justify-center ">
      <div className="flex space-x-5">
        {/* <Card
          img="https://firebasestorage.googleapis.com/v0/b/solid-x-armor.appspot.com/o/img2.jpg?alt=media&token=d23b8a21-ba3d-4396-b505-a067d58c2c90"
          link={""}
          
        /> */}
        <Card
          img="https://firebasestorage.googleapis.com/v0/b/solid-x-armor.appspot.com/o/img3.jpg?alt=media&token=b29164bd-a363-480f-8e31-8820de8ff83f"
          link={""}
          gradient={"bg-gradient-to-br from-amber-600 to-indigo-900"}
        />
        <Card
          img="https://firebasestorage.googleapis.com/v0/b/solid-x-armor.appspot.com/o/img1.jpg?alt=media&token=eae32b81-b049-4054-bb0c-95294ee34f12"
          link={""}
          gradient={"bg-gradient-to-r from-blue-300 to-emerald-300"}
        />
      </div>
      {/* <div className="flex space-x-5">
        <Card
          img="https://firebasestorage.googleapis.com/v0/b/solid-x-armor.appspot.com/o/img2.jpg?alt=media&token=d23b8a21-ba3d-4396-b505-a067d58c2c90"
          link={""}
        />
        <Card
          img="https://firebasestorage.googleapis.com/v0/b/solid-x-armor.appspot.com/o/img3.jpg?alt=media&token=b29164bd-a363-480f-8e31-8820de8ff83f"
          link={""}
        />
        <Card
          img="https://firebasestorage.googleapis.com/v0/b/solid-x-armor.appspot.com/o/img1.jpg?alt=media&token=eae32b81-b049-4054-bb0c-95294ee34f12"
          link={""}
        />
      </div> */}
    </section>
  );
}

export default Projects;
