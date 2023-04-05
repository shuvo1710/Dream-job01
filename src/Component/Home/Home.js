import React from "react";
import CareerGig from "../CareerGig/CareerGig";
import ChooseUs from "../ChooseUs/ChooseUs";
import Banner from "../Banner/Banner";
import Choice from "../Choice/Choice";

const Home = () => {
  return (
    <div>
      <Banner/>
      <CareerGig />
      <Choice></Choice>
      <ChooseUs></ChooseUs>
    </div>
  );
};

export default Home;
