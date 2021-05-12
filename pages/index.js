import React from "react";
import Products from '../src/components/Products';
import Infobar from '../src/components/Infobar';
import ServiceArea from '../src/components/ServiceArea';
import Header from '../src/components/Header';
import Footer from "../src/components/Footer";
import NavBar from "../src/components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <Infobar />
      <ServiceArea className="container">
        <Products />
      </ServiceArea>
      <Footer />
    </>
  );
}
