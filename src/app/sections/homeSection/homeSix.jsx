import { Icon } from "@iconify/react";
import { TypeAnimation } from "react-type-animation";
import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";


function HomeSix() {
    const [cur, setCur] = useState(0);
    return (
      <section className="py-10 px-6 bg-[#1340FF] font-aileron text-[#F4F4F4]">
        <div className="grid grid-cols-2 gap-10">
          <div className="text-center col-span-2 md:col-span-1">
            <h1 className="text-7xl md:text-8xl lg:text-9xl -tracking-[.4rem] leading-[4rem]">
              hear from
              <br />
              <span className="font-serif italic">our users</span>
            </h1>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="flex overflow-hidden">
              <motion.div
                className="border-2 border-slate-50 min-w-full transition-transform ease-in-out duration-300"
                style={{
                  transform: `translateX(-${cur * 100}%)`,
                }}
              >
                <div className="flex flex-col py-5 mx-10 h-[80vh] gap-20">
                  <Icon icon="fa:quote-right" width={100} />
                  <p className="text-sm lg:text-2xl font-thin uppercase tracking-[.2rem]">
                    <TypeAnimation
                      sequence={[
                        "WE LOVED Cult creative’s Wide network of content creators and Friendly account managers!",
                      ]}
                      speed={50}
                    />
                  </p>
                  <p className="ms-auto mt-auto text-lg sm:text-2xl italic tracking-[.2rem]">
                    -IRMA syazreena,
                    <span className="uppercase font-bold tracking-[0]">reka</span>
                    .
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="border-2 border-slate-50 min-w-full transition-transform ease-in-out duration-300"
                style={{
                  transform: `translateX(-${cur * 100}%)`,
                }}
              >
                <div className="flex flex-col py-5 mx-10 h-[80vh] gap-20">
                  <Icon icon="fa:quote-right" width={100} />
                  <p className="text-sm lg:text-2xl font-thin uppercase  tracking-[.2rem]">
                    <TypeAnimation
                      sequence={[
                        "cult creative understood our goals, needs and direction. They served us professionally  and filled in the gap.",
                      ]}
                      speed={50}
                    />
                  </p>
                  <p className="ms-auto mt-auto text-lg sm:text-2xl italic tracking-[.5rem]">
                    -azah aziz,
                    <span className="uppercase font-bold tracking-[0]">
                      KISSAHH LABELS
                    </span>
                    .
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="border-2 border-slate-50 min-w-full transition-transform ease-in-out duration-300"
                style={{
                  transform: `translateX(-${cur * 100}%)`,
                }}
              >
                <div className="flex flex-col py-5 mx-10 h-[80vh] gap-20">
                  <Icon icon="fa:quote-right" width={100} />
                  <p className="text-sm lg:text-2xl font-thin uppercase  tracking-[.2rem]">
                    <TypeAnimation
                      sequence={[
                        "cult creative’s attention to detail and their systematic workflow process are things we love about them.",
                      ]}
                      speed={50}
                    />
                  </p>
                  <p className="ms-auto mt-auto text-lg sm:text-2xl italic tracking-[.5rem]">
                    -charmaine chow,
                    <span className="uppercase font-bold tracking-[0]">
                      farm fresh
                    </span>
                    .
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center my-7">
          <Icon
            icon="icon-park-outline:dot"
            width={20}
            cursor={"pointer"}
            className={cur === 0 && "scale-150"}
            onClick={() => setCur(0)}
          />
          <Icon
            icon="icon-park-outline:dot"
            width={20}
            cursor={"pointer"}
            className={cur === 1 && "scale-150"}
            onClick={() => setCur(1)}
          />
          <Icon
            icon="icon-park-outline:dot"
            width={20}
            cursor={"pointer"}
            className={cur === 2 && "scale-150"}
            onClick={() => setCur(2)}
          />
        </div>
      </section>
    );
  };

export default HomeSix