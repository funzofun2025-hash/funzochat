import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppinsFont = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Funzo-chat and play",
  description: "An app to help you socialize",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${poppinsFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
