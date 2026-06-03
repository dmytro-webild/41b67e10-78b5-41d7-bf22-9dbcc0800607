import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Libre_Baskerville } from "next/font/google";



export const metadata: Metadata = {
  title: 'Adey Luxury | Ethiopian Attire & Artisanal Goods',
  description: 'Discover Adey Luxury, an exclusive e-commerce destination for authentic Ethiopian traditional attire and handcrafted goods. Experience timeless elegance and cultural heritage.',
  openGraph: {
    "title": "Adey Luxury | Ethiopian Attire & Artisanal Goods",
    "description": "Discover Adey Luxury, an exclusive e-commerce destination for authentic Ethiopian traditional attire and handcrafted goods. Experience timeless elegance and cultural heritage.",
    "url": "https://www.adeyluxury.com",
    "siteName": "Adey Luxury",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/front-view-woman-reading-tarot-home_23-2150273209.jpg",
        "alt": "Elegant model wearing traditional Ethiopian attire"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Adey Luxury | Ethiopian Attire & Artisanal Goods",
    "description": "Discover Adey Luxury, an exclusive e-commerce destination for authentic Ethiopian traditional attire and handcrafted goods. Experience timeless elegance and cultural heritage.",
    "images": [
      "http://img.b2bpic.net/free-photo/front-view-woman-reading-tarot-home_23-2150273209.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
