"use client";

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Carousel from "../../components/Carousel";

const vids = [
  {
    title: "Bata",
    badge1: "20 posts",
    badge2: "3M reach",
    badge3: "8.5M views",
    badge4: "411k engagement",
    url: "https://storage.googleapis.com/landing-cultcreative/brands/cut%20Bata%20-%20Case%20Study%20x%20Cult%20Creative.mp4",
  },
  {
    title: "It’s the Ship",
    badge1: "760 posts",
    badge2: "177k reach",
    badge3: "1.4M views",
    badge4: "5k engagement",
    url: "https://storage.googleapis.com/landing-cultcreative/brands/cut%20Its%20The%20Ship%20-%20Case%20Study%20x%20Cult%20Creative.mp4",
  },
  {
    title: "Dressing Paula",
    badge1: "12 posts",
    badge2: "36.2k reach",
    badge3: "42k views",
    badge4: "1.7k engagement",
    url: "https://storage.googleapis.com/landing-cultcreative/brands/cut%20Dressing%20Paula%20-%20Case%20Study%20x%20Cult%20Creative.mp4",
  },
];

const SecondSection = () => {
  const [cur, setCur] = useState(0);

  useEffect(() => {
    const vidScroll = setInterval(() => {
      setCur(cur == vids.length - 1 ? 0 : cur + 1);
    }, 4000);

    return () => {
      clearInterval(vidScroll);
    };
  }, [cur]);

  return (
    <section className="bg-[#F4F4F4] py-10 text-[#8A5AFE]">
      <div className="flex flex-col gap-5">
        <div className="flex xl:flex-row flex-col items-center gap-10 mx-auto px-8">
          <h2 className="lg:text-9xl text-7xl font-aileron font-bold text-center">
            <span className="xl:tracking-5 -tracking-[.5rem] font-normal">
              we’re
            </span>{" "}
            <span className="font-serif font-light tracking-[-.5rem] italic">
              different
            </span>
          </h2>
          <p className="xl:w-[30vw] md:max-w-[50vw] text-[22px] font-aileron font-light text-center xl:text-left">
            Rapid access to quality content by our expansive community of over
            13,000 talented creators ready to bring your vision to life.
          </p>
        </div>

        <div className="flex mx-auto">
          <Icon
            icon="pepicons-pencil:line-x"
            style={{ color: cur === 0 ? "#8A5AFE" : "black" }}
            width={100}
            onClick={() => setCur(0)}
            cursor="pointer"
          />
          <Icon
            icon="pepicons-pencil:line-x"
            style={{ color: cur === 1 ? "#8A5AFE" : "black" }}
            width={100}
            onClick={() => setCur(1)}
            cursor="pointer"
          />
          <Icon
            icon="pepicons-pencil:line-x"
            style={{ color: cur === 2 ? "#8A5AFE" : "black" }}
            width={100}
            onClick={() => setCur(2)}
            cursor="pointer"
          />
        </div>
        <div className="flex overflow-hidden">
          {vids.map((elem, i) => {
            return (
              <div key={i}>
                <Carousel
                  url={elem.url}
                  title={elem.title}
                  badge1={elem.badge1}
                  badge2={elem.badge2}
                  badge3={elem.badge3}
                  badge4={elem.badge4}
                  cur={cur}
                  setCur={setCur}
                  contentStyle="grid grid-cols-2 gap-3 px-2"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
