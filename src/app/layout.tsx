import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bridge Online Academy | Nigeria's Leading Online School",
  description:
    "Quality, live, teacher-led Nigerian curriculum lessons at any age. Follow the full curriculum or choose individual subjects like coding and video editing.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
