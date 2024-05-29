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
          className="border-2 border-[#8A5AFE] p-3 basis-1/4 rounded-md"
        >
          <div className="flex flex-col gap-5  justify-center py-5">
            <div className="border-2 border-[#8A5AFE] px-5 inline-block rounded-full text-center m-auto">
              <h3 className="font-serif italic text-md font-semibold">Level 1</h3>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">RM2,000</p>
              <p>per month/3 months</p>
            </div>
            <p className="text-lg mx-10">
              <span className="text-xl font-bold">4</span> UGC TikToks or Reels
            </p>
            <p className="text-lg mx-10">
              <span className="text-xl font-bold">4</span> creators a month
            </p>
            <p className="text-lg text-center">
              crossposted as collaborator post
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
          className="border-2 border-[#8A5AFE] p-3 basis-1/4 rounded-md"
        >
          <div className="flex flex-col gap-5 justify-center py-5">
            <div className="border-2 border-[#8A5AFE] px-5 inline-block rounded-full text-center m-auto">
              <h3 className="font-serif italic text-md font-semibold">Level 2</h3>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">RM3,400</p>
              <p>per month/3 months</p>
            </div>
            <p className="text-lg mx-10">
              <span className="text-xl font-bold">8</span> UGC TikToks or Reels
            </p>
            <p className="text-lg mx-10">
              <span className="text-xl font-bold">8</span> creators a month
            </p>
            <p className="text-lg text-center">
              crossposted as collaborator post
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
          className="border-2 border-[#8A5AFE] p-3 basis-1/4 rounded-md"
        >
          <div className="flex flex-col gap-5 justify-center py-5">
            <div className="border-2 border-[#8A5AFE] px-5 inline-block rounded-full text-center m-auto">
              <h3 className="font-serif italic text-md font-semibold">Level 3</h3>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">RM6,200</p>
              <p>per month/3 months</p>
            </div>
            <p className="text-lg mx-10">
              <span className="text-xl font-bold">16</span> UGC TikToks or Reels
            </p>
            <p className="text-lg mx-10">
              <span className="text-xl font-bold">16</span> creators a month
            </p>
            <p className="text-lg text-center">
              crossposted as collaborator post
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
          className="border-2 border-[#8A5AFE] p-3 basis-1/4 rounded-md"
        >
          <div className="flex flex-col gap-5 items-center justify-center py-5">
            <div className="border-2 border-[#8A5AFE] px-5 inline-block rounded-full text-center">
              <h3 className="font-serif italic text-md font-semibold">Enterprise</h3>
            </div>
            {/* <div className="text-center">
              <p className="text-2xl font-bold">RM2000</p>
              <p>per month/3 months</p>
            </div> */}
            <p className="text-xl font-bold">
              Ready to supercharge your content creation strategy? Need an
              end-to-end fully managed service? Book a call with us.
            </p>
          </div>
        </motion.div>
      </div>
      {/* <p className="text-center text-2xl font-aileron mt-8 mb-10">
        <span className="font-bold">*Add-ons:</span> RM100 for cross posting
        across platforms | RM180 for 3 months ads usage rights
      </p> */}
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
