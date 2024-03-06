import React, { useEffect, useRef, useState } from "react";
import { Socials } from "./Socials";
import { motion } from "framer-motion";
import MagnetEffect from "../MagnetEffect";
import { useInView } from "react-intersection-observer";
import { useRecoilState } from "recoil";
import { tabToggleState } from "@/utils/recoil";
import Image from "next/image";

function Skills() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const item = {
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
      setIndex(1);
    }
  }, [inView, setIndex]);

  return (
    <section
      id="skills"
      className="h-[100vh] flex  px-48 lg:px-28 smm:px-0 md:items-center justify-center items-center"
    >
      <motion.section
        variants={container}
        className=" w-full  grid grid-cols-2 gap-y-5 smm:grid-cols-1 smm:w-[90%]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        ref={ref}
      >
        <motion.div className="w-[50%] xl:w-[80%] md:w-[70%]" variants={item}>
          <p className="font-mono text-sm">Frontend</p>
          <div className="grid grid-cols-4 gap-3">
            <MagnetEffect>
              <Image
                width={200}
                height={200}
                alt="img"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                className="grayscale hover:grayscale-0 duration-300 transition"
              />
            </MagnetEffect>
            <MagnetEffect>
              <Image
                width={200}
                height={200}
                alt="img"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                className="grayscale hover:grayscale-0 duration-300 transition "
              />
            </MagnetEffect>
            <MagnetEffect>
              <Image
                width={200}
                height={200}
                alt="img"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                className="grayscale hover:grayscale-0 duration-300 transition "
              />
            </MagnetEffect>
            <MagnetEffect>
              <Image
                width={200}
                height={200}
                alt="img"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                className="grayscale hover:grayscale-0 duration-300 transition "
              />
            </MagnetEffect>
            <MagnetEffect>
              <Image
                width={200}
                height={200}
                alt="img"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg"
                className="grayscale hover:grayscale-0 duration-300 transition "
              />
            </MagnetEffect>
          </div>
        </motion.div>
        <motion.div className="w-[50%] xl:w-[80%] md:w-[70%]" variants={item}>
          <p className="font-mono text-sm">Design</p>
          <div className="grid grid-cols-4 gap-5">
            <MagnetEffect>
              <svg
                viewBox="0 0 128 128"
                className="grayscale hover:grayscale-0 duration-300 transition "
              >
                <path
                  fill="#0acf83"
                  d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"
                ></path>
                <path
                  fill="#a259ff"
                  d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"
                ></path>
                <path
                  fill="#f24e1e"
                  d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"
                ></path>
                <path
                  fill="#ff7262"
                  d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
                ></path>
                <path
                  fill="#1abcfe"
                  d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"
                ></path>
              </svg>
            </MagnetEffect>
            <MagnetEffect>
              <svg
                viewBox="0 0 128 128"
                className="grayscale hover:grayscale-0 duration-300 transition "
              >
                <g fill="#00c4cc">
                  <path d="M59.39.152c-.484.051-1.995.23-3.328.387-5.374.613-11.468 2.227-16.816 4.48C19.891 13.106 5.324 30.849 1.305 51.2.359 56.04.129 58.418.129 64c0 7.195.715 12.16 2.61 18.434 6.195 20.53 22.323 36.632 42.906 42.851 6.195 1.871 11.187 2.586 18.355 2.586 7.195 0 12.16-.715 18.434-2.61 20.53-6.195 36.632-22.323 42.851-42.906 1.871-6.195 2.586-11.187 2.586-18.355 0-3.047-.152-6.527-.332-7.809-2.074-14.796-8.168-27.238-18.328-37.402C99.07 8.703 86.68 2.586 72.19.512c-1.996-.282-11.238-.54-12.8-.36zm-20.863 40.32c1.36.41 1.996.794 2.918 1.715 1.793 1.82 2.203 2.817 2.203 5.555 0 2.051-.078 2.434-.691 3.508-1.18 1.996-3.918 3.84-5.812 3.89-1.333.028-1.278-.562.18-2.097 1.945-2.023 2.226-2.79 2.226-5.813-.024-2.917-.383-3.914-1.739-4.734-1.128-.691-2.355-.64-4.148.203-4.66 2.23-9.703 9.653-11.672 17.258-2.613 10.137 2.02 18.25 9.649 16.867 2.226-.41 6.425-2.558 8.246-4.25 1.508-1.379 1.508-1.406 1.66-3.12.336-3.587 2.867-7.169 6.25-8.833 1.558-.77 1.945-.844 4.043-.844 1.996 0 2.457.102 3.43.637 3.097 1.77 2.457 5.89-.895 5.89-1.945 0-2.945-1-1.535-1.534 1.383-.512.867-2.434-.742-2.868-1.895-.488-4.047.793-5.403 3.25-1.64 2.97-1.715 6.504-.156 8.114 1.512 1.613 3.406.336 4.867-3.329.766-1.867 1.867-2.867 3.149-2.867 1.125 0 1.332.692.843 2.793-.718 3.25-.23 4.094 1.793 3.098.664-.309 1.766-1.023 2.43-1.535l1.254-1 .848-4.43c.922-4.965 1.277-5.633 3.172-5.988 1.82-.336 2.23.562 1.562 3.402l-.36 1.59 1.333-1.36c3.148-3.226 7.015-4.812 8.347-3.48.715.715.637 1.613-.386 4.785-.485 1.512-1.153 3.895-1.457 5.25-.461 2.047-.489 2.535-.23 2.868.82.972 3.327-.028 5.554-2.204l1.305-1.277.156-2.844c.152-3.277.457-4.453 1.328-5.504.82-.972 2.305-1.687 3.098-1.484.793.207.793.973.078 3.227-1 3.097-.895 10.238.129 10.238.41 0 2.507-2.2 3.84-4.043l.996-1.36-.793-.816c-1.383-1.46-1.715-2.406-1.715-4.789 0-1.738.129-2.379.562-3.227.719-1.328 1.844-2.3 3.176-2.687 1.406-.434 3.148.281 3.863 1.562.719 1.305.54 4.223-.383 6.223l-.664 1.457h.895c1.23 0 1.715-.305 3.918-2.379 1.152-1.101 2.484-2.05 3.48-2.511 3.918-1.84 8.528-.895 9.293 1.921.64 2.254-.765 3.84-3.226 3.66-1.766-.128-2.098-.59-1.074-1.456 1.843-1.54 0-3.508-2.637-2.793-1.434.386-3.047 1.996-3.89 3.867-1.692 3.738-.794 8.14 1.636 8.14.973 0 2.691-1.921 3.355-3.789.793-2.152 2.457-3.507 3.711-3.02.692.255.743.946.309 3.122-.488 2.383-.563 4.61-.18 5.633.153.382.614 1.101 1.051 1.586.816.921.844 1.254.152 1.691-.332.23-.77.129-1.843-.46-1.485-.77-2.766-2.153-3.227-3.458l-.281-.766-1.024.766c-.59.41-1.511.871-2.047 1.023-2.125.563-4.738-.894-5.964-3.351-.489-.95-.641-3.738-.282-4.813.204-.59.204-.59-.617-.18-.433.231-1.355.485-2.07.563-1.18.13-1.36.258-2.535 1.742-1.664 2.07-4.61 4.864-5.813 5.454-2.558 1.277-3.402.918-4.07-1.72l-.461-1.765-1.102.973c-1.406 1.23-4.222 2.715-5.836 3.074-1.535.332-3.175-.156-3.84-1.18-.995-1.535-.663-4.785.922-9.164 1.176-3.25.333-3.3-2.636-.203-2.203 2.328-3.149 3.992-3.762 6.578-.64 2.688-1.41 3.66-3.148 4.07-1.051.231-1.54-.41-1.332-1.816l.152-1.129-.973.668c-1.383.946-3.125 1.817-4.328 2.149-1.203.332-2.789-.024-3.172-.692-.691-1.175-.691-1.175-1.765-.332-2.332 1.895-5.66 1.356-7.348-1.152l-.54-.793-1.687 1.562c-4.867 4.454-10.957 6.45-15.464 5.067-5.735-1.738-8.907-6.656-8.856-13.746.024-7.117 3.172-14.617 8.473-20.172 2.996-3.125 5.812-4.969 8.68-5.66 2.07-.512 3.328-.485 5.296.129zm0 0"></path>
                  <path d="M90.418 58.676c-.563.562-.356 2.816.36 4.25.359.742.742 1.332.87 1.332.102 0 .332-.59.512-1.309.64-2.66-.512-5.504-1.742-4.273zm0 0"></path>
                </g>
              </svg>
            </MagnetEffect>
            <MagnetEffect>
              <svg
                viewBox="0 0 128 128"
                className="grayscale hover:grayscale-0 duration-300 transition "
              >
                <path
                  fill="#001e36"
                  d="M22.667 1.6h82.666C117.867 1.6 128 11.733 128 24.267v79.466c0 12.534-10.133 22.667-22.667 22.667H22.667C10.133 126.4 0 116.267 0 103.733V24.267C0 11.733 10.133 1.6 22.667 1.6Z"
                ></path>
                <path
                  fill="#31a8ff"
                  d="M45.867 33.333c-1.6 0-3.2 0-4.853.054-1.654.053-3.201.053-4.641.107-1.44.053-2.773.053-4.053.106-1.227.053-2.08.053-2.987.053-.373 0-.533.213-.533.587v54.88c0 .48.213.694.64.694h10.347c.373-.054.64-.374.586-.747v-17.12c1.013 0 1.76 0 2.294.053.533.053 1.386.053 2.666.053 4.374 0 8.374-.48 12-1.813 3.467-1.28 6.454-3.52 8.587-6.507 2.133-2.986 3.2-6.773 3.2-11.36 0-2.4-.426-4.693-1.226-6.933A16.98 16.98 0 0 0 64 39.36a19.049 19.049 0 0 0-7.147-4.374c-2.987-1.12-6.613-1.653-10.986-1.653Zm1.19 10.505c1.9.036 3.75.368 5.476 1.068 1.547.587 2.827 1.654 3.734 3.04a8.779 8.779 0 0 1 1.227 4.748c0 2.346-.534 4.16-1.654 5.493-1.174 1.333-2.667 2.347-4.373 2.827-1.974.64-4.054.959-6.134.959h-2.827c-.64 0-1.332-.053-2.079-.106v-17.92c.373-.054 1.12-.107 2.187-.053 1.013-.054 2.239-.054 3.626-.054.273-.007.546-.008.817-.002zm44.73 2.723c-3.787 0-6.934.586-9.44 1.866-2.293 1.067-4.267 2.773-5.6 4.906-1.173 1.974-1.814 4.16-1.814 6.454a11.447 11.447 0 0 0 1.227 5.44 13.809 13.809 0 0 0 4.054 4.533 32.629 32.629 0 0 0 7.573 3.84c2.613 1.013 4.373 1.813 5.227 2.506.853.694 1.28 1.387 1.28 2.134 0 .96-.587 1.867-1.44 2.24-.96.48-2.4.747-4.427.747-2.133 0-4.267-.267-6.294-.8a22.834 22.834 0 0 1-6.613-2.613c-.16-.107-.32-.16-.48-.053-.16.106-.213.319-.213.479v9.28c-.053.427.213.8.587 1.013a21.49 21.49 0 0 0 5.44 1.707c2.4.48 4.799.693 7.252.693 3.84 0 7.041-.586 9.654-1.706 2.4-.96 4.48-2.613 5.973-4.747a12.41 12.41 0 0 0 2.08-7.093 11.512 11.512 0 0 0-1.226-5.493c-1.014-1.814-2.454-3.307-4.214-4.427a38.625 38.625 0 0 0-8.213-3.894 48.784 48.784 0 0 1-3.787-1.76c-.693-.373-1.333-.853-1.813-1.44-.32-.427-.533-.906-.533-1.386 0-.48.16-1.013.426-1.44.374-.533.96-.907 1.653-1.067 1.014-.266 2.134-.427 3.2-.374 2.027 0 4 .267 5.974.694 1.814.373 3.52.96 5.12 1.814.213.106.48.106.96 0a.656.656 0 0 0 .267-.534v-8.693c0-.214-.054-.427-.107-.64-.107-.213-.32-.427-.533-.48A18.762 18.762 0 0 0 98.4 47.04a45.98 45.98 0 0 0-6.613-.48z"
                ></path>
              </svg>
            </MagnetEffect>
          </div>
        </motion.div>
        <motion.div className="w-[50%] xl:w-[80%] md:w-[70%]" variants={item}>
          <p className="font-mono text-sm">Linguagens</p>
          <div className="grid grid-cols-4 gap-5">
            <MagnetEffect>
              <Image
                width={200}
                height={200}
                alt="img"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                className="grayscale hover:grayscale-0 duration-300 transition "
              />
            </MagnetEffect>
            <MagnetEffect>
              <Image
                width={200}
                height={200}
                alt="img"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                className="grayscale hover:grayscale-0 duration-300 transition "
              />
            </MagnetEffect>
            <MagnetEffect>
              <Image
                width={200}
                height={200}
                alt="img"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                className="grayscale hover:grayscale-0 duration-300 transition "
              />
            </MagnetEffect>
            <MagnetEffect>
              <svg
                viewBox="0 0 128 128"
                className="grayscale hover:grayscale-0 duration-300 transition "
              >
                <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
                <path
                  data-name="original"
                  fill="#007acc"
                  d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                ></path>
              </svg>
            </MagnetEffect>
          </div>
        </motion.div>
        <motion.div className="w-[50%] xl:w-[80%] md:w-[70%]" variants={item}>
          <p className="font-mono text-sm">Ferramentas</p>
          <div className="grid grid-cols-4 gap-5">
            <MagnetEffect>
              <Image
                width={200}
                height={200}
                alt="img"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                className="grayscale hover:grayscale-0 duration-300 transition "
              />
            </MagnetEffect>
            <MagnetEffect>
              <Image
                width={200}
                height={200}
                alt="img"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                className="grayscale hover:grayscale-0 duration-300 transition "
              />
            </MagnetEffect>
            <MagnetEffect>
              <Image
                width={200}
                height={200}
                alt="img"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                className="grayscale hover:grayscale-0 duration-300 transition "
              />
            </MagnetEffect>
            <MagnetEffect>
              <Image
                width={200}
                height={200}
                alt="img"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
                className="grayscale hover:grayscale-0 duration-300 transition "
              />
            </MagnetEffect>
            <MagnetEffect>
              <Image
                width={200}
                height={200}
                alt="img"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sanity/sanity-original.svg"
                className="grayscale hover:grayscale-0 duration-300 transition "
              />
            </MagnetEffect>
          </div>
        </motion.div>
        <motion.div className="w-[50%] xl:w-[80%] md:w-[70%]" variants={item}>
          <p className="font-mono text-sm">Inteligência Artificial</p>
          <div className="grid grid-cols-4 gap-5">
            <MagnetEffect>
              <Image
                width={200}
                height={200}
                alt="img"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"
                className="grayscale hover:grayscale-0 duration-300 transition "
              />
            </MagnetEffect>
            <MagnetEffect>
              <Image
                width={200}
                height={200}
                alt="img"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"
                className="grayscale hover:grayscale-0 duration-300 transition "
              />
            </MagnetEffect>
          </div>
        </motion.div>
      </motion.section>
    </section>
  );
}

export default Skills;
