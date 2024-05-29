"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CreatorLast = () => {
  const color = "#006D53";

  return (
    <section className={`flex p-10  items-center justify-center bg-[${color}]`}>
      <div className="basis-1/2 hidden xl:block">
        <Image
          src={
            "https://storage.googleapis.com/landing-cultcreative/creator/Cult%20Creative%202%20(1).jpg"
          }
          alt="creator"
          width={600}
          height={600}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-5 text-[#F4F4F4]">
        <div className="flex flex-col gap-5">
          <h2 className="sm:text-8xl text-8xl -tracking-[.35rem]">
            get{" "}
            <span className="font-times italic -tracking-[.6rem] text-[7rem]">
              started.
            </span>
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-xl font-bold -tracking-[.05rem]">
            We’re excited to work together.<br />
            Tell us who you are and we’ll get back to you with suitable brand deals.
          </p>
          <div>
            <Link href={"/creators/contact"}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className={`bg-slate-100 py-2 px-12 rounded-full text-[${color}] font-aileron font-bold uppercase flex-none`}
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorLast;
