import React from "react";
import Products from '../src/components/Products';
import Infobar from '../src/components/Infobar';
import ServiceArea from '../src/components/ServiceArea';
import Header from '../src/components/Header';
import Footer from "../src/components/Footer";
import NavBar from "../src/components/NavBar";
import WhatsAppBtn from "../src/components/WhatsAppBtn";
import Locations from "../src/components/Locations";
import MapEmbed from "../src/components/MapEmbed";
import ModalMap from "../src/components/ModalMap";

export default function Home() {
  return (
    <>
      <ModalMap />
      <WhatsAppBtn />
      <NavBar />
      <Header />
      <Infobar />
      <ServiceArea className="container">
        <Products />
        <Locations />
      </ServiceArea>
      <Footer />
    </>
  );
}
