"use client";

import React, { useEffect } from "react";
import { Socials } from "./Socials";
import MagnetEffect from "../MagnetEffect";
import { useRecoilState } from "recoil";
import { useInView } from "react-intersection-observer";
import { tabToggleState } from "@/utils/recoil";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoMdCopy } from "react-icons/io";
import { Alert, Tooltip } from "@material-tailwind/react";
import { motion } from "framer-motion";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

function Contact() {
  const handleOpenMaps = () => {
    const coordinates = "-25.95565960670027,32.5994637288719";
    const encodedCoordinates = encodeURIComponent(coordinates);
    const mapUrl = `https://www.google.com/maps?q=${encodedCoordinates}`;
    window.open(mapUrl, "_blank");
  };

  const handleCopyToClipboard = (text: any) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setOpen(true);
      })
      .catch((error) => {
        console.error("Error copying email to clipboard: ", error);
      });
  };

  const [open, setOpen] = React.useState<boolean>(false);
  const [index, setIndex] = useRecoilState(tabToggleState);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setIndex(3);
    }
  }, [inView, setIndex]);
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:nhatave10@gmail.com?body=${data.message}`;
  };

  const Tip = ({ children }: any) => {
    return (
      <Tooltip
        className="bg-transparent"
        content={
          <div className="dark:bg-light bg-black mt-2 p-2 rounded-md">
            <p className="text-white font-semibold text-xs dark:text-black">
              {open ? "Copiado" : "Copiar"}
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
    <motion.section
      id="contact"
      className="space-x-6 md:space-x-0  md:space-y-10 pb-32 pt-[28vh]  flex px-48 lg:px-28 smm:px-0 md:items-center justify-center md:flex-col md:justify-center md:pt-[18vh]  md:pb-10 xs:pb-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
      }}
    >
      <section
        className=" w-full justify-between flex flex-col md:justify-center md:items-center md:space-y-5"
        ref={ref}
      >
        <section className="md:text-center">
          <h1 className="font-semibold text-2xl">Get in touch</h1>{" "}
          <div className="space-y-2">
            <p
              onClick={() => {
                handleCopyToClipboard("nhatave10@gmail.com");
              }}
              onMouseOut={() => setOpen(false)}
              className="cursor-pointer flex font-mono text-sm mt-10"
            >
              <Tip>nhatave10@gmail.com</Tip>
            </p>
            <p className="font-mono text-sm">+258 849 448 994</p>
            <p
              className="cursor-crosshair font-mono text-sm"
              onClick={handleOpenMaps}
            >
              -25.9556 Lat, 32.5994 Lon
            </p>
          </div>
        </section>
        <Socials />
      </section>
      <section className=" w-full md:w-[80%]">
        <form
          action=""
          className="flex flex-col space-y-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            {...register("name")}
            placeholder="Nome"
            className="bg-transparent resize-none border-2 focus:outline-none  rounded-lg p-3 dark:border-light/20 border-black/20"
            required
          />
          <input
            type="email"
            {...register("email")}
            placeholder="Email"
            className="bg-transparent resize-none border-2 rounded-lg p-3 focus:outline-none dark:border-light/20 border-black/20"
            required
          />
          <textarea
            {...register("message")}
            placeholder="Mensagem"
            className="bg-transparent resize-none border-2 rounded-lg p-3 focus:outline-none     dark:border-light/20 border-black/20"
            id=""
            rows={5}
            required
          ></textarea>
          <button className="bg-black dark:bg-light w-24 rounded-lg hover:-translate-y-0.5 transition-all">
            <p className="text-white dark:text-black my-2">Enviar</p>
          </button>
        </form>
      </section>
    </motion.section>
  );
}

export default Contact;
