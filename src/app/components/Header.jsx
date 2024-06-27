"use client";

import useToggle from "@/app/hooks/toggle";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import HeaderButton from "@/app/components/HeaderButton";
import { Icon } from "@iconify/react";
import NavSmall from "@/app/components/NavSmall";

const Header = () => {
  const [state, toggle, setToggle] = useToggle();

  return (
    <nav className={`py-4 px-8 bg-[#F4F4F4] sticky top-0 z-10 ${
      !state && "drop-shadow-md"
    }`}>
      <div className="flex items-center">
        <Link href="/" onClick={() => setToggle(false)}>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Image
              src="/images/logo.svg"
              alt="Cult Creative header logo"
              width={180}
              height={180}
              className="text-cyan-600"
              priority
            />
          </motion.div>
        </Link>
        <div className="sm:flex ms-auto gap-5 hidden">
          <HeaderButton
            textColor="#8A5AFE"
            borderColor="#8A5AFE"
            btnStyle=""
          />
        </div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="flex ms-auto gap-5 sm:hidden"
          onClick={toggle}
        >
          <Icon
            icon="iconamoon:menu-burger-horizontal"
            color="black"
            width={26}
            cursor="pointer"
          />
        </motion.div>
      </div>
      <NavSmall
        isVisible={state}
        linerstart="#FAF9F6"
        linerEnd="#8A5AFE"
        btnColor="#5224be"
        btnstyle=""
      />
    </nav>
  );
};

export default Header;
