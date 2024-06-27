"use client";

import dynamic from "next/dynamic";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import VideoBig from "./VideoBig";

const VideoSmall = dynamic(() => import("@/app/sections/homeSection/Test"));

const HomeFive = () => {
  const { isMdAndAbove } = useMediaQuery();

  return (
    <section className="py-8 bg-[#F4F4F4] text-[#8A5AFE]">
      <h2 className="text-center font-aileron 2xl:text-[115px] text-7xl md:text-8xl font-light">
        <span className="font-times italic -tracking-[6px] md:-tracking-[12px]">
          creators,
        </span>{" "}
        <span className="-tracking-[5px] md:text-[91px] text-6xl">get</span>{" "}
        <span className="font-times italic -tracking-[6px] md:-tracking-[12px]">
          brand deals
        </span>
      </h2>
      {isMdAndAbove ? (
        <div className="lg:flex flex-row gap-10 mt-16 px-9 snap-x">
          <VideoBig />
        </div>
      ) : (
        <div className="lg:hidden flex flex-col gap-5">
          <VideoSmall />
        </div>
      )}
    </section>
  );
};

export default HomeFive;
