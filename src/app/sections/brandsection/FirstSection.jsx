"use client";

import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LoadingIcon from "@/app/components/Icons/loading-icon";
import { Icon } from "@iconify/react";
import Link from "next/link";

const vid = [
  {
    id: uuidv4(),
    name: "https://storage.googleapis.com/landing-cultcreative/brands/cut%20Nonico%20x%20Cult%20Creative.mp4",
  },
  {
    id: uuidv4(),
    name: "https://storage.googleapis.com/landing-cultcreative/brands/cut%20Slae%20Cosmetics%20x%20Cult%20Creative.mp4",
  },
];

const FirstSection = () => {
  const [vidIndex, setVidIndex] = useState(0);
  const [loading, setLoading] = useState();

  useEffect(() => {
    const vidScroll = setInterval(() => {
      setVidIndex(vidIndex == vid.length - 1 ? 0 : vidIndex + 1);
    }, 4000);

    return () => {
      clearInterval(vidScroll);
    };
  }, [vidIndex]);

  return (
    <section className="p-8 bg-[#8A5AFE] ">
      <div className="flex lg:flex-row flex-col justify-stretch gap-10 items-center lg:items-start text-[#F4F4F4]">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="basis-1/2 flex flex-col space-y-10 text-center lg:text-start text-[#F4F4F4] lg:w-[50%]"
          // className="flex flex-col lg:w-[50%] text-center lg:text-left gap-10 basis-1/2"
        >
          <h1
            // className="2xl:text-[11rem] xl:text-[9rem] lg:text-[7rem] text-7xl lg:tracking-5 font-aileron"
            // style={{
            //   lineHeight: 0.8,
            // }}
            className="2xl:text-[11rem] xl:text-[9rem] lg:text-[7rem] text-7xl lg:tracking-5 font-aileron"
            style={{
              lineHeight: "75%",
            }}
          >
            let <span className="font-times">our</span>
            <span className="-tracking-[.5rem] xl:-tracking-[1rem] font-times italic">
              <br /> creators
            </span>{" "}
            do <br />
            <span className="-tracking-[.2rem] xl:-tracking-[1rem] font-times ">
              the
            </span>{" "}
            <span className="-tracking-[.5rem] xl:-tracking-[14px] font-times italic">
              work
            </span>
            <br />
            for{" "}
            <span className="-tracking-[.5rem] xl:-tracking-[1rem] font-times ">
              you
            </span>{" "}
          </h1>
          <p
            // className="lg:text-xl text-xl lg:w-[75%] lg:text-justify"
            className="w-auto text-[25.5px] leading-tight tracking-[-2px] lg:w-[75%]"
          >
            With our network of 13,000 creators we’ve built across Southeast
            Asia, we take the guesswork out of creator marketing.
          </p>
          <p
            // className="lg:text-xl text-xl lg:w-[75%] lg:text-justify"
            className="w-auto text-[25.5px] leading-tight tracking-[-2px] lg:w-[75%]"
          >
            Get quality User-Generated Content and KOL campaigns for your brand,
            to drive genuine user engagement.
          </p>
        </motion.div>
        <div className="sticky top-32 my-10 basis-1/2">
          <div className="sm:hidden">
            <motion.video
              key={vidIndex}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={vid[vidIndex]?.name}
              className="h-[37rem] rounded-lg"
              autoPlay
              loop
              muted
              webkit-playsinline="true"
              playsInline
              preload="metadata"
            >
              <source type="video/mp4" />
            </motion.video>
          </div>
          <div className="hidden sm:block">
            <div className="flex gap-3 justify-center">
              {loading && <LoadingIcon w={"5em"} h={"5em"} c={"white"} />}
              {vid &&
                vid.map((elem, i) => {
                  return (
                    <video
                      key={i}
                      className="w-[50%] 2xl:h-[70vh] xl:[h-40vh] rounded-md object-cover"
                      autoPlay
                      loop
                      muted
                      webkit-playsinline="true"
                      playsInline
                      preload="metadata"
                    >
                      <source src={elem?.name} type="video/mp4" />
                    </video>
                  );
                })}
            </div>
          </div>
          <div className="flex absolute left-[50%] translate-x-[-50%] bottom-5 sm:hidden md:hidden lg:hidden">
            {vid.map((_, i) => {
              return i === vidIndex ? (
                <Icon key={i} icon="icon-park-outline:dot" width={20} />
              ) : (
                <Icon
                  key={i}
                  icon="octicon:dot-24"
                  width={20}
                  onClick={() => setVidIndex(i)}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="text-center my-10">
        <Link
          href={"https://calendly.com/danishmokhtar/30min?month=2024-03"}
          target="_blank"
        >
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="bg-slate-100 py-2 px-12 rounded-full text-[#8A5AFE] font-aileron uppercase font-bold"
          >
            Get Started
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default FirstSection;
