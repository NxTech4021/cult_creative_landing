import { makeCanonicalUrl } from "@/app/components/misc";
import Script from "next/script";
import Header from "@/app/components/Header";
import { Content } from "./Content";
import LastSection from "@/app/sections/brandsection/LastSection";

export const metadata = {
  title: "FAQ",
  description:
    "Find answers to common questions here! Contact our support team via email or Instagram for enquiries.",
  alternates: {
    canonical: makeCanonicalUrl("/faq"),
  },
};

const Faq = () => {
  return (
    <>
      <Script
        id="snitcher-script"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              !function(s,n,i,t,c,h){s.SnitchObject=i;s[i]||(s[i]=function(){
              (s[i].q=s[i].q||[]).push(arguments)});s[i].l=+new Date;c=n.createElement(t);
              h=n.getElementsByTagName(t)[0];c.src='//snid.snitcher.com/8426934.js';
              h.parentNode.insertBefore(c,h)}(window,document,'snid','script');

              snid('verify', '8426934');
            `,
        }}
      />

      <Header />
      <main className="relative z-1 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px] text-black">
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
          <Content />
        </div>
      </main>
      <LastSection />
    </>
  );
};

export default Faq;
