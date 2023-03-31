import React from "react";
import png1 from "../../assets/gig images/gig1.png";
import png2 from "../../assets/gig images/gig2.jpg";
import png3 from "../../assets/gig images/gig3.jpg";
import png4 from "../../assets/gig images/gig4.png";
import png5 from "../../assets/gig images/gig5.png";
import png6 from "../../assets/gig images/gig6.png";
import { Icon } from "@iconify/react";

const CareerGig = () => {
  return (
    <div className="py-12">
      <section className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 text-center">
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
      <section className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-20">
        <div className="grid lg:grid-cols-3  md:grid-cols-2  justify-items-center gap-y-4 gap-x-0">
          <img src={png1} alt="" className="w-[200px] h-[195px] lg:pl-5" />
          <img src={png2} alt="" className="w-[200px] h-[195px]" />
          <img src={png3} alt="" className="w-[200px] h-[195px]" />
          <img src={png4} alt="" className="w-[200px] h-[195px] lg:pl-5" />
          <img src={png5} alt="" className="w-[200px] h-[195px]" />
          <img src={png6} alt="" className="w-[200px] h-[195px]" />
        </div>
        <div className="flex justify-center items-center">
          <div>
            <h1 className="text-[#3F4753] text-5xl font-bold text-center">
              All careers gigs, one portal
            </h1>
            <p className="text-[#B2B7BD] font-normal text-xs leading-5 pt-5">
              Whatever you are, a software developer, a user interface designer{" "}
              <br /> or someone else, we got you. We have all types of jobs
              ready for <br /> you.
            </p>
            <div className="pt-14">
              <button className="flex  items-center border rounded-full shadow-md px-9 py-5 bg-[#FFFFFF] text-[#C8C000] font-normal text-base">
                Available jobs opportunities
                <Icon
                  icon="material-symbols:arrow-right-alt-rounded"
                  width="30"
                  className="pl-2"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerGig;
