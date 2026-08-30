import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { LanguageProvider } from "./components/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Pravasi Mandal — Companionship & Care for Our Elders",
  description:
    "Pravasi Mandal is a registered charity in Northamptonshire providing cultural care, hot meals, physical activities, and community support for Asian elders since 1984.",
  keywords: ["Pravasi Mandal", "Asian elders", "charity", "Northamptonshire", "Wellingborough", "community care"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <body className="bg-ivory text-charcoal font-sans antialiased">
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
