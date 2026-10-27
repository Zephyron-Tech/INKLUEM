import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "800"],
});

const SITE = "https://inkluem.zephyron.tech";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "INKLUEM: trenažér krizových situací ve škole",
  description:
    "Trenažér krizových a každodenních situací pro učitele a asistenty pedagoga. Krátký scénář, volba reakce A až D, okamžitá zpětná vazba a metodické vysvětlení.",
  applicationName: "INKLUEM",
  alternates: { canonical: "/" },
  appleWebApp: { title: "INKLUEM", capable: true, statusBarStyle: "default" },
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    title: "INKLUEM: trénink situací ve třídě",
    description:
      "Přečtěte si situaci, vyberte reakci a hned uvidíte zpětnou vazbu s metodickým vysvětlením.",
    url: SITE,
    siteName: "INKLUEM",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "INKLUEM: trénink situací ve třídě",
    description:
      "Přečtěte si situaci, vyberte reakci a hned uvidíte zpětnou vazbu s metodickým vysvětlením.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f4ef",
  colorScheme: "light",
  viewportFit: "cover",
};

// Běží před vykreslením, aby se při načtení nic nepřeblikávalo. Výchozí je vždy světlý
// režim, systémové nastavení se nepoužívá. Úložiště může být nedostupné, proto try/catch.
const themeScript = `(function(){try{if(localStorage.getItem("inkluem-theme")==="dark"){document.documentElement.dataset.theme="dark";var s=function(){var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content","#0e1524")};s();document.addEventListener("DOMContentLoaded",s)}}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="cs" className={`${nunito.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
