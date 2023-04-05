import React from "react";
import CareerGig from "../CareerGig/CareerGig";
import ChooseUs from "../ChooseUs/ChooseUs";
import Banner from "../Banner/Banner";
import Choice from "../Choice/Choice";
import What from "../what/What";
import All from "../all/All";

const Home = () => {
  return (
    <div>
      <Banner/>
      <CareerGig />
      <Choice></Choice>
      <ChooseUs></ChooseUs>
      <What></What>
      <All></All>
    </div>
  );
};

export default Home;
