import dynamic from "next/dynamic";
import { makeCanonicalUrl } from "@/app/components/misc";
import Header from "@/app/components/Header";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

const FirstSection = dynamic(() =>
  import("@/app/sections/brandsection/FirstSection")
);
const SecondSection = dynamic(() =>
  import("@/app/sections/brandsection/SecondSection")
);
const ThirdSection = dynamic(() =>
  import("@/app/sections/brandsection/ThirdSection")
);
const FourthSection = dynamic(() =>
  import("@/app/sections/brandsection/FourthSection")
);
const FifthSection = dynamic(() =>
  import("@/app/sections/brandsection/FifthSection")
);
const SixthSection = dynamic(() =>
  import("@/app/sections/brandsection/SixthSection")
);
const SeventhSection = dynamic(() =>
  import("@/app/sections/brandsection/SeventhSection")
);
const LastSection = dynamic(() =>
  import("@/app/sections/brandsection/LastSection")
);

export const metadata = {
  title: "Brands",
  description:
    "Tailored digital creator marketing solutions for SMEs and brands with flexible UGC and KOL campaign management to amplify your brand’s reach and engagement.",
  openGraph: {
    title:
      "Digital Marketing Solutions for SMEs and Brands - Flexible UGC and KOL Campaign Management Agency",
    // Must specify because `openGraph` has been overriden here
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: makeCanonicalUrl("/brands"),
  },
};

const Brands = () => {
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
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <FifthSection />
          <SixthSection title="join 900+ other companies using Cult Creative" />
          <SeventhSection />
          <Toaster position="top-center" />
        </Suspense>
      </main>
      <LastSection color="#8A5AFE" />
    </>
  );
};

export default Brands;
