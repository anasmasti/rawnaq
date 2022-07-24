import React from "react";
import Footer from "./footer/index";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}