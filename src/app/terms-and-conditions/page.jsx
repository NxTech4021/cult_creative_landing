"use client";
import PageMeta from "@/app/components/PageMeta";
import Header from "../components/Header";
import Image from "next/image";
import LastSection from "../sections/brandsection/LastSection";

const Terms = () => {
  return (
    <>
      <PageMeta
        title="Terms and Conditions"
        desc="Understand Cult Creative’s Terms and Conditions. Discover our guidelines and agreements for using our platform and services."
      />
      <main className="flex min-h-screen flex-col bg-[#F4F4F4] text-white">
        <Header logo={"/images/logo.svg"} />
        <div className="text-center py-10 bg-[#8A5AFE]">
          <h className="text-2xl md:text-4xl lg:text-6xl font-times font-semibold">
            Terms and Conditions
          </h>
        </div>
        {/* <div className="w-[70%] py-10 mx-auto text-black text-justify font-times text-[1.1rem]">
          <p>
            This Subscriber Agreement (“Agreement”) is the definitive legal
            document that shall explain and enforce the rights and obligation of
            the parties herein{" "}
          </p>
          <p className="my-2">BETWEEN</p>
          <p>
            CULT CREATIVE SDN BHD (COMPANY NO. 1374477-W), a company incorporated
            in Malaysia and under the laws of Malaysia with its registered address
            at 568-9-33, 9th Floor Mutiara Office Suites Kompleks Mutiara 3 1/2
            Miles, Jalan Ipoh, 51200 Kuala Lumpur, W.P Kuala Lumpur, Malaysia and
            having its business address at Lot 4-401 & 4-402, Level 4, The
            Starling Mall, Jalan SS21/37, Damansara Utama, 47400 Petaling Jaya,
            Selangor Darul Ehsan, Malaysia (“Company”) as the provider of the
            online service platform more specifically known as “Cult Creative”
            (“Cult Creative”) of the first part;
          </p>
          <p className="my-2">AND</p>
          <p>
            You, the user of Cult Creative more specifically identified via the
            registration of a Cult Creative user account (“Account”) which is kept
            within the records of the Company of the second part (hereinafter
            shall be more specifically referred to as “You” or “Your” whichever
            the context shall requires).
          </p>
          <p className="border-slate-950 border-2 p-2 my-5">
            NOTE: Please read the terms and conditions of this Agreement carefully
            as they affect Your rights and liabilities under the law. If You do
            not agree to any of these terms and conditions, please do not register
            for or use Cult Creative. If You have any questions, please contact
            the Company prior to any registration for or use of Cult Creative.
          </p>
          <p>
            NOW THEREFORE HEREWITH that both the Company and You mutually agree as
            follows:
          </p>
        </div> */}
        <div className="bg-white">
          {Array(13)
            .fill(1)
            .map((e, i) => (
              <Image
                key={i}
                src={`/tnc/tnc-${i + 1}.jpg`}
                width={400}
                height={600}
                alt="1"
                className="bg-black bg-clip-text sm:w-[65%] w-full mx-auto"
                draggable="false"
              />
            ))}
          {/* <Image
            src={"/tnc/tnc-1.jpg"}
            width={400}
            height={600}
            alt="1"
            className="bg-black bg-clip-text sm:w-[50%] w-full mx-auto"
            draggable="false"
          /> */}
        </div>
        <LastSection color={"#1340FF"} />
      </main>
    </>
  );
};

export default Terms;
