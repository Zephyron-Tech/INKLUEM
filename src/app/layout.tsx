import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "INKLUEM – trenažér krizových situací ve škole",
  description:
    "INKLUEM je trenažér krizových a každodenních situací pro učitele, asistenty pedagoga a rodiče. Krátký scénář, volba reakce, okamžitá zpětná vazba.",
  openGraph: {
    title: "INKLUEM – inkluze + emoce",
    description:
      "Trénuj reakce na situace ve třídě dřív, než nastanou. Krátké scénáře, okamžitá zpětná vazba, metodické vysvětlení.",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="cs" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
