import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/main.scss";
import MainHeader from "@/components/header/header";
import MainFooter from "@/components/footer/footer";

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oleksa Studio",
  description: "Oleksa Studio is a web software development company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        <main className="grid min-h-screen">
          <div>
            <MainHeader />
            <section className="px-16">{children}</section>
          </div>
          <MainFooter />
        </main>
      </body>
    </html>
  );
}
