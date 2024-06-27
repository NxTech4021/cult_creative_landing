"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Vid = () => (
  <motion.video
    src="https://storage.googleapis.com/landing-cultcreative/about/Cult%20Creative%20About%20Page.mp4"
    alt=""
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="w-[100%] xl:h-[85vh] lg:h-[75vh]"
    autoPlay
    loop
    muted
    webkit-playsinline="true"
    playsInline
  >
    <source type="video/mp4" />
  </motion.video>
);

const RoundedItem = ({ children }) => (
  <p className="rounded-full border-2 border-solid border-[#FF3600] lg:p-5 p-3 my-4 mx-3 text-center xl:w-[70%] w-full font-bold uppercase lg:-tracking-[.1rem] xl:-tracking-[.1rem]">
    {children}
  </p>
);

export const Section2 = () => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      duration: 0.5,
    }}
    className="flex flex-col justify-center items-center"
  >
    <div className="flex flex-col lg:flex-row w-[87%] items-center content-center">
      <h2 className="xl:text-8xl lg:text-8xl text-7xl basis-1/2 m-2 -tracking-[.6rem] text-center">
        we’re{" "}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="font-times italic font-light -tracking-[.5rem]"
        >
          different{" "}
        </motion.span>
      </h2>
      <p className="basis-1/2 lg:text-2xl text-xl leading-tight">
        Rapid access to quality content by our expansive community of over 13,000 talented creators ready to bring your vision to life.
      </p>
    </div>
    <div className="flex flex-row py-6 gap-6">
      <div className="xl:flex lg:flex flex-col justify-items-end items-end basis-1/2 hidden">
        <Image
          src="https://storage.googleapis.com/landing-cultcreative/about/Cult%20Creative%204%20(1).jpg"
          alt=""
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col lg:basis-1/2 xl:basis-1/2 basis-2/2 xl:text-4xl lg:text-3xl md:text-3xl text-2xl">
        <div className="lg:p-5 p-3 my-4 mx-3 text-center xl:w-[70%] w-full">
          <p className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-bold uppercase lg:-tracking-[.10rem] xl:text-start lg:text-start text-center xl:-tracking-[0.3rem] italic">
            2020: the year we started
          </p>
        </div>
        <RoundedItem>13,000+ individual creators</RoundedItem>
        <RoundedItem>900+ companies onboarded</RoundedItem>
        <RoundedItem>1,200 jobs matched</RoundedItem>
      </div>
    </div>
  </motion.div>
);
