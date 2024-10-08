import Image from "next/image";
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main className="relative bg-black overflow-hidden mx-auto">
    
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
        
    </main>
  );
}
