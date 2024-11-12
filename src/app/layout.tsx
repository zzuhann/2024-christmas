import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "./registry";
import { Spectral_SC, Zen_Maru_Gothic, Noto_Sans_TC } from "next/font/google";

const spectral = Spectral_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-spectral",
});

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-zen-maru-gothic",
});

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-noto-sans-tc",
});

export const metadata: Metadata = {
  title: "2024 Christmas is coming!",
  description: "2024 Christmas is coming!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="zh"
      className={`${spectral.variable} ${zenMaruGothic.variable} ${notoSansTC.variable}`}
    >
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
