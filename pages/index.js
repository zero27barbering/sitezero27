import React from "react";
import Products from '../src/components/Products';
import Infobar from '../src/components/Infobar';
import ServiceArea from '../src/components/ServiceArea';
import Header from '../src/components/Header';
import Footer from "../src/components/Footer";
import NavBar from "../src/components/NavBar";
import WhatsAppBtn from "../src/components/WhatsAppBtn";

export default function Home() {
  return (
    <>
      <WhatsAppBtn />
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
