import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bridge Online Academy | Your Personal Study Companion",
    template: "%s | Bridge Online Academy",
  },
  description:
    "Live, personalised online classes for every learner. Bridge Online Academy covers academic catch-up, entrance exam preparation, reading mastery and cultural identity. Follow the full Nigerian curriculum or choose individual subjects.",
  metadataBase: new URL("https://www.bridgeonlineacademy.org"),
  openGraph: {
    siteName: "Bridge Online Academy",
    type: "website",
    url: "https://www.bridgeonlineacademy.org",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
