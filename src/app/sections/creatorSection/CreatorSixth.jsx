import { Steps, Step } from "@/app/components/steps";

const Step_Local = ({ number, children }) => (
  <Step borderColor="[#006D53]" number={number}>
    {children}
  </Step>
);

const CreatorSixth = () => {
  return (
    <section className="py-8 bg-[#F4F4F4] text-[#006D53]">
      <h2 className="font-aileron font-light text-7xl sm:text-6xl md:text-7xl lg:text-[7rem] text-center mt-4 -tracking-[.2rem] md:-tracking-[.30rem]">
        how it{" "}
        <span className="font-serif italic -tracking-[.3rem]">works</span> for{" "}
        <span className="font-serif italic -tracking-[.3rem]">you</span>:
      </h2>
      <Steps>
        <Step_Local number="01">
          Fill in our form to opt in as a creator. Show off past work to be
          considered.
        </Step_Local>
        <Step_Local number="02">
          When brands shortlist you, a Cult Creative team member will be in
          touch.
        </Step_Local>
        <Step_Local number="03">
          Campaign details, products and so on are automated. We’ll sort that
          out for you.
        </Step_Local>
        <Step_Local number="04">
          Just focus on being creative, film your content, then get paid within
          30 days.
        </Step_Local>
      </Steps>
    </section>
  );
};

export default CreatorSixth;
