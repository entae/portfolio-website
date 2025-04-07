"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="absolute top-1/2 -left-4 h-80 w-80 z-0 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 bg-radial from from-sky-800 to-transparent"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect!</h5>
        <p className="text=[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities and my inbox is always
          open. Whether you have a question or just want to say hi, I'll try my
          best to get back to you.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/entae">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/intae-chung/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {
          // If the email was submitted successfully, show a success message.
          emailSubmitted ? (
            <p className="text-green-500 text-sm mt-2">
              Email sent Successfully!
            </p>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="text-white block mb-2 text-md font-medium "
                >
                  Your Email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder=[#9CA2A9] text-gray-100 text-md rounded-md block w-full p-2.5"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="text-white block mb-2 text-md font-medium "
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder=[#9CA2A9] text-gray-100 text-md rounded-md block w-full p-2.5"
                  placeholder="Just saying hi"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="bg-[#18191E] border border-[#33353F] placeholder=[#9CA2A9] text-gray-100 text-md rounded-md block w-full p-2.5"
                  placeholder="Let's talk about..."
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              >
                Send Message
              </button>
            </form>
          )
        }
      </div>
    </section>
  );
};

export default EmailSection;
