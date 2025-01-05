import { Button } from "./ui/button";

import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <section className="bg-[#1A1D24] h-[50vh] text-white lg:px-10 lg:py-10">
      <div className="text-center flex flex-col gap-5 items-center">
        <h2 className=" font-bold py-3 lg:text-5xl">Ready To Grow?</h2>
        <p className="py-5">
          Unlock your full potential and embark on a journey of
          self-improvement. Our cutting-edge facilities and expert trainers are
          here to guide you every step of the way. {"Don't "}let another day
          pass without taking control of your health and wellness. Join us today
          and start your path to a stronger, healthier you.
        </p>

        <Button
          className={`w-52 h-10 hover:bg-orange-500 bg-opacity-0 transition duration-300`}
        >
          Get Started
          <ArrowUpRight className="hover:translate-y-[-3px] hover:translate-x-[3px] duration-500 ease-in transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default Footer;
