"use client";
import dynamic from "next/dynamic";
import PageMeta from "@/app/components/PageMeta.jsx";
import Header from "@/app/components/Header";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

const HomeFirst = dynamic(
  () => import("@/app/sections/homeSection/homeFirst"),
  { ssr: true }
);
const HomeTwo = dynamic(() => import("@/app/sections/homeSection/homeTwo"));
const HomeThree = dynamic(() => import("@/app/sections/homeSection/homeThree"));
const HomeCompanies = dynamic(() => import("@/app/sections/homeSection/companies"));
const HomeFour = dynamic(() => import("@/app/sections/homeSection/homeFour"));
const HomeFive = dynamic(() => import("@/app/sections/homeSection/homeFive"));
const HomeSix = dynamic(() => import("@/app/sections/homeSection/homeSix"));
const LastSection = dynamic(() => import("@/app/sections/brandsection/LastSection"));

const Home = () => {
  return (
    <>
      <PageMeta
        title="Welcome"
        desc="Find top creators from across Southeast Asia for your next project. Trusted by leading companies, our platform simplifies the hiring process for both parties."
        ogTitle="Discover UGC Creators, Brand Deals and Creator Marketing Solutions with SEA’s Chosen Platform"
      />
      <main className="flex min-h-screen flex-col max-w-[100vw]">
        <Header logo="/images/logo.svg" />
        <Suspense fallback={<p>Loading...</p>}>
          <HomeFirst />
          <HomeTwo />
          <HomeThree />
          <HomeCompanies title="trusted by 900+ companies" />
          <HomeFour />
          <HomeFive />
          <HomeSix />
          <LastSection color="#1340FF" />
          <Toaster position="top-center" />
        </Suspense>
      </main>
    </>
  );
};

export default Home;
