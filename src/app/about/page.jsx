import { makeCanonicalUrl } from "@/app/components/misc";
import Header from "@/app/components/Header";
import { Suspense } from "react";
import * as cc from "./client-components"
import LastSection from "@/app/sections/brandsection/LastSection";

export const metadata = {
  title: "About Us",
  description: "At Cult Creative, we empower creators to pursue passion, purpose and prosperity while challenging stereotypes about creativity.",
  alternates: {
    canonical: makeCanonicalUrl("/about"),
  },
};

const About = () => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col">
        <Suspense fallback={<p>Loading...</p>}>
          <section className="bg-[#FF3600] pt-6 pb-14 px-3">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col lg:justify-center lg:items-center">
                <cc.Vid />
              </div>
              <div className="flex flex-col justify-center items-center gap-y-8 text-[#F4F4F4]">
                <h1 className="xl:text-[11rem] lg:text-[8rem] md:text-7xl text-center text-5xl xl:-mt-[74px] lg:-mt-[60px] z-50">
                  <span className="xl:text-[9rem] lg:text-[7rem]">our</span>{" "}
                  <span className="font-times xl:-tracking-[0.7rem] lg:-tracking-[0.5rem] -tracking-[0.1rem] font-extralight">
                    operating
                  </span>{" "}
                  <span className="font-times xl:-tracking-[0.7rem] lg:-tracking-[0.5rem] -tracking-[0.1rem] font-extralight italic">
                    beliefs
                  </span>
                </h1>
                <div className="flex flex-col w-[90%] xl:text-3xl text-lg font-aileron font-thin gap-y-8 text-center md:text-left ">
                  <p className="font-thin -leading-[4rem]">
                    Every day we come together for a vision that we believe in creators and the community, and that Cult Creative can assist creators to achieve passion, purpose and paycheque.
                  </p>
                  <p className="font-thin -leading-[4rem]">
                    We stay grounded in our values that creatives are essential to
                    the workforce, everyone has creativity in them, and we’re able
                    to smash long-standing stereotypes about creatives.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="p-8 bg-[#F4F4F4] text-[#FF3600]">
            <cc.Section2 />
          </section>
        </Suspense>
      </main>
      <LastSection color="#8A5AFE" />
    </>
  );
};

export default About;
