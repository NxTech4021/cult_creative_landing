import { Snitcher } from "@/app/components/Snitcher";
import Header from "@/app/components/Header";
import newsdata from "@/app/contants/newsroom.json";
import News from "@/app/components/News";
import LastSection from "@/app/sections/brandsection/LastSection";

export const metadata = {
  title: "Newsroom",
  description:
    "Stay updated with Cult Creative’s newsroom. Access the latest announcements, press releases and media coverage to stay informed about our journey and industry impact.",
  alternates: {
    canonical: "/newsroom",
  },
};

const Newsroom = () => {
  return (
    <>
      <Snitcher />
      <Header />
      <main className="flex min-h-screen flex-col bg-[#F4F4F4] text-white">
        <div className="text-center py-10 bg-[#8A5AFE]">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-times font-semibold">
            Newsroom
          </h1>
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
      </main>
      <LastSection color="#1340FF" />
    </>
  );
};

export default Newsroom;
