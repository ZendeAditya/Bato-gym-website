import Nav from "@/components/Hero/Nav";
import Hero from "../components/Hero/Hero";
import About from "@/components/About";
import Services from "@/components/Services/Services";
import Preferences from "@/components/Preferences";

import Subscripton from "@/components/Subscription/Subscripton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="relative flex justify-center flex-col">
        <div className="absolute z-10 top-0 left-9 flex justify-center">
          <Nav />
        </div>
        <Hero />
        <About />
        <Services />
        <Preferences />
        <Subscripton />
        <Footer/>
      </div>
    </>
  );
}
