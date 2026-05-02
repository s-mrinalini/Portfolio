import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import TopNav from "@/components/TopNav";

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
          <TopNav />
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
