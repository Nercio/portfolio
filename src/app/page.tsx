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
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";

// Define the component function
function Home() {
  const socials = useSocials();
  const pageInfo = usePageInfo();
  const projects = useProjects();
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
        )}
      </AnimatePresence>
    </RecoilRoot>
  );
}

export default Home;
