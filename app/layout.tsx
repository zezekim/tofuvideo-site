import type { Metadata } from "next";
import { Baloo_2, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tofuvideo.com"),
  title: "tofuvideo — Turn any topic into a finished video",
  description:
    "tofuvideo writes the script, generates the visuals, records the voiceover, adds captions, and edits the final cut. Type a topic, get a video. Soft on effort, sharp on results.",
  openGraph: {
    title: "tofuvideo — Turn any topic into a finished video",
    description:
      "AI video production from a single prompt: script, visuals, voiceover, captions, and the final edit — all done for you.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "tofuvideo — Turn any topic into a finished video",
    description:
      "AI video production from a single prompt: script, visuals, voiceover, captions, and the final edit — all done for you.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${baloo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
