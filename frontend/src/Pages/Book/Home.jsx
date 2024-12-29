import React from "react";
import Banner from "../../Components/Banner";
import TopSellers from "../../Components/TopSellers";
import Recommened from "../../Components/Recommened";
import News from "../../Components/News";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <TopSellers />
      <Recommened />
      <News />
    </div>
  );
};

export default Home;
