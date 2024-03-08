"use client";

import Contact from "@/components/Home/Contact";
import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Skills from "@/components/Home/Skills";
import Loader from "@/components/Loader";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body")?.classList.add("loading")
      : document.querySelector("body")?.classList.remove("loading");
  }, [loading]);

  return (
    <RecoilRoot>
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <main className="h-screen scroll-smooth snap-y overflow-y-scroll  snap-mandatory ">
            <Header />
            <section className="snap-center">
              <Hero />
            </section>
            <section className="snap-center">
              <Skills />
            </section>
            <Projects />
            <section className="snap-center">
              <Contact />
            </section>
          </main>
        )}
      </AnimatePresence>
    </RecoilRoot>
  );
}
