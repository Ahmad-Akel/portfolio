import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: { default: site.title, template: `%s — ${site.name}` },
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      {/* Extensions like Grammarly inject attributes on <body> before hydration */}
      <body suppressHydrationWarning>
        <div id="top" className="min-h-screen bg-canvas font-sans text-fg antialiased">
          <Header />
          <div className="mx-auto max-w-[1160px] px-6">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
