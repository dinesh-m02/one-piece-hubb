import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "One Piece Hub",
    template: "%s | One Piece Hub",
  },

  description:
    "One Piece Hub is a fan-made One Piece database featuring characters, Devil Fruits, pirate crews, bounties, episodes, news, music and more.",

  keywords: [
    "One Piece",
    "One Piece Hub",
    "One Piece characters",
    "One Piece Devil Fruits",
    "One Piece bounties",
    "One Piece crews",
    "One Piece episodes",
    "One Piece database",
  ],

  applicationName: "One Piece Hub",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "One Piece Hub",
    description:
      "Explore the Grand Line through characters, Devil Fruits, crews, bounties, episodes, news and more.",
    type: "website",
    siteName: "One Piece Hub",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}