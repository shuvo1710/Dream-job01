import React from "react";
import CareerGig from "../CareerGig/CareerGig";
import ChooseUs from "../ChooseUs/ChooseUs";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner/>
      <CareerGig />
      <ChooseUs></ChooseUs>
    </div>
  );
};

export default Home;
