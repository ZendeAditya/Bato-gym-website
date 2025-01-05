"use client";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ServicesCard } from "./ServicesCard";
import fitness from "../../../public/assets/services/fitness.jpg";
import meditation from "../../../public/assets/services/meditation.jpg";
import personal from "../../../public/assets/services/personal.jpg";
import swim from "../../../public/assets/services/swim.jpg";

const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const services = [
    { tagline: "Personal Trainer", img: fitness },
    { tagline: "Meditation Program", img: meditation },
    { tagline: "Personal Training", img: personal },
    { tagline: "Swimming Trainer", img: swim },
    { tagline: "Personal Trainer", img: fitness },
    { tagline: "Meditation Program", img: meditation },
    { tagline: "Personal Training", img: personal },
  ];

  return (
    <section className="bg-gray-900 w-full min-h-screen py-12 text-white">
      <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-orange-500 text-lg md:text-xl mb-4">
          Our Services
        </h2>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
          Transform Your <span className="text-orange-500">Body</span>, Unlock
          Your <span className="text-orange-500">Potential</span>, and Unleash a{" "}
          <span className="text-orange-500">Healthier</span>, Happier You
          <span className="text-orange-500">.</span>
        </h2>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <p className="text-lg text-gray-300 max-w-2xl">
            At FFL we offer personalized fitness services to help you reach your
            goals. From one-on-one training to high-energy classes and recovery
            sessions, we provide everything you need to succeed in your fitness
            journey.
          </p>

          <div className="flex gap-2">
            <Button
              variant="outline"
              className="hover:bg-orange-600 transition-all duration-200 bg-gray-400"
              onClick={() => handleScroll("left")}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="hover:bg-orange-600  transition-all duration-200 bg-gray-400"
              onClick={() => handleScroll("right")}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service, index) => (
            <ServicesCard
              key={index}
              tagline={service.tagline}
              img={service.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
