"use client";
import dynamic from "next/dynamic";
import PageMeta from "@/app/components/PageMeta";
import Header from "@/app/components/Header";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

const FirstSection = dynamic(() => import("@/app/sections/brandsection/FirstSection"));
const SecondSection = dynamic(() => import("@/app/sections/brandsection/SecondSection"));
const ThirdSection = dynamic(() => import("@/app/sections/brandsection/ThirdSection"));
const FourthSection = dynamic(() => import("@/app/sections/brandsection/FourthSection"));
const FifthSection = dynamic(() => import("@/app/sections/brandsection/FifthSection"));
const SixthSection = dynamic(() => import("@/app/sections/brandsection/SixthSection"));
const SeventhSection = dynamic(() => import("@/app/sections/brandsection/SeventhSection"));
const LastSection = dynamic(() => import("@/app/sections/brandsection/LastSection"));

const Brands = () => {
  return (
    <>
      <PageMeta
        title="Brands"
        desc="Tailored digital creator marketing solutions for SMEs and brands with flexible UGC and KOL campaign management to amplify your brand’s reach and engagement."
        ogTitle="Digital Marketing Solutions for SMEs and Brands - Flexible UGC and KOL Campaign Management Agency"
      />
      <main className="flex min-h-screen flex-col">
        <Header logo="/images/logo.svg" />
        <Suspense fallback={<p>Loading...</p>}>
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <FifthSection />
          <SixthSection title="join 900+ other companies using Cult Creative" />
          <SeventhSection />
          <LastSection color="#8A5AFE" />
          <Toaster position="top-center" />
        </Suspense>
      </main>
    </>
  );
};

export default Brands;
