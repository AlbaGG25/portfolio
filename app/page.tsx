import Image from "next/image";
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <main className="relative bg-black overflow-hidden">
    
        <Navbar />
        <Hero />
   
    </main>
  );
}
