"use client";
import React from "react";
import { Button } from "../ui/button";
import { ChevronsRight, CirclePlay, Plus, Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import Image from "next/image";
import GYMModel from "../../../public/assets/GymModel.webp";
// import OrangeGradientBackground from "../orange-gradient-background";
const Hero = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-[#b88073] to-[rgb(130,80,231)] text-white overflow-hidden">
      <div className="md:flex items-center justify-center flex-wrap px-10 ">
        <div id="left" className="md:w-[50%] ">
          <h2 className="text-3xl md:text-6xl lg:text-8xl md:font-bold py-3 ">
            Push Your Limits With Us
          </h2>
          <p className="py-2 text-lg text-justify">
            Welcome to our gym. We are dedicated to helping you push your limits
            and achieve your fitness goals. Our state-of-the-art equipment and
            experienced trainers are here to support you every step of the way.
          </p>

          <div
            id="Buttons"
            className="flex items-center justify-start gap-5 flex-wrap"
          >
            <Button className="py-3 px-10 bg-orange-500 hover:bg-orange-600 h-12">
              Join Now <ChevronsRight />
            </Button>
            <button className="flex  items-center gap-2">
              <p>Watch Video</p>
              <CirclePlay
                className="text-orange-400 border-2 mx-2 rounded-full border-gray-500"
                size={35}
              />
            </button>
          </div>

          <div id="avatars" className="flex items-start justify-start py-5 h-3">
            <Avatar className="relative -mr-4">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="relative -mr-4">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="relative -mr-4">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="mx-4 -mb-2 my-2 border-2 rounded-full flex items-center justify-center w-auto">
              <Plus size={30} />
            </div>
          </div>
          <div className=" flex py-10 gap-3 ">
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
          </div>
        </div>
        <div id="right" className="md:w-[50%] hidden md:flex justify-end">
          <div className="">
            <Image
              src={GYMModel}
              width={300}
              height={1000}
              alt="GYM Model"
              className="w-auto h-screen object-cover"
            />
          </div>
        </div>
      </div>
      {/* <div className="absolute bottom-0">
        <OrangeGradientBackground />
      </div> */}
    </div>
  );
};

export default Hero;
