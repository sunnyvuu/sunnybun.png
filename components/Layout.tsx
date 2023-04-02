import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(props: { children: any }) {
  const { children } = props;

  return (
    <div>
      <Head>
        <title> SunnyBun.png </title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
