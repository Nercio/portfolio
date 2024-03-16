import React, { useEffect } from "react";
import { Socials } from "./Socials";
import { useRecoilState } from "recoil";
import { useInView } from "react-intersection-observer";
import { tabToggleState } from "@/utils/recoil";
import { SubmitHandler, useForm } from "react-hook-form";
import { Tooltip } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { PageInfoProps, SocialsProps } from "../../../typings";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

type Props = {
  socials: SocialsProps[];
  pageInfo: PageInfoProps | null;
};

function Contact({ socials, pageInfo }: Props) {
  const handleOpenMaps = () => {
    const coordinates = `${pageInfo?.coordinates.lat},${pageInfo?.coordinates.long}`;
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
    window.location.href = `mailto:${pageInfo?.email}.com?body=${data.message}`;
  };

  const latitude = Number(pageInfo?.coordinates?.lat)?.toFixed(4);
  const longitude = Number(pageInfo?.coordinates?.long)?.toFixed(4);

  const Tip = () => {
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
        {pageInfo?.email}
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
                handleCopyToClipboard(`${pageInfo?.email}`);
              }}
              onMouseOut={() => setOpen(false)}
              className="cursor-pointer flex font-mono text-sm mt-10"
            >
              <Tip />
            </p>
            <p className="font-mono text-sm">{pageInfo?.phoneNumber}</p>
            <p
              className="cursor-crosshair font-mono text-sm"
              onClick={handleOpenMaps}
            >
              {latitude}, {longitude}
            </p>
          </div>
        </section>
        <Socials socials={socials} />
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
