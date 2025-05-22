import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

// Load the Inter font with latin subset
const inter = Inter({ subsets: ["latin"] });

// Metadata for the application (used by Next.js for SEO)
export const metadata = {
  title: "Library Management",
  description: "Library Management System",
};

// RootLayout wraps all pages and provides global structure (sidebar, font, etc.)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Sidebar wraps the main content and provides navigation */}
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
