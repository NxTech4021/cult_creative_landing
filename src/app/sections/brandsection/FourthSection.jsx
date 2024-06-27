"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const FourthSection = () => {
  return (
    <section className="py-8 bg-[#F4F4F4] text-[#8A5AFE]">
      <h2 className="text-center font-aileron text-7xl md:text-9xl -tracking-[.4rem]">
        find{" "}
        <span className="font-serif -tracking-[.6rem]">
          a <span className="italic">solution</span>
        </span>{" "}
        that <span className="font-serif italic -tracking-[.3rem]">fits</span>
      </h2>
      <div className="flex flex-col lg:flex-row gap-10 mt-16 px-9">
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
          className="border-2 border-[#8A5AFE] p-3 basis-1/4 rounded-2xl"
        >
          <div className="flex flex-col gap-5  justify-center py-5">
            <div className="border-2 border-[#8A5AFE] px-5 inline-block rounded-full text-center m-auto">
              <h3 className="text-md font-semibold">Trial</h3>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">RM1,500</p>
              <p>validity: 1 month</p>
            </div>
            <p className="text-lg mx-10">
              <span className="font-bold">2</span> UGC Credits
            </p>
            <p className="text-lg mx-10">
              <span className="font-bold">2</span> UGC Videos/Nano-Micro Creators
            </p>
            <p className="text-lg mx-10">
              <span className="font-bold">1</span> Campaign
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
          className="border-2 border-[#8A5AFE] p-3 basis-1/4 rounded-2xl"
        >
          <div className="flex flex-col gap-5 justify-center py-5">
            <div className="border-2 border-[#8A5AFE] px-5 inline-block rounded-full text-center m-auto">
              <h3 className="text-md font-semibold">Basic</h3>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">RM5,000</p>
              <p>validity: 2 months</p>
            </div>
            <p className="text-lg mx-10">
              <span className="font-bold">10</span> UGC Credits
            </p>
            <p className="text-lg mx-10">
              <span className="font-bold">10</span> UGC Videos/Nano-Micro Creators
            </p>
            <p className="text-lg mx-10">
              Up to <span className="font-bold">2</span> Campaigns
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
          className="border-2 border-[#8A5AFE] p-3 basis-1/4 rounded-2xl"
        >
          <div className="flex flex-col gap-5 justify-center py-5">
            <div className="border-2 border-[#8A5AFE] bg-[#8A5AFE] px-5 inline-block rounded-full text-center m-auto">
              <h3 className="text-md text-[#F4F4F4] font-semibold">Essential</h3>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">RM13,500</p>
              <p>validity: 6 months</p>
            </div>
            <p className="text-lg mx-10">
              <span className="font-bold">30</span> UGC Credits
            </p>
            <p className="text-lg mx-10">
              <span className="font-bold">30</span> UGC Videos/Nano-Micro Creators
            </p>
            <p className="text-lg mx-10">
              Up to <span className="font-bold">6</span> Campaigns
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
          className="border-2 border-[#8A5AFE] p-3 basis-1/4 rounded-2xl"
        >
          <div className="flex flex-col gap-5 justify-center py-5">
            <div className="border-2 border-[#8A5AFE] px-5 inline-block rounded-full text-center m-auto">
              <h3 className="text-md font-semibold">Pro</h3>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">RM21,250</p>
              <p>validity: 12 months</p>
            </div>
            <p className="text-lg mx-10">
              <span className="font-bold">50</span> UGC Credits
            </p>
            <p className="text-lg mx-10">
              <span className="font-bold">50</span> UGC Videos/Nano-Micro Creators
            </p>
            <p className="text-lg mx-10">
              Up to <span className="font-bold">12</span> Campaigns
            </p>
          </div>
        </motion.div>
      </div>
      {/* Add top margin because the above cards expand when moused-over */}
      <p className="text-lg text-center my-4">
        *Additional charges apply for cross-posting videos and monthly ads-usage rights. Bulk price available.
      </p>
      <div className="text-center mt-8">
        <Link
          href={"https://calendly.com/danishmokhtar/30min?month=2024-03"}
          target="_blank"
        >
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="uppercase bg-[#8A5AFE] py-2 px-12 rounded-full text-[#F4F4F4] font-aileron font-semibold"
          >
            Book a call
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default FourthSection;
