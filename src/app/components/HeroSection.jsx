"use client"; // designates component as Client Component - renders and executes within user's browser
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="hero" className="lg:py-16">
      <div
        className="md:grid gap-2 px-4 xl:gap-16 xl:px-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-center gap-2 mb-4">
            <h1 className="text-white text-4xl sm:text-5xl xl:text-7xl leading-tight font-extrabold">
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
                  "a Software Engineer",
                  1200,
                  "a Web Developer",
                  1200,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="block min-h-[2.5em] max-w-[290ch] overflow-hidden"
              />
            </h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-60 h-60 justify-self-start sm:justify-self-center"
            >
              <div className="rounded-2xl bg-[#181818] p-2">
                <Image
                  src="/images/display-picture.jpeg"
                  alt="hero image"
                  width={60}
                  height={60}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            </motion.div>
          </div>
          <p className="text-[#ADB7BE] text-base sm:text-xl xl:text-2xl mb-6">
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
              <span className="block bg-[#121212] hover:opacity-90 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
