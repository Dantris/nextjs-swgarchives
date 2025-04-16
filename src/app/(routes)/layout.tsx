import { DefaultSeo } from "next-seo";
import SEO from "@/constants/seo.config";

import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata = {
  title: "SWG Archives",
  description: "Knowledge from the Jedi Archives",
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={orbitron.variable}>
      <body>
        <DefaultSeo {...SEO} />
        {children}
      </body>
    </html>
  );
}
