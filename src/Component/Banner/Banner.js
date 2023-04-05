import React from "react";
import dream2 from "../../assets/dream-2.png";
import dream3 from "../../assets/dream-3.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero banner-img min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={dream2}
          alt=""
          className="max-w-sm  rounded-lg shadow-2xl relative left-36"
        />
        <img
          src={dream3}
          alt=""
          className="max-w-sm rounded-lg shadow-2xl absolute right-20 top-1/2 "
        />
        <div className="mx-5">
          <h1 className="text-5xl font-bold text-white leading-normal">
            Find your dream <span className="text-[#C8C000]">job</span>
            <br />
            full time, part time
          </h1>
          <p className="py-6 text-sm text-white w-3/4">
            The jobportal helps you land your dream job, the ones done on site
            or remote. We search for jobs for people allover the world and
            accross all time zones
          </p>
          <button className="btn hover:bg-white bg-[#C8C000] px-10 rounded-full mr-6 text-black">
            Find me a job
          </button>
          <button className="btn hover:bg-white bg-[#C8C000] px-10 rounded-full text-black">
            I’m hiring
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
