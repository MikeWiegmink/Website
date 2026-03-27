import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '@/styles/index.styles.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mike Wiegmink",
  description: "Portfolio website Mike Wiegmink",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="background"
      >
        <header className="headerContainer">
            <nav >This is a header</nav>
        </header>

        {children}

      </body>
    </html>
  );
}
