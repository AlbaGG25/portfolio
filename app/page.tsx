import Image from "next/image";
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="relative bg-black overflow-hidden px-6 md:px-8">
    
        <Navbar />
        <Hero />
        <About />
        <Projects />
   
    </main>
  );
}
