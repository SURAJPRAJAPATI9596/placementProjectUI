import React from "react";
import Navbar from "../components/layout/homeLayout/navbar";
import Hero from "../components/layout/homeLayout/Hero";
import Footer from "../components/layout/homeLayout/footer";
import TopUsers from "../components/layout/homeLayout/topUsers";
import Features from "../components/layout/homeLayout/features";
import MultiActionAreaCard from "../components/ui/MultiActionAreaCard";
import featuresData from "../data/featuresData";

const Home = ({ dark, setDark }) => {
  return (
    <>
      <Navbar dark={dark} setDark={setDark} />
      <Hero dark={dark} setDark={setDark} />
      <TopUsers dark={dark} setDark={setDark}></TopUsers>
      <Features dark={dark} setDark={setDark}></Features>
      <Footer dark={dark} setDark={setDark} />
    </>
  );
};

export default Home;
