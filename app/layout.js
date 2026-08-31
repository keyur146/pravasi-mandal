import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageContext";
import PublicShell from "./components/PublicShell";

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
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="bg-ivory text-charcoal font-sans antialiased" suppressHydrationWarning>
        <LanguageProvider>
          <PublicShell>{children}</PublicShell>
        </LanguageProvider>
      </body>
    </html>
  );
}

