"use client";

import { useState, useEffect } from "react";
import * as testim from "@/app/components/testimonials";

export const BrandTestimonials = ({ bgColor }) => {
  const [cur, setCur] = useState(0);

  useEffect(() => {
    const vidScroll = setInterval(() => setCur(cur === 2 ? 0 : cur + 1), 4000);
    return () => clearInterval(vidScroll);
  }, [cur]);

  const QuoteSource = ({ name, company }) => (
    <>
      {name}, <span className="uppercase font-bold tracking-[0]">{company}</span>.
    </>
  );

  return (
    <testim.Section bgColor={bgColor}>
      <testim.Heading>
        hear from<br />
        <span className="font-times">
          our <span className="italic">clients</span>
        </span>
      </testim.Heading>
      <testim.Body setCur={setCur}>
        <testim.Quote
          cur={cur}
          quote="We loved Cult Creative’s wide network of content creators and friendly account managers!"
        >
          <QuoteSource
            name="Irma Syazreena"
            company="Reka"
          />
        </testim.Quote>
        <testim.Quote
          cur={cur}
          quote="Cult Creative understood our goals, needs and direction. They served us professionally and filled in the gaps."
        >
          <QuoteSource
            name="Azah Aziz"
            company="Kissahh Labels"
          />
        </testim.Quote>
        <testim.Quote
          cur={cur}
          quote="Cult Creative’s attention to detail and their systematic workflow process are things we love about them."
        >
          <QuoteSource
            name="Charmaine Chow"
            company="Farm Fresh"
          />
        </testim.Quote>
      </testim.Body>
    </testim.Section>
  );
};

const FifthSection = () => (
  <BrandTestimonials bgColor="[#8A5AFE]" />
);

export default FifthSection;
