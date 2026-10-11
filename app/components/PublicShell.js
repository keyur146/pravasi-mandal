"use client";

import Header from "./Header";
import Footer from "./Footer";
import FloatingContact from "./FloatingContact";

export default function PublicShell({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingContact />
    </>
  );
}
