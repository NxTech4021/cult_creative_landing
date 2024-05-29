import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="text-[#231F20]">
      <div className="flex item-start gap-10 xl:gap-40 flex-wrap">
        <div className="grow">
          <Image
            src={"/images/logo1.png"}
            alt="Cult creative"
            width={130}
            height={130}
          />
          <div className="mt-10">
            <p className="uppercase font-light">202001018157 (1374477-W)</p>
            <p className="uppercase font-light">Copyright 2024</p>
          </div>
        </div>
        <div>
          <p className="font-bold text-2xl -tracking-[.1rem]">Cult Careers</p>
          <ul className="font-light text-sm">
            <Link
              href="https://www.cultcreative.asia/employers"
              target="__blank"
            >
              <li className="hover:text-[#8A5AFE] duration-150 cursor-pointer">
                Hire a Creative
              </li>
            </Link>
            <Link
              href="https://web.cultcreative.asia/?utm_source=wix&utm_medium=job_page&utm_campaign=general_CCWL_website"
              target="__blank"
            >
              <li className="hover:text-[#8A5AFE] duration-150 cursor-pointer">
                Apply to Creative Jobs
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <p className="font-bold text-2xl -tracking-[.1rem]">Company</p>
          <ul className="font-light text-sm">
            <Link href="/about">
              <li className="hover:text-[#8A5AFE] duration-150 cursor-pointer">
                About Us
              </li>
            </Link>
            <Link href="/faq">
              <li className="hover:text-[#8A5AFE] duration-150 cursor-pointer">
                FAQ
              </li>
            </Link>
            <Link href="/contact">
              <li className="hover:text-[#8A5AFE] duration-150 cursor-pointer">
                Contact Us
              </li>
            </Link>
            <Link href="/resources">
              <li className="hover:text-[#8A5AFE] duration-150 cursor-pointer">
                Resources
              </li>
            </Link>
            <Link href="/newsroom">
              <li className="hover:text-[#8A5AFE] duration-150 cursor-pointer">
                Newsroom
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <p className="font-bold text-2xl -tracking-[.1rem]">Support</p>
          <ul className="font-light text-sm">
            <Link href="/privacy-policy">
              <li className="hover:text-[#8A5AFE] duration-150 cursor-pointer">
                Privacy Policy
              </li>
            </Link>
            <Link href="/terms-and-conditions">
              <li className="hover:text-[#8A5AFE] duration-150 cursor-pointer">
                Terms and Conditions
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
