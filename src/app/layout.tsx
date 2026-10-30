import type { Metadata } from "next";
import { Quicksand, Nunito, Pirata_One } from "next/font/google";
import Nav from "@/components/Nav";
import GridBackground from "@/components/decorative/GridBackground";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const pirataOne = Pirata_One({
  weight: "400",
  variable: "--font-pirata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teni Olugboyega — Portfolio",
  description:
    "CS graduate and AI master's student — projects, resume, and certifications.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${quicksand.variable} ${nunito.variable} ${pirataOne.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col font-sans"
        suppressHydrationWarning
      >
        <GridBackground />
        <Nav />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
