"use client";

import React from "react";
import { Socials } from "./Socials";
import MagnetEffect from "../MagnetEffect";

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
        alert("Email copied to clipboard!");
      })
      .catch((error) => {
        console.error("Error copying email to clipboard: ", error);
      });
  };

  return (
    <section
      id="contact"
      className="space-x-6 pb-32 pt-[28vh]  flex px-48 lg:px-28 smm:px-0 md:items-center justify-center "
    >
      <section className=" w-full justify-between flex flex-col">
        <section>
          <h1 className="font-semibold text-2xl">Get in touch </h1>
          <div className="space-y-2">
            <p
              onClick={() => handleCopyToClipboard("nhatave10@gmail.com")}
              className="cursor-pointer font-mono text-sm mt-10"
            >
              nhatave10@gmail.com
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
      <section className=" w-full">
        <form action="" className="flex flex-col space-y-5">
          <input
            type="text"
            placeholder="Nome"
            className="bg-transparent resize-none border-2 focus:outline-none  rounded-lg p-3 dark:border-light/20 border-black/20"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent resize-none border-2 rounded-lg p-3 focus:outline-none dark:border-light/20 border-black/20"
            required
          />
          <textarea
            name="a"
            placeholder="Mensagem"
            className="bg-transparent resize-none border-2 rounded-lg p-3 focus:outline-none     dark:border-light/20 border-black/20"
            id=""
            rows={5}
            required
          ></textarea>
          <MagnetEffect>
            <button className="bg-black dark:bg-light w-24 rounded-lg">
              <p className="text-white dark:text-black my-2">Enviar</p>
            </button>
          </MagnetEffect>
        </form>
      </section>
    </section>
  );
}

export default Contact;
