import { DefaultSeoProps } from "next-seo";

const SEO: DefaultSeoProps = {
    title: "SWGArchives - Star Wars Galaxies Knowledge Base",
    description: "Explore comprehensive guides, professions, items and locations from Star Wars Galaxies.",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.swgarchives.com",
        siteName: "SWGArchives",
        images: [
            {
                url: "https://www.swgarchives.com/og-image.jpg", // Replace with real image later
                width: 1200,
                height: 630,
                alt: "SWGArchives",
            },
        ],
    },
    twitter: {
        handle: "@swgarchives",
        site: "@swgarchives",
        cardType: "summary_large_image",
    },
};

export default SEO;
