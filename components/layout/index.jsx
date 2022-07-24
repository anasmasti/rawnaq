import React from "react";
import Footer from "./footer/index";
import NavBar from "./header";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}