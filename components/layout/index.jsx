import React from "react";
import Footer from "./footer/Footer";
import NavBar from "./header/NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}