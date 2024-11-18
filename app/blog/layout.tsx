import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paw Bungalow | Blog",
  description: "Useful tips and tricks for your furry friends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
