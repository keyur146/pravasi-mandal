import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageContext";
import PublicShell from "./components/PublicShell";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Pravasi Mandal — Asian Day Care & Community Centre",
  description:
    "Pravasi Mandal is a registered charity in Northamptonshire connecting people, celebrating culture and supporting wellbeing for the Asian community and beyond since 1984.",
  keywords: [
    "Pravasi Mandal",
    "Asian day care",
    "community centre",
    "charity",
    "Northamptonshire",
    "Wellingborough",
    "Asian elders",
    "cultural care",
    "community support",
    "volunteer",
  ],
  openGraph: {
    title: "Pravasi Mandal — Asian Day Care & Community Centre",
    description:
      "Rooted in Asian heritage. Open to everyone. Connecting people, celebrating culture and supporting wellbeing since 1984.",
    siteName: "Pravasi Mandal",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="bg-ivory text-charcoal font-sans antialiased" suppressHydrationWarning>
        {/* Skip navigation – accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <LanguageProvider>
          <PublicShell>{children}</PublicShell>
        </LanguageProvider>
      </body>
    </html>
  );
}
