"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const HomeThree = () => {
  const [index, setIndex] = useState(false);
  const [thumbnail, setThumbnail] = useState(true);

  return (
    <section className="lg:px-2 py-12 bg-[#1340FF]">
      <div className="flex flex-col lg:flex-row p-2 items-center gap-10">
        {thumbnail ? (
          <div
            className="relative overflow-hidden cursor-pointer rounded-md"
            onClick={() => setThumbnail(false)}
          >
            <Image
              src="/thumbnail.png"
              alt="Cult Creative founder explains how their services work."
              width={1000}
              height={562.5}
              className="rounded-md hover:scale-105 transition-all ease-in-out duration-200 "
            />
            <div
              className="absolute top-[50%] left-[50%]"
              style={{
                transform: "translate(-50%, -50%)",
              }}
            >
              <Icon icon="logos:youtube-icon" width={70} />
            </div>
          </div>
        ) : (
          <div className="bg-black lg:w-[1000px] lg:h-[500px] w-[100%] sm:h-[400px] h-[200px] rounded-xl">
            <iframe
              name="iframe_name"
              src="https://www.youtube.com/embed/xTvO7RmOyBM?si=xKjLNN2DNwOTewu3"
              frameborder="0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
              allowTransparency
              loading="lazy"
              // className={`rounded-xl md:w-[500px] md:h-[281.25px] lg:w-[1000px] lg:h-[562.5px] ${
              //   index && "transition duration-1000 ease-in-out"
              // } basis-1/2`}
              className={`rounded-xl w-full h-full`}
              onMouseEnter={() => setIndex(true)}
              onMouseLeave={() => setIndex(false)}
            />
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="basis-1/2 p-2 text-[#F4F4F4]"
        >
          <h2
            className="xl:text-[10rem] lg:tracking-5 md:text-8xl text-6xl font-aileron font-light"
            style={{
              lineHeight: "70%",
            }}
          >
            how it<br />
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className="font-times italic"
            >
              works<br />
            </motion.span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mt-7"
          >
            <p className="lg:w-[95%] lg:ml-4 text-[20px] xl:text-2xl md:text-md my-3 font-aileron font-light text-balance">
              We take the hassle out of creator marketing.
            </p>
            <p className="lg:w-[85%] lg:ml-4 xl:text-2xl md:text-md text-[20px] font-aileron font-light text-balance">
              With a simple monthly subscription, here’s how we bridge brands and
              agencies with creators to establish genuine relationships with
              customers.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeThree;
