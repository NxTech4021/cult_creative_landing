import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

// Components for displaying testimonials
// Recommended import: `import * as testim from "@/app/components/testimonials";`

// `children` shall consist only of one `Heading` and one `Body`
export const Section = ({ bgColor, children }) => (
  <section className={`py-9 lg:px-20 px-10 bg-${bgColor} font-aileron text-[#F4F4F4]`}>
    <div className="grid grid-cols-2 gap-10">
      {children}
    </div>
  </section>
);

export const Heading = ({ children }) => (
  <div className="col-span-2 md:col-span-1 mx-auto">
    <h2
      className="font-aileron md:text-[7rem] text-6xl md:-tracking-[.6rem] -tracking-[.3rem] lg:leading-[.6]"
      style={{ lineHeight: "70%" }}
    >
      {children}
    </h2>
  </div>
);

const NavDot = ({ cur, onClick }) => (
  <Icon
    icon="icon-park-outline:dot"
    width={20}
    cursor={"pointer"}
    className={cur === 0 && "scale-150"}
    onClick={onClick}
  />
);

// `children` shall consist only of `Quote`s
export const Body = ({ cur, setCur, children }) => (
  <div className="col-span-2 md:col-span-1 relative">
    <div className="flex overflow-hidden">
      {children}
    </div>
    <div className="flex flex-row justify-center my-7">
      <NavDot cur={cur} onClick={() => setCur(0)} />
      <NavDot cur={cur} onClick={() => setCur(1)} />
      <NavDot cur={cur} onClick={() => setCur(2)} />
    </div>
  </div>
);

// `children` shall consist only of one `QuoteSource` which shall be:
// * locally defined
// * behave like or expand into a `span`
export const Quote = ({ cur, quote, children }) => (
  <motion.div
    className="border-2 border-slate-50 min-w-full transition-transform ease-in-out duration-300"
    style={{ transform: `translateX(-${cur * 100}%)` }}
  >
    <div className="flex flex-col py-5 mx-10 h-[80vh] gap-20">
      <Icon icon="fa:quote-right" width={100} />
      <p className="text-sm lg:text-2xl font-thin uppercase">
        <TypeAnimation sequence={[quote]} speed={50} />
      </p>
      <p className="ms-auto mt-auto text-lg sm:text-2xl italic">
        —{children}
      </p>
    </div>
  </motion.div>
);
