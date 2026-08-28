import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bridge Online Academy | Nigeria's Leading Online School",
  description:
    "Live, teacher-led Nigerian curriculum lessons for Primary through Senior Secondary students.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
