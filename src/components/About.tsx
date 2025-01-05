"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Thunder from "../../public/assets/thunder.png";
import gymequipment from "../../public/assets/gymequipment.jpg";
import { motion, AnimatePresence } from "framer-motion";

const useCounter = (endValue: number, duration: number) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = endValue / (duration / 10);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 10);

    return () => clearInterval(timer);
  }, [endValue, duration]);

  return Math.round(count);
};

const About = () => {
  const experienceYears = useCounter(12, 2000);
  const members = useCounter(1000, 2000);
  const weeklyClasses = useCounter(70, 2000);
  const trainers = useCounter(50, 2000);

  return (
    <AnimatePresence>
      <motion.section className="bg-[#1A1D24] w-auto h-[110vh] text-white">
        <div className="px-5 py-5 md:px-10 md:py-10 lg:px-24 lg:py-24 text-lg md:text-xl lg:text-2xl relative">
          <div className="absolute right-0 -z-10">
            <Image
              src={Thunder}
              alt="Thunder"
              width={500}
              height={500}
              className=""
            />
          </div>
          <div className="">
            <h2 className="text-orange-500">About Us</h2>
          </div>
          <div>
            <h2 className="uppercase text-lg md:text-xl lg:text-4xl font-bold ">
              Your <span className="text-orange-500">Fitness </span> Journy
              start here!
            </h2>

            <p className="py-5 text-justify text-base">
              Unlock Your Fitness Potential at Our Gym At our gym, we believe
              that fitness is a journey, not a destination. {"That's "}why{" "}
              {"we're"} dedicated to providing a supportive and motivating
              environment for our members to reach their full potential. Our
              state-of-the-art facilities, expert trainers, and diverse range of
              group fitness classes and personal training programs are designed
              to help you achieve your fitness goals, whether {"you're"} a
              beginner or an experienced athlete. Our trainers are passionate
              about helping you succeed and will work with you to create a
              personalized fitness plan tailored to your needs and goals. Join
              our fitness community today and start your journey towards a
              healthier, happier you!
            </p>
          </div>
          <motion.div
            className=""
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <ul className="flex items-center justify-start text-xl gap-5 flex-wrap [&_li]:flex [&_li]:flex-col [&_li]:text-center [&_li>p.counter]:font-bold  [&_li>p.counter]:text-2xl">
              <li>
                <p className="counter">
                  {experienceYears} <span className="text-orange-500">+</span>
                </p>
                <p>Years of experience</p>
              </li>
              <li>
                <p className="counter">
                  {members}
                  <span className="text-orange-500">+</span>
                </p>
                <p>Members</p>
              </li>
              <li>
                <p className="counter">
                  {weeklyClasses}
                  <span className="text-orange-500">+</span>
                </p>
                <p>Weekly classes</p>
              </li>
              <li className="counter">
                <p className="counter">
                  {trainers}
                  <span className="text-orange-500">+</span>
                </p>
                <p>Expert trainers</p>
              </li>
            </ul>
          </motion.div>

          <div className="flex justify-center py-10 ">
            <Image
              src={gymequipment}
              alt="Gym Equipment"
              width={500}
              height={500}
              className="object-contain lg:w-[50vw] rounded-lg"
            />
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default About;
