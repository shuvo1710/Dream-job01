import React from "react";
import "./Searchbar.css";

const Searchbar = () => {
  return (
    <div className="search-bg lg:grid grid-cols-12 items-center justify-center">
      <div className="w-96 text-center col-span-3">
        <h2 className="text-[#FFFFFF] font-bold text-5xl leading-10">Jobs</h2>
        <p className="text-base text-gray-400">Find your dream job</p>
      </div>
      <div className="flex py-3 w-full justify-center col-span-9">
        <h3 className="text-[#2F2F2F] flex items-center px-3 border-none text-base font-semibold bg-white h-20 ">
          What
        </h3>
        <input
          type="text"
          placeholder="The kind of job you  want"
          className="block w-1/5 pr-4 h-20  border-white  shadow-sm focus:outline-none  sm:text-sm"
        />
        <h3 className="text-[#2F2F2F] flex items-center my-auto px-3 border-l text-base font-semibold bg-white h-20">
          Where
        </h3>
        <input
          type="text"
          placeholder="Choose job location"
          className="block w-1/5 pr-4 border border-white h-20 shadow-sm focus:outline-none  sm:text-sm"
        />
        <button className="bg-[#1F66CF] w-[117px] text-[#FFFFFF] text-base">
          Search
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
