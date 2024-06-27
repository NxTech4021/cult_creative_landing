import { makeCanonicalUrl } from "@/app/components/misc";
import Script from "next/script";
import Header from "@/app/components/Header";
import { Suspense } from "react";
import { Content } from "./Content";
import LastSection from "@/app/sections/brandsection/LastSection";

export const metadata = {
  title: "Contact Us",
  description:
    "Connect with Cult Creative. Reach out to our dedicated support team via email or Instagram for any enquiries or assistance.",
  alternates: {
    canonical: makeCanonicalUrl("/contact"),
  },
};

const Contact = () => {
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
      <main className="flex min-h-screen flex-col">
        <Suspense fallback={<p>Loading...</p>}>
          <section className="flex p-10 items-center justify-center bg-[#F4F4F4] text-[#8A5AFE] font-aileron">
            <Content />
          </section>
        </Suspense>
      </main>
      <LastSection />
    </>
  );
};

export default Contact;
