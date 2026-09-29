"use client";

import Header from "./Header";
import Footer from "./Footer";

export default function PublicShell({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
