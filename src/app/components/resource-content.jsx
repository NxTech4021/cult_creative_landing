import Header from "@/app/components/Header";
import LastSection from "@/app/sections/brandsection/LastSection";

// Components for content of Resources pages
// Recommended import: `import * as rc from "@/app/components/resource-content";`

// `children` should contain the elements defined here
// `keywords` shall be an array of strings
export const Page = ({ children, keywords }) => (
  <>
    <Header />
    <main className="flex min-h-screen flex-col bg-[#F4F4F4] text-white">
      <div className="text-center py-10 bg-[#8A5AFE]">
        {/* Don't use `h1`, because each article has its own title */}
        <p className="text-2xl md:text-4xl lg:text-6xl font-times font-semibold">
          Resources
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 p-10 bg-slate-50 text-gray-500">
        {/* Content */}
        <div className="col-span-2 text-pretty text-[1.1rem]">
          {children}
        </div>

        {/* Keywords */}
        <div className="col-span-1 p-5">
          <p className="text-start text-2xl font-semibold text-pretty text-black">
            Keywords
          </p>
          <div className="flex flex-wrap gap-2 my-4">
            {keywords.map((elem, i) => (
              <div key={i} className="p-2 bg-[#DFD4FA] text-[#8A5AFE] rounded-full inline-block px-3 text-xs font-semibold font-aileron">
                {elem}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
    <LastSection color="#1340FF" />
  </>
);

export const h1 = ({ children }) => (
  <h1
    className="text-start text-4xl font-semibold text-pretty text-black mb-10"
    style={{ lineHeight: 1.2 }}
  >
    {children}
  </h1>
);

export const h2 = ({ children }) => (
  <h2 className="text-start text-2xl font-semibold text-pretty text-black my-10">
    {children}
  </h2>
);

export const h3 = ({ children }) => (
  <h2 className="text-start text-1xl font-semibold text-pretty text-black my-10">
    {children}
  </h2>
);

export const p = ({ children }) => (
  <p className="my-3">
    {children}
  </p>
);

export const ol = ({ children }) => (
  <ol className="list-decimal ml-10 my-5">
    {children}
  </ol>
);

export const ul = ({ children }) => (
  <ul className="list-disc ml-10 my-5">
    {children}
  </ul>
);

export const li = ({ children }) => (
  <li className="my-3">
    {children}
  </li>
);

export const a = ({ href, children }) => (
  <a
    className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
    href={href}
  >
    {children}
  </a>
);
