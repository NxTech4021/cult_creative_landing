import Companies from "@/app/components/Companies";

const optics = [
  {
    name: "the edge markets",
    path: "/images/Main/the-edge-markets-logo-vector.png",
    link: "https://theedgemalaysia.com/article/digital-creative-setting-professional-platform-artists",
  },
  {
    name: "BFM",
    path: "/images/Main/BFM_89.9_logo.svg.png",
    link: "https://www.bfm.my/podcast/enterprise/open-for-business/from-linkedin-for-creatives-to-connecting-brands-with-creators-cult-creatives-origins-pivot-and-fintech-future",
  },
  {
    name: "buro",
    path: "/images/Main/buro.png",
    link: "https://www.buro247.my/culture/insiders/cuulture-endures-cult-creative-kl.html",
  },
  {
    name: "disruptr",
    path: "/images/Main/D0Ybamhe_400x400.jpg",
    link: "https://www.disruptr.com.my/cult-creative-partners-mitoworld-to-launch-1st-metaverse-exhibition/",
  },
  {
    name: "digital malaysia news",
    path: "/images/Main/DNA.jpeg",
    link: "https://www.digitalnewsasia.com/startups/cult-creative-secures-us107500-seed-funding-hive-southeast-asia-develop-its-creator",
  },
  {
    name: "new straits times",
    path: "/images/Main/logo-nst-ogimage.webp",
    link: "https://www.nst.com.my/lifestyle/bots/2021/10/736136/tech-helping-graduates-move-creative-industry",
  },
  {
    name: "juice",
    path: "/images/Main/juice-logo.png",
    link: "https://juiceonline.com/msian-creatives-find-solace-in-new-app-platform-cult-creative-which-allows-users-to-connect-collaborate/",
  },
  {
    name: "tatler",
    path: "/images/Main/tatler.png",
    link: "https://www.tatlerasia.com/culture/arts/introducing-cult-creative-malaysias-first-professional-networking-platform-for-creatives",
  },
  {
    name: "the malaysia reserve",
    path: "/images/Main/malasyiaReserve.webp",
    link: "https://themalaysianreserve.com/2022/09/14/six-start-ups-receive-rm1-57m-investment-for-biz-expansion/",
  },
  {
    name: "vulcan",
    path: "/images/Main/vulcan.png",
    link: "https://vulcanpost.com/848582/cult-creative-malaysia-seed-funding-the-hive-southeast-asia/",
  },
];

const HomeTwo = () => {
  return (
    <section className="bg-[#F4F4F4] py-8 px-5">
      <Companies
        title="as seen on"
        companiesImages={optics}
        rounded="rounded-full"
        type="optics"
        imgStyle="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      />
    </section>
  );
};

export default HomeTwo;
