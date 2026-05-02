import type { Metadata } from "next";
import "./globals.css";
import SidebarNav from "@/components/SidebarNav";
import MobileNav from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "Mrinalini S — Full Stack Developer & UI/UX Designer",
  description: "Portfolio of Mrinalini S, a full-stack developer and UI/UX designer based in San Francisco.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-[#0E0E0E] text-white antialiased">
        <SidebarNav />
        <MobileNav />
        <main className="md:ml-[220px]">
          {children}
        </main>
      </body>
    </html>
  );
}
