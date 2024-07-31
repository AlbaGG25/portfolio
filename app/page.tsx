import Image from "next/image";
import Hero from "../components/Hero"

export default function Home() {
  return (
    <main className="relative bg-black overflow-hidden">
      <div className="">
        <Hero />
      </div>
    </main>
  );
}
