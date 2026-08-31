import { ThemeProvider } from "next-themes";
import StoreProvider from "@/app/admin/components/StoreProvider";
import "@/app/admin/globals.css";

export const metadata = {
  title: "Pravasi Mandal — Admin Panel",
  description: "Admin panel for managing Pravasi Mandal operations.",
};

export default function AdminRootLayout({ children }) {
  return (
    <StoreProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        disableTransitionOnChange={false}
        storageKey="pm-admin-theme"
      >
        {children}
      </ThemeProvider>
    </StoreProvider>
  );
}
