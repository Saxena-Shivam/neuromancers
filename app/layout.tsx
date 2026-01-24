import React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { GoToTop } from "@/components/go-to-top";

const _inter = Inter({ subsets: ["latin"] });
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neuromancers | IIT Bhubaneswar Programming Society",
  description:
    "The official programming society of IIT Bhubaneswar. Empowering students in competitive programming, machine learning, web development, and more.",
  keywords: [
    "IIT Bhubaneswar",
    "Programming Society",
    "Neuromancers",
    "Competitive Programming",
    "Machine Learning",
    "Web Development",
  ],
  authors: [{ name: "Neuromancers" }],
  openGraph: {
    title: "Neuromancers | IIT Bhubaneswar Programming Society",
    description:
      "The official programming society of IIT Bhubaneswar. Empowering students in competitive programming, machine learning, web development, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <GoToTop />
          <Toaster theme="dark" position="top-right" expand={true} richColors />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
