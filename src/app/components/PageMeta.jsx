// Component for page metadata and initializing Google Analytics

import ReactGA from "react-ga4";

// If unspecified:
// * `ogTitle` matches `title`
// * `ogType` has value `"website"`
// * `ogDesc` matches `desc`
// More details: https://ogp.me/
// Guidelines: https://ahrefs.com/blog/open-graph-meta-tags/
export const PageMeta = ({ title, desc, ogTitle, ogType, ogImage, ogUrl, ogDesc }) => {
  ReactGA.initialize("G-NP1X4Y7S7R");

  return (
    <>
      {/*
      Without the outer braces, React treats `{children}` and its adjacent substring as elements of an array

      Apparently, using a hyphen instead of a pipe as a separator improves SEO:
      https://www.semrush.com/blog/case-study-should-you-add-pipes-or-dashes-to-your-title-ag-/
      */}
      <title>{`${title} - Cult Creative`}</title>
      <meta name="description" content={desc} />
      {/* Do not insert `<title>` suffix; guidelines recommend that branding be left out */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:type" content={ogType || "website"} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      {/* `og:desc` states that this is optional, but `desc` is a nice default to have */}
      <meta property="og:desc" content={ogDesc || desc} />
    </>
  );
};

export default PageMeta;
