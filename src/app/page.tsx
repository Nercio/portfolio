import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col scroll-smooth">
      <Header />
      <Hero />
      <Projects />
      {/* <Footer /> */}
    </main>
  );
}
