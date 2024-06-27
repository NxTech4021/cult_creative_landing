import dynamic from "next/dynamic";
import { makeCanonicalUrl } from "@/app/components/misc";
import Script from "next/script";
import Header from "@/app/components/Header";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

const HomeFirst = dynamic(
  () => import("@/app/sections/homeSection/homeFirst"),
  { ssr: true }
);
const HomeTwo = dynamic(() => import("@/app/sections/homeSection/homeTwo"));
const HomeThree = dynamic(() => import("@/app/sections/homeSection/homeThree"));
const HomeCompanies = dynamic(() =>
  import("@/app/sections/homeSection/companies")
);
const HomeFour = dynamic(() => import("@/app/sections/homeSection/homeFour"));
const HomeFive = dynamic(() => import("@/app/sections/homeSection/homeFive"));
const HomeSix = dynamic(() => import("@/app/sections/homeSection/homeSix"));
const LastSection = dynamic(() =>
  import("@/app/sections/brandsection/LastSection")
);

export const metadata = {
  title: {
    absolute: "Cult Creative",
  },
  description:
    "Find top creators from across Southeast Asia for your next project. Trusted by leading companies, our platform simplifies the hiring process for both parties.",
  openGraph: {
    title:
      "Discover UGC Creators, Brand Deals and Creator Marketing Solutions with SEA’s Chosen Platform",
  },
  alternates: {
    canonical: makeCanonicalUrl("/"),
  },
};

const Home = () => {
  return (
    <>
      {/* <!-- Snitcher analytics code --> */}
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
      <main className="flex min-h-screen flex-col max-w-[100vw]">
        <Suspense fallback={<p>Loading...</p>}>
          <HomeFirst />
          <HomeTwo />
          <HomeThree />
          <HomeCompanies title="trusted by 900+ companies" />
          <HomeFour />
          <HomeFive />
          <HomeSix />
          <Toaster position="top-center" />
        </Suspense>
      </main>
      <LastSection color="#1340FF" />
    </>
  );
};

export default Home;
