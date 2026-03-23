import type { Metadata } from "next";
import { poppins, lato } from "../styles/fonts";
import "../styles/global.css";

export const metadata: Metadata = {
  title: "FELP — Future Expert Launchpad",
  description: "Demola Future Expert Launchpad",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}
