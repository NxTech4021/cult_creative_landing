import { Steps, Step } from "@/app/components/steps";

const Step_Local = ({number, children}) => (
  <Step borderColor="slate-50" number={number}>
    {children}
  </Step>
);

const ThirdSection = () => {
  return (
    <section className="py-8 bg-[#006D53] text-[#F4F4F4]">
      <h2 className="font-aileron font-light text-7xl sm:text-6xl md:text-7xl lg:text-[7rem] text-center mt-4 -tracking-[.2rem] md:-tracking-[.5rem]">
        creator{" "}
        <span className="font-serif italic -tracking-[.3rem]">marketing</span>,
        simplified
      </h2>
      <Steps>
        <Step_Local number="01">
          Sign up and fill in a brief of your campaign objectives.
        </Step_Local>
        <Step_Local number="02">
          Creators are shortlisted and matched to your project at speed.
        </Step_Local>
        <Step_Local number="03">
          Our campaign experts guide the approval process and the content is posted.
        </Step_Local>
        <Step_Local number="04">
          Opt in for performance analytics and any next steps.
        </Step_Local>
      </Steps>
    </section>
  );
};

export default ThirdSection;
