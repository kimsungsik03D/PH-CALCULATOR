import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "자급제 요금 계산기",
  description: "자급제 휴대폰의 가격과 할인정보를 입력하여 계산할 수 있다.",
  // naverSiteVerification:"",
  // googleSiteVerification:"",
  openGraph: {
    title: "자급제 요금 계산기",
    description: "자급제 휴대폰의 가격과 할인정보를 입력하여 계산할 수 있다.",
    url: "https://ph-calculator-ll2s.vercel.app",
    siteName: "Next.js",
    images: [
      {
        url: "https://ph-calculator-ll2s.vercel.app/main-image.png",
        width: 800,
        height: 600,
        alt: "phone calculate",
      },
      // {
      //   url: "https://nextjs.org/og-alt.png",
      //   width: 1800,
      //   height: 1600,
      //   alt: "My custom alt",
      // },
    ],
    locale: "en-KR",
    type: "website",
  },
  verification: {
    google: "9AIxvK5q5GCzD_WLMmhs53ZVsYORKaby6aluUQzEqcI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
