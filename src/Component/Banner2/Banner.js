import React from "react";
import img2 from "../../assets/banner2/Rectangle 4.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen banner2-img content-fit">
        <div className="hero-content flex-col lg:flex-row-reverse w-5/6 mx-auto">
          <img src={img2} alt="" className="max-w-sm  rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold w-[632px] h-[166px]  text-6xl leading-[83px] text-[#FFFFFF]">
              Find your dream <span className="text-blue-500">job</span>
              <br />
              full time, part time{" "}
            </h1>
            <p className="py-6 text-[#B2B7BD] leading-5 font-normal text-base top-[429px]">
              The jobportal helps you land your dream job, the ones done on{" "}
              <br /> site or remote. We search for jobs for people allover the
              world and <br />
              accross all time zones
            </p>
            <button className="w-[213px] h-[60px] bg-[#0050C8] text-[#FFFFFF] font-bold">
              Find me a job
            </button>
          </div>
        </div>
      </div>
      <section className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 text-center w-[1315px] h-[167px] items-center w-5/6 mx-auto  -mt-20 bg-[#FFFFFF] shadow ">
        <div className="border-r border-[#DFDFDF]">
          <h2 className="text-4xl font-medium leading-10 text-[#999FA8]">
            120K+
          </h2>
          <p className="text-xs leading-5 font-normal text-[#DFDFDF]">
            Career opportunities
          </p>
        </div>
        <div className="border-r border-[#DFDFDF]">
          <h2 className="text-4xl font-medium leading-10 text-[#999FA8]">
            1M+
          </h2>
          <p className="text-xs leading-5 font-normal text-[#DFDFDF]">
            Jobs seekers
          </p>
        </div>
        <div className="border-r border-[#DFDFDF]">
          <h2 className="text-4xl font-medium leading-10 text-[#999FA8]">
            100k+
          </h2>
          <p className="text-xs leading-5 font-normal text-[#DFDFDF]">
            Remote jobs
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-medium leading-10 text-[#999FA8]">
            20K+
          </h2>
          <p className="text-xs leading-5 font-normal text-[#DFDFDF]">
            Hiring companies
          </p>
        </div>
      </section>
    </div>
  );
};

export default Banner;
