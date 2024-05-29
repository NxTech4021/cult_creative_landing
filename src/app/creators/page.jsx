"use client";
import PageMeta from "@/app/components/PageMeta";
import Header from "@/app/components/Header";
import { Suspense } from "react";
import CreatorFirst from "@/app/sections/creatorSection/CreatorFirst";
import CreatorSecond from "@/app/sections/creatorSection/CreatorSecond";
import CreatorThird from "@/app/sections/creatorSection/CreatorThird";
import CreatorFourth from "@/app/sections/creatorSection/CreatorFourth";
import CreatorFifth from "@/app/sections/creatorSection/CreatorFifth";
import CreatorSixth from "@/app/sections/creatorSection/CreatorSixth";
import CreatorLast from "@/app/sections/creatorSection/CreatorLast";
import LastSection from "@/app/sections/brandsection/LastSection";
import { Toaster } from "react-hot-toast";

const Creators = () => {
  return (
    <>
      <PageMeta
        title="Creators"
        desc="Join Cult Creative and monetize your social media presence with branded deals, where creators get paid hassle-free within 30 days. Sign up, get synced to amazing brand deals, and upgrade your content creator game today."
        ogTitle="Get Branded Deals for UGC - Earn Side Money while Creating Content"
      />
      <main className="flex min-h-screen flex-col">
        <Header logo={"/images/logo.svg"} />
        <Suspense fallback={<p>Loading...</p>}>
          <CreatorFirst />
          <CreatorSecond />
          <CreatorThird />
          <CreatorFourth />
          <CreatorFifth />
          <CreatorSixth />
          <CreatorLast />
          <LastSection color={"#006D53"} />
          <Toaster position="top-center" />
        </Suspense>
      </main>
    </>
  );
};

export default Creators;
