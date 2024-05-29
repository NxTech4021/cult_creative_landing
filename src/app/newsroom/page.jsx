"use client";
import PageMeta from "@/app/components/PageMeta";
import Header from "../components/Header";
import newsdata from "../contants/newsroom.json";
import News from "../components/News";
import LastSection from "../sections/brandsection/LastSection";

const Newsroom = () => {
  return (
    <>
      <PageMeta
        title="Newsroom"
        desc="Stay updated with Cult Creative’s newsroom. Access the latest announcements, press releases and media coverage to stay informed about our journey and industry impact."
      />
      <main className="flex min-h-screen flex-col bg-[#F4F4F4] text-white">
        <Header logo={"/images/logo.svg"} />
        <div className="text-center py-10 bg-[#8A5AFE]">
          <h className="text-2xl md:text-4xl lg:text-6xl font-times font-semibold">
            Newsroom
          </h>
          <p className="my-6">Read our news from top talents</p>
        </div>
        <div className="px-5 py-10 bg-slate-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {newsdata.map((elem, i) => (
              <div key={i}>
                <News
                  title={elem.title}
                  date={elem.date}
                  link={elem.link}
                  source={elem.source}
                  image={elem.image}
                />
              </div>
            ))}
          </div>
        </div>
        <LastSection color={"#1340FF"} />
      </main>
    </>
  );
};

export default Newsroom;
