"use client";

import Contact from "@/components/Home/Contact";
import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Skills from "@/components/Home/Skills";
import Loader from "@/components/Loader";
import { usePageInfo } from "@/hooks/usePageInfo";
import { useProjects } from "@/hooks/useProjects";
import { useSocials } from "@/hooks/useSocials";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { RecoilRoot } from "recoil";
import { motion } from "framer-motion";

function Home() {
  const socials = useSocials();
  const { pageInfo, pageInfoLoading } = usePageInfo();
  const { projects, projectLoading } = useProjects();

  if (projectLoading && pageInfoLoading)
    return (
      <AnimatePresence>
        <motion.div key="loader">
          <Loader />
        </motion.div>
      </AnimatePresence>
    );

  return (
    <RecoilRoot>
      <AnimatePresence>
        <main className="h-screen scroll-smooth snap-y overflow-y-scroll  snap-mandatory ">
          <Header />
          <section className="snap-center">
            <Hero socials={socials} pageInfo={pageInfo} />
          </section>
          <section className="snap-center">
            <Skills />
          </section>
          <Projects project={projects} />
          <section className="snap-center">
            <Contact socials={socials} pageInfo={pageInfo} />
          </section>
        </main>
      </AnimatePresence>
    </RecoilRoot>
  );
}

export default Home;
