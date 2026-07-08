import type { Metadata } from "next";
import { Inter, Montserrat, Roboto } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EcoAlu - Nhà Máy Nhôm Công Nghệ Cao | Tầm Vóc Việt",
  description: "Dự án nhà máy Nhôm công nghệ cao ECOALU tại Thanh Hóa - Giải pháp cung ứng nhôm Ingot, Billet chất lượng cao hướng tới kinh tế tuần hoàn.",
  keywords: "EcoAlu, nhôm công nghệ cao, nhôm ingot, nhôm billet, nhôm tái chế, kinh tế tuần hoàn, Thanh Hóa",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} ${montserrat.variable} ${roboto.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-800 overflow-x-hidden">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

