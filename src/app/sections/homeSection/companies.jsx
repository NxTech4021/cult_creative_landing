import Companies from "@/app/components/Companies";

const companies = [
  {
    name: "melium",
    path: "/images/brands/melium.png",
  },
  {
    name: "indigo",
    path: "/images/Main/indigo.png",
  },
  {
    name: "bata",
    path: "/images/brands/bata.jpg",
  },
  {
    name: "huckleberry",
    path: "/images/brands/huckleberry.png",
  },
  {
    name: "longchamp",
    path: "/images/brands/longchamp.png",
  },
  {
    name: "farmfresh",
    path: "/images/brands/farmfresh.png",
  },
  {
    name: "pavillion",
    path: "/images/Main/pavi.png",
  },
  {
    name: "dressing paula",
    path: "/images/Main/uniqlo.png",
  },
];

const HomeCompanies = ({ title }) => {
  return (
    <section className="bg-[#F4F4F4] py-8 px-5">
      <Companies
        title={title}
        companiesImages={companies}
        rounded="rounded-full"
        type="companies"
        imgStyle="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      />
    </section>
  );
};

export default HomeCompanies;
