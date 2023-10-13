import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Providers } from "@/store/Providers";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZenHaus - Real-time IoT monitor.",
  description: "IoT smart home dashboard",
};

type rootProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: rootProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={urbanist.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
