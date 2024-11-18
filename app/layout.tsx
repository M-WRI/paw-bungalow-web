import type { Metadata } from "next";
import localFont from "next/font/local";
import Head from "next/head";
import "./globals.css";

const sofiaProSoft = localFont({
  src: [
    {
      path: "fonts/SofiaProSoftLight.woff",
      weight: "300",
    },
    {
      path: "fonts/SofiaProSoftRegular.woff",
      weight: "400",
    },
    {
      path: "fonts/SofiaProSoftMedium.woff",
      weight: "500",
    },
    {
      path: "fonts/SofiaProSoftBold.woff",
      weight: "700",
    },
  ],
  variable: "--font-sofia-pro-soft",
});

export const metadata: Metadata = {
  title: "Paw Bungalow | Coming Soon",
  description: "Useful tips and tricks for your furry friends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={`${sofiaProSoft.variable}`}>{children}</body>
    </html>
  );
}
