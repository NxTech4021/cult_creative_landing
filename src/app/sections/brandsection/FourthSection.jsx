import { motion } from "framer-motion";
import Link from "next/link";

const Box = ({ title, children }) => (
  <motion.div
    whileHover={{
      scale: 1.1,
    }}
    className="border-2 border-[#8A5AFE] p-3 basis-1/4 rounded-md"
  >
    <div className="flex flex-col gap-5 justify-center py-5">
      <div className="border-2 border-[#8A5AFE] px-5 inline-block rounded-full text-center m-auto">
        <h3 className="font-serif italic text-md font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  </motion.div>
);

const Para = ({ children }) => (
  <p className="text-lg mx-10">
    {children}
  </p>
);

const Num = ({ children }) => (
  <span className="text-xl font-bold">{children}</span>
);

const LevelDetails = ({ monthlyPayout, nTiktoks, nMonthlyCreators }) => (
  <>
    <p className="text-center">
      <span className="text-2xl font-bold">RM{monthlyPayout}</span><br />
      per month/3 months
    </p>
    <Para>
      <Num>{nTiktoks}</Num> UGC TikToks or Reels
    </Para>
    <Para>
      <Num>{nMonthlyCreators}</Num> creators a month
    </Para>
    <p className="text-lg text-center">
      crossposted as collaborator post
    </p>
  </>
);

const FourthSection = () => {
  return (
    <section className="py-8 bg-[#F4F4F4] text-[#8A5AFE]">
      <h2 className="text-center font-aileron text-7xl md:text-9xl -tracking-[.4rem]">
        find{" "}
        <span className="font-serif -tracking-[.6rem]">
          a <span className="italic">solution</span>
        </span>{" "}
        that{" "}
        <span className="font-serif italic -tracking-[.3rem]">
          fits
        </span>
      </h2>
      <div className="flex flex-col lg:flex-row gap-10 mt-16 px-9">
        <Box title="Level 1">
          <LevelDetails
            monthlyPayout="2,000"
            nTiktoks="4"
            nMonthlyCreators="4"
          />
        </Box>
        <Box title="Level 2">
          <LevelDetails
            monthlyPayout="3,400"
            nTiktoks="8"
            nMonthlyCreators="8"
          />
        </Box>
        <Box title="Level 3">
          <LevelDetails
            monthlyPayout="6,200"
            nTiktoks="16"
            nMonthlyCreators="16"
          />
        </Box>
        <Box title="Enterprise">
          <p className="text-xl font-bold">
            Ready to supercharge your content creation strategy? Need an
            end-to-end fully managed service? Book a call with us.
          </p>
        </Box>
      </div>
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
