"use client";

import { useState, useEffect } from "react";
import * as testim from "@/app/components/testimonials";

const CreatorFifth = () => {
  const [cur, setCur] = useState(0);

  useEffect(() => {
    const vidScroll = setInterval(() => setCur(cur === 2 ? 0 : cur + 1), 4000);
    return () => clearInterval(vidScroll);
  }, [cur]);

  const QuoteSource = ({ children }) => (
    <span className="font-bold uppercase">{children}</span>
  );

  return (
    <testim.Section bgColor="[#006D53]">
      <testim.Heading>
        trusted<br />
        <span className="font-times">
          by <span className="italic -tracking-[.4rem] lg:-tracking-[.8rem]">creators</span>
        </span>
      </testim.Heading>
      <testim.Body setCur={setCur}>
        <testim.Quote
          cur={cur}
          quote="Cult Creative has been exceptional in bridging the connection between the client and myself, articulating the client’s brand identity with precision."
        >
          <QuoteSource>Anniecia Thomas</QuoteSource>
        </testim.Quote>
        <testim.Quote
          cur={cur}
          quote="I appreciate Cult Creative for guiding me when they didn’t have to."
        >
          <QuoteSource>Wong Yuet Ting</QuoteSource>
        </testim.Quote>
        <testim.Quote
          cur={cur}
          quote="Cult Creative deserves praise for their attention to detail. They carefully considered my concerns throughout the campaign."
        >
          <QuoteSource>Arina Farhah</QuoteSource>
        </testim.Quote>
      </testim.Body>
    </testim.Section>
  );
};

export default CreatorFifth;
