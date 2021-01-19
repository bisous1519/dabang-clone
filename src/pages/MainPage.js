import React from "react";
import Advertise from "../components/Advertise";
import Footer from "../components/common/Footer";
import GuideList from "../components/GuideList";
import Header from "../components/common/Header";
import History from "../components/History";
import Navi from "../components/common/Navi";
import Search from "../components/Search";
import SellList from "../components/SellList";

export default function MainPage() {
  return (
    <>
      <Header />
      <Search />
      <History />
      <SellList />
      <GuideList />
      <Advertise />
      <Navi />
      <Footer />
    </>
  );
}
