"use client";
import Image from "next/image";
import athletic from "../../public/assets/athletic.png";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const Preferences = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const faq: FAQ[] = [
    {
      question: "What types of fitness programs do you offer?",
      answer:
        "We offer a variety of programs, including weight training, cardio, yoga, pilates, Zumba, and HIIT classes tailored for all fitness levels.",
    },
    {
      question: "Can I try the gym before committing to a membership?",
      answer:
        "Absolutely! We offer a free one-day trial pass so you can experience our facilities and classes before deciding.",
    },
    {
      question: "Do you provide nutrition and diet guidance?",
      answer:
        "Yes, our certified nutritionists are available for consultations to help you create a personalized diet plan that complements your fitness goals.",
    },
    {
      question: "What safety measures are in place for members' health?",
      answer:
        "We maintain strict hygiene standards, including regular equipment sanitization, air purification, and touchless check-in systems. Our staff is trained in first aid for emergencies.",
    },
  ];

  return (
    <section className="bg-[#1A1D24] w-full min-h-screen text-white">
      <div className="px-5 py-10 md:px-10 lg:px-24 lg:py-16">
        {/* Heading */}
        <div className="mb-8 text-center lg:text-left">
          <h2 className="text-orange-500 text-sm md:text-base">Preferences</h2>
          <h2 className="uppercase text-xl md:text-2xl lg:text-4xl font-bold">
            Why Choose Us For your{" "}
            <span className="text-orange-500">Fitness</span> Journey?
          </h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={athletic}
              alt="athletic image"
              width={400}
              height={400}
              className="object-cover rounded-xl hover:shadow-lg duration-200 ease-in hover:scale-125"
            />
          </div>

          {/* FAQ Section */}
          <div className="w-full lg:w-1/2">
            <ul className="space-y-6">
              {faq.map((fq, idx) => (
                <li
                  key={idx}
                  className="border-2 rounded-lg px-3 py-4 border-gray-700 pb-4"
                >
                  <div className="flex justify-between items-center ">
                    <p className="font-semibold text-sm md:text-base lg:text-lg">
                      {fq.question}
                    </p>
                    <button
                      className="text-orange-500 hover:text-white "
                      onClick={() => toggleOpen(idx)}
                    >
                      {openIndex === idx ? <Minus /> : <Plus />}
                    </button>
                  </div>
                  {openIndex === idx && (
                    <p
                      className={`mt-2 text-gray-300 text-sm md:text-base transition-all duration-500 ease-in ${
                        openIndex === idx
                          ? "max-h-screen opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {fq.answer}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preferences;
