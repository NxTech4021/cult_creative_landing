"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const Content = () => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      duration: 0.5,
    }}
    className="flex flex-col items-center justify-center gap-6"
  >
    <h1 className="lg:text-8xl xl:text-8xl text-5xl xl:-tracking-[.3rem] lg:-tracking-[.3rem] -tracking-[.1rem]">
      get{" "}
      <span className="font-times font-medium">
        in <span className="italic xl:-tracking-[.5rem]">touch</span>
      </span>
    </h1>
    <div className="flex xl:flex-row lg:flex-row flex-col justify-center">
      <div className="flex flex-col flex-start justify-items-start p-7 basis-1/2">
        <div className="flex flex-col justify-center items-center align-center p-8">
          <Icon
            icon="icomoon-free:location"
            className="text-6xl text-[#8A5AFE] "
          />
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <h3 className="text-3xl font-semibold">address</h3>
          <h3 className="xl:w-[70%] lg:w-[70%] w-[70%] justify-text">
            Lot 4-401 & 4-402, Level 4, The Starling Mall, Jalan SS
            21/37, Damansara Utama, 47400 Petaling Jaya, Selangor,
            Malaysia.
          </h3>
        </div>
      </div>
      <div className="flex flex-col flex-start justify-items-start p-7 basis-1/2">
        <div className="flex flex-col justify-center items-center align-center p-8">
          <Icon
            icon="tabler:mail-filled"
            className="text-6xl text-[#8A5AFE] "
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-3xl font-semibold">Mail</h3>
          <h3 className="text-xl">hello@cultcreative.asia</h3>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-5 w-[80%]">
      <div className="flex xl:flex-row lg:flex-row flex-col gap-5">
        <div className="w-full">
          <label
            htmlFor="Name"
            className="block text-sm font-medium leading-6 text-slate-400"
          >
            Name
          </label>
          <input
            type="text"
            className="w-full p-3 rounded-md shadow-sm bg-[#CFB5F6] text-black"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="Email"
            className="block text-sm font-medium leading-6 text-slate-400"
          >
            Email
          </label>
          <input
            type="text"
            className="w-full p-3 rounded-md shadow-sm bg-[#CFB5F6] text-black"
          />
        </div>
      </div>
      <div className="w-full">
        <label
          htmlFor="Subject"
          className="block text-sm font-medium leading-6 text-slate-400"
        >
          Subject
        </label>
        <input
          type="text"
          className="w-full p-3 rounded-md shadow-sm bg-[#CFB5F6] text-black"
        />
      </div>
      <div className="w-full">
        <label
          htmlFor="Message"
          className="block text-sm font-medium leading-6 text-slate-400"
        >
          Message
        </label>
        <input
          type="textarea"
          className="w-full p-10 rounded-md shadow-sm bg-[#CFB5F6] text-black"
        />
      </div>
      <div className="flex justify-center items-center w-full">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="bg-[#8A5AFE] py-2 px-12 rounded-full text-[#F4F4F4]"
        >
          Send Message
        </motion.button>
      </div>
    </div>
  </motion.div>
);
