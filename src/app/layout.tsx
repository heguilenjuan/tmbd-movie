import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "TMDB-Movies",
  description: "Pagina informativa de peliculas con TMBD API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
