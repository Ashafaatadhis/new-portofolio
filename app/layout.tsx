import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Add for better font loading
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adhis - Portfolio",
  description:
    "Personal portfolio showcasing my projects, skills and experience as a full-stack developer",
  keywords: [
    "portfolio",
    "developer",
    "full-stack",
    "web development",
    "Adhis",
  ],
  authors: [{ name: "Adhis" }],
  openGraph: {
    title: "Adhis - Portfolio",
    description: "Personal portfolio showcasing my projects and skills",
    url: "https://yourdomain.com",
    siteName: "Adhis Portfolio",
    images: [
      {
        url: "https://via.placeholder.com/1200x630.png?text=Adhis+Portfolio",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adhis - Portfolio",
    description: "Personal portfolio showcasing my projects and skills",
    images: ["/images/og-image.png"], // Update this path
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
