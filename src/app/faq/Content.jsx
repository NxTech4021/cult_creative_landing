"use client";

import { useState } from "react";

const Item = ({ title, text }) => (
  <div className={"grid grid-cols-1 md:grid-cols-2 gap-5 px-5 py-10 border-t-2 border-t-gray-200"}>
    <p className="font-bold text-gray-800">{title}</p>
    <p className="text-gray-600">{text}</p>
  </div>
);

const CreatorsFaq = () => (
  <div className="flex flex-col text-lg">
    <Item
      title="Do I have to pay to use Cult Creative?"
      text="Nope! Cult Creative is a free platform and won’t cost you anything."
    />
    <Item
      title="Who do I contact if I have any questions/enquiries?"
      text="You may email our support team at support@cultcreative.asia or DM us on Instagram at @cultcreativeasia."
    />
  </div>
);

export const Content = () => {
  const [currentTab, setCurrentTab] = useState("creators");

  const handleChangeTab = (e) => setCurrentTab(e.target.value);

  return (
    <>
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
      {currentTab === "creators" && (<CreatorsFaq />)}
    </>
  );
};
