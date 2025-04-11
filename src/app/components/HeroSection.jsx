"use client"; // designates component as Client Component - renders and executes within user's browser
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="hero" className="lg:py-16">
      <div className="md:grid xl:grid-cols-12 gap-4 align-top px-4 xl:gap-16 xl:px-16">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-left col-span-12 xl:col-span-9"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl leading-tight font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-600">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "In Tae Chung",
                1200,
                "a Software Developer",
                1200,
                "a Web Developer",
                1200,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-xl lg:text-2xl w-fit mb-6">
            Hi! I'm In Tae - a software developer passionate about creating
            meaningful web experiences and always eager to learn new
            technologies. I enjoy building, problem-solving, and continuously
            growing my skills to take on new challenges.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-secondary-500 via-primary-600 to-tertiary-700 hover:opacity-90 text-white"
            >
              Hire Me
            </Link>
            <a
              href="/InTaeChung_Resume.pdf"
              target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-secondary-500 via-primary-600 to-tertiary-700 hover:bg-slate-800 hover:opacity-90  text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 hover:opacity-90 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 xl:col-span-3 place-self-center mt-4 lg:mt-0"
        >
          <div className="relative rounded-2xl bg-[#181818] w-[350px] h-[350px]">
            <Image
              src="/images/display-picture.jpeg"
              alt="hero image"
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
