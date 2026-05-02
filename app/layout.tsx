import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
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
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-full antialiased">
        <ThemeProvider>
          <SidebarNav />
          <MobileNav />
          <main className="lg:ml-[220px]">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
