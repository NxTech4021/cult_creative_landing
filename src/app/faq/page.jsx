"use client";
import { useState } from "react";
import PageMeta from "@/app/components/PageMeta";
import Header from "../components/Header";
import LastSection from "../sections/brandsection/LastSection";

const Accordion = () => {
  const [currentTab, setCurrentTab] = useState("creators");

  const handleChangeTab = (e) => setCurrentTab(e.target.value);

  const Item = ({ title, text }) => (
    <div className={"grid grid-cols-1 md:grid-cols-2 gap-5 px-5 py-10 border-t-2 border-t-gray-200"}>
      <p className="font-bold text-gray-800">{title}</p>
      <p className="text-gray-600">{text}</p>
    </div>
  );

  const creators = (
    <div className="flex flex-col text-lg">
      <Item
        title={"Do I have to pay to use Cult Creative?"}
        text={"Nope! Cult Creative is a free platform and won’t cost you anything."}
      />
      <Item
        title={"Who do I contact if I have any questions/inquiries?"}
        text={"You may email our support team at support@cultcreative.asia or DM us on Instagram at @cultcreativeasia."}
      />
    </div>
  );

  return (
    <>
      <PageMeta
        title="FAQ"
        desc="Find answers to common questions here! Contact our support team via email or Instagram for inquiries."
      />
      <Header />
      <section className="relative z-1 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px] text-black">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary text-[#8A5AFE]">
                  FAQ
                </span>
                <h2 className="mb-4 text-3xl font-bold sm:text-[40px]/[48px]">
                  Any Questions? Look Here
                </h2>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-row gap-5 px-5 my-10 font-aileron font-bold">
            <button
              value={"creators"}
              className={`${
                currentTab === "creators" &&
                "border-b-4 border-b-indigo-500 rounded-sm transition ease-in-out duration-300"
              }`}
              onClick={handleChangeTab}
            >
              Creator
            </button>
          </div>

          {/* Items */}
          {currentTab === "creators" && creators}
        </div>
      </section>
      <LastSection />
    </>
  );
};

export default Accordion;
