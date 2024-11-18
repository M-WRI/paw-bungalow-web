import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Head from "next/head";
import localFont from "next/font/local";
import { Metadata } from "next";
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

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
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
      <body className={`${sofiaProSoft.variable}`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
