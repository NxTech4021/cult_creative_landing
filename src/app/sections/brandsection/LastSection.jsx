"use client";

import Footer from "@/app/components/Footer";
import { Icon } from "@iconify/react";

const LastSection = ({ color }) => {
  return (
    <section className="bg-[#F4F4F4] py-10 px-20">
      <Footer hoverText={color} />
      <div className="flex gap-3 mt-10 justify-end">
        <a href="https://wa.me/60162678757" target="_blank">
          <Icon icon="ic:baseline-whatsapp" width={30} color="black" />
        </a>
        <a href="https://www.instagram.com/cultcreativeasia/" target="_blank">
          <Icon icon="mdi:instagram" width={30} color="black" />
        </a>
        <a
          href="https://my.linkedin.com/company/cultcreativeapp"
          target="_blank"
        >
          <Icon icon="mdi:linkedin" width={30} color="black" />
        </a>
        <a href="https://www.youtube.com/@cultcreativeapp" target="_blank">
          <Icon icon="mdi:youtube" width={30} color="black" />
        </a>
      </div>
    </section>
  );
};

export default LastSection;
