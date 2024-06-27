import resources from "@/app/contants/resources.json";
import { makeCanonicalUrl } from "@/app/components/misc";
import * as rc from "@/app/components/resource-content";

const title = "Unlocking the Power of Influencer Brand Deals";

const keywords = [
  "UGC marketing",
  "Influencer marketing",
  "Brand deals",
  "Content creator tips",
];

export const metadata = {
  title: title,
  description: "Creators signed up with Cult Creative can identify their niche, build credibility and land brand deals hassle-free. We handle the administrative work so you can focus on being creative.",
  keywords: keywords,
  openGraph: {
    images: [resources[1].image],
  },
  alternates: {
    canonical: makeCanonicalUrl("/resources/unlocking-the-power-of-influencer-brand-deals"),
  },
};

const Resource2 = () => {
  return (
    <>
      <rc.Page keywords={keywords}>
        <rc.h1>{title}</rc.h1>
        <rc.p>
          Influencer and User-Generated Content (UGC) marketing is growing rapidly in Malaysia. Brands begin to recognise the power that social media users have in boosting their brand awareness, customer engagement, and ultimately, sales.
        </rc.p>
        <rc.p>
          This new form of marketing has become an integral part of the marketing strategy for many businesses. By leveraging the fame and reputation of popular social media figures such as TikTokers, YouTubers, and Instagrammers, brands tap into new audiences and create a sense of authenticity in their marketing campaigns.
        </rc.p>
        <rc.p>
          As a regular social media creator and content creator, you could take advantage of this growing marketing trend to secure your next brand deal.
        </rc.p>

        <rc.h2>How Can You, as a Content Creator, Start Unlocking Brand Deals?</rc.h2>
        <rc.p>
          It might be overwhelming to start. But firstly, begin small and identify your niche. If it’s an area that you’re an expert in or have a passion/interest in, then that’s where you can find your place. Creators can then carry on by creating high quality and engaging content that resonates with followers.
        </rc.p>
        <rc.p>
          Secondly, as a content creator, work on building your reputation and credibility by consistently delivering valuable content and engaging with your audience.
        </rc.p>
        <rc.p>
          That means posting consistently and speaking to your audience. Engaging with them, answering comments and replies, and learning more from them about their needs and desires.
        </rc.p>
        <rc.p>
          Thirdly, you can also consider joining influencer marketing platforms or agencies that connect you with brands. These platforms provide opportunities for content creators to gain access to a wider range of brand collaborations, showcase your talents, and increase earning potential and a side income.
        </rc.p>

        <rc.h2>How Do You Get Started on Cult Creative’s Creator Platform?</rc.h2>
        <rc.p>
          Cult Creative is just one of the platforms that can help you score your next brand deal with little to no fuss. And by fuss, we mean those pesky admin work that consumes so much of our time.
        </rc.p>
        <rc.p>
          Here’s how it works:
        </rc.p>
        <rc.ol>
          <rc.li>
            Opt into the platform by filling up{" "}
            <rc.a href="https://airtable.com/appMK1DimSupLgFeU/shrc6kh4QsG1N0geq">
              this form
            </rc.a>.
          </rc.li>
          <rc.li>
            We match you to brand deals that fit your personal brand.
          </rc.li>
          <rc.li>
            You receive a brief of the campaign, which includes details of the client, product, and campaign.
          </rc.li>
          <rc.li>
            Get those creative juices pumping and start creating.
          </rc.li>
          <rc.li>
            Get paid!
          </rc.li>
        </rc.ol>
        <rc.p>
          It’s truly that simple.
        </rc.p>
        <rc.p>
          Those dreary tasks of dealing with clients and chasing them for payments can be a thing of the past because Cult Creative will do all of those things for you. So, you can focus on being creative and making money.
        </rc.p>
        <rc.p>
          Oh, and did I mention it’s <em>free</em> to use?
        </rc.p>
        <rc.p>
          As the creator economy continues to boom, now is the perfect time for aspiring creators to jump onto the content creation train. Start your creator journey with us and access all the best brand partnerships across various interests from fashion and beauty to lifestyle and food today.
        </rc.p>
      </rc.Page>
    </>
  );
};

export default Resource2;
