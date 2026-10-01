import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Librarian Agent · Softtek Marketing", description: "Find and reuse the content Softtek already owns." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
