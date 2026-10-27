import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "INKLUEM",
    short_name: "INKLUEM",
    description:
      "Trenažér krizových a každodenních situací pro učitele a asistenty pedagoga.",
    lang: "cs",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f4ef",
    theme_color: "#1f3a5f",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
