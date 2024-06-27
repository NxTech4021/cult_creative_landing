import Companies from "@/app/components/Companies";

const companies = [
  {
    name: "melium",
    path: "/images/brands/melium.png",
  },
  {
    name: "indigo",
    path: "/images/brands/indigo.png",
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
    path: "/images/brands/pavillion.png",
  },
  {
    name: "dressing paula",
    path: "/images/brands/dressingpaula.png",
  },
];

const SixthSection = ({ title }) => {
  return (
    <section className="bg-[#F4F4F4] py-10 px-5">
      <Companies
        title={title}
        companiesImages={companies}
        type="companies"
        rounded="rounded-full"
      />
    </section>
  );
};

export default SixthSection;
