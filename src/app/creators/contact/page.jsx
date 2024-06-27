import { makeCanonicalUrl } from "@/app/components/misc";
import Header from "@/app/components/Header";
import { Suspense } from "react";
import { CreatorForm } from "./CreatorForm";
import Image from "next/image";
import LastSection from "@/app/sections/brandsection/LastSection";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Get Started as a Creator",
  description: "Fill in this form to begin your content-creation journey with Cult Creative.",
  alternates: {
    canonical: makeCanonicalUrl("/creators/contact"),
  },
};

const color = "#006D53";

const CreatorContact = () => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col">
        <Suspense fallback={<p>Loading...</p>}>
          <section className={`flex p-10 gap-5 items-center justify-center bg-[${color}]`}>
            <div className="basis-1/2 hidden xl:block">
              <Image
                src="https://storage.googleapis.com/landing-cultcreative/creator/Cult%20Creative%202%20(1).jpg"
                alt=""
                width={600}
                height={600}
                className="rounded-lg mx-auto"
              />
            </div>
            <div className="flex flex-col gap-5 text-[#F4F4F4]">
              <div className="flex flex-col gap-5">
                <h1 className="sm:text-8xl text-8xl -tracking-[.35rem]">
                  get{" "}
                  <span className="font-times italic -tracking-[.6rem] text-8xl">
                    started.
                  </span>
                </h1>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-xl font-bold -tracking-[.05rem]">
                  We’re excited to work together.
                  <br />
                  Tell us who you are and we’ll get back to you with suitable
                  brand deals.
                </p>
                <CreatorForm />
              </div>
            </div>
          </section>
          <Toaster />
        </Suspense>
      </main>
      <LastSection color={color} />
    </>
  );
};

export default CreatorContact;
