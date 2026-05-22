import type { Metadata } from "next";
import { Poppins, Raleway, JetBrains_Mono } from "next/font/google";
import LanguageProvider from "@/lib/LanguageProvider";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Diamond Incision® × METCARE® — Une innovation internationale",
  description: "Le Dr Martusciello, concepteur de la technique Diamond Incision, développe une approche innovante dédiée au traitement de la cellulite et des fibroses cicatricielles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${poppins.variable} ${raleway.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="bg-[#ECEBE9] text-[#2B1517] font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
