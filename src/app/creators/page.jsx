import dynamic from "next/dynamic";
import { makeCanonicalUrl } from "@/app/components/misc";
import Script from "next/script";
import Header from "@/app/components/Header";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

const CreatorFirst = dynamic(() =>
  import("@/app/sections/creatorSection/CreatorFirst")
);
const CreatorSecond = dynamic(() =>
  import("@/app/sections/creatorSection/CreatorSecond")
);
const CreatorThird = dynamic(() =>
  import("@/app/sections/creatorSection/CreatorThird")
);
const CreatorFourth = dynamic(() =>
  import("@/app/sections/creatorSection/CreatorFourth")
);
const CreatorFifth = dynamic(() =>
  import("@/app/sections/creatorSection/CreatorFifth")
);
const CreatorSixth = dynamic(() =>
  import("@/app/sections/creatorSection/CreatorSixth")
);
const CreatorLast = dynamic(() =>
  import("@/app/sections/creatorSection/CreatorLast")
);
const LastSection = dynamic(() =>
  import("@/app/sections/brandsection/LastSection")
);

export const metadata = {
  title: "Creators",
  description:
    "Join Cult Creative and monetise your social media presence with brand deals, where creators get paid hassle-free within 30 days. Sign up, get synced to amazing brand deals, and up your content creator game today.",
  openGraph: {
    title: "Get Branded Deals for UGC - Earn Side Money while Creating Content",
    // Must specify because `openGraph` has been overriden here
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: makeCanonicalUrl("/creators"),
  },
};

const Creators = () => {
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
          <CreatorFirst />
          <CreatorSecond />
          <CreatorThird />
          <CreatorFourth />
          <CreatorFifth />
          <CreatorSixth />
          <CreatorLast />
          <Toaster position="top-center" />
        </Suspense>
      </main>
      <LastSection color="#006D53" />
    </>
  );
};

export default Creators;
