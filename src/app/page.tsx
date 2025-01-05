import Nav from "@/components/Hero/Nav";
import Hero from "../components/Hero/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <div className="relative flex justify-center">
        <div className="absolute z-10">
          <Nav />
        </div>
        <Hero />
      </div>
      <About />
    </>
  );
}
