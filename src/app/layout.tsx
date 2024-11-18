import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Polar Paradise - The Coolest VS Code Theme",
  description: "Transform your coding environment into an Arctic wonderland with the Polar Paradise VS Code theme. Features snow-white backgrounds, glacier-blue accents, and penguin-approved color schemes.",
  keywords: [
    "VS Code theme",
    "code editor theme",
    "programming theme",
    "arctic theme",
    "penguin theme",
    "developer tools",
    "light theme",
    "cool color scheme",
    "VS Code customization"
  ],
  authors: [{ name: "Hatem Soliman" }],
  creator: "Hatem Soliman",
  publisher: "Arctic Code Labs",
  openGraph: {
    title: "Polar Paradise VS Code Theme",
    description: "Where penguins debug in style! The coolest VS Code theme for developers who appreciate a fresh, Arctic-inspired coding environment.",
    images: [
      {
        url: "https://www.cuteness.com/cuteness/24-memes-that-prove-penguins-are-the-funniest-animals-on-earth/9a18d21b-8cc8-4e48-a52d-64a0e367c732.png", // You'll need to create this
        width: 1200,
        height: 630,
        alt: "Polar Paradise VS Code Theme Preview"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Polar Paradise VS Code Theme",
    description: "The VS Code theme that's cooler than a penguin's 🍑",
    images: ["https://www.cuteness.com/cuteness/24-memes-that-prove-penguins-are-the-funniest-animals-on-earth/9a18d21b-8cc8-4e48-a52d-64a0e367c732.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
  manifest: "/manifest.json",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
