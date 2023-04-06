import React from "react";
import dream from "../../assets/Dream-job-logo-preview.png";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col mx-auto max-w-[1500px] h-auto">
        <div className="flex lg:items-center lg:justify-between flex-col lg:flex-row gap-y-[45px] py-[30px] lg:py-0 px-[15px] sm:px-[30px] md:px-[40px] lg:px-[50px] xl:px-[75px] w-full h-auto lg:h-[380px] bg-gray-800">
          <div className="lg:w-4/12">
            <div className="flex items-center justify-center gap-x-[8px] mb-[10px] text-white">
              <img src={dream} alt="" className="w-20 h-20" />
              <h3 className="my-3 text-4xl font-bold">Dream Job</h3>
            </div>

            <div className="flex justify-center">
              <div className=" mx-auto text-gray-200">
                <h1 className="text-3xl">Call us</h1>
                <h1 className="text-2xl text-blue-600">123 456 7890</h1>
                <p className="mb-4">
                  329 Queensberry Street, <br /> North Melbourne VIC <br />
                  3051, Australia.
                  <br />
                  support@superio.com
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center sm:justify-between flex-wrap lg:flex-nowrap gap-y-[60px] gap-x-[90px] sm:gap-x-0 lg:w-7/12">
            <div className="text-center sm:text-left">
              <div className="mb-[18px] text-gray-400 text-xl font-bold select-none">
                For Candidates
              </div>

              <ul className="flex flex-col gap-[10px] text-gray-200">
                <a className="hover:underline" href="/">
                  <li>Browse Jobs</li>
                </a>
                <a className="hover:underline" href="/">
                  <li>Browse Categories</li>
                </a>
                <a className="hover:underline" href="/">
                  <li>Candidate Dashboard</li>
                </a>
                <a className="hover:underline" href="/">
                  <li>Job Alerts</li>
                </a>
                <a className="hover:underline" href="/">
                  <li>My Bookmarks</li>
                </a>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <div className="mb-[18px] text-gray-400 text-xl font-bold select-none">
                For Employers
              </div>

              <ul className="flex flex-col gap-[10px] text-gray-200">
                <a className="hover:underline" href="/">
                  <li>Employer Dashboard</li>
                </a>
                <a className="hover:underline" href="/">
                  <li> Add Job</li>
                </a>
                <a className="hover:underline" href="/">
                  <li>Job Packages</li>
                </a>
                <a className="hover:underline" href="/">
                  <li>Contact</li>
                </a>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <div className="mb-[18px] text-gray-400 text-xl font-bold select-none">
                About Us
              </div>

              <ul className="flex flex-col gap-[10px] text-gray-200">
                <a className="hover:underline" href="/">
                  <li>Terms Page</li>
                </a>
                <a className="hover:underline" href="/">
                  <li>Events</li>
                </a>
                <a className="hover:underline" href="/">
                  <li>Help centre</li>
                </a>

                <a className="hover:underline" href="/">
                  <li>Support</li>
                </a>
                <a className="hover:underline" href="/">
                  <li>Contact</li>
                </a>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <div className="mb-[18px] text-gray-400 text-xl font-bold select-none">
                Social
              </div>

              <ul className="flex flex-col gap-[10px] text-gray-200">
                <a className="hover:underline" href="/">
                  <li>Twitter</li>
                </a>
                <a className="hover:underline" href="/">
                  <li>LinkedIn</li>
                </a>
                <a className="hover:underline" href="/">
                  <li>Facebook</li>
                </a>
                <a className="hover:underline" href="/">
                  <li>Github</li>
                </a>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <div className="mb-[18px] text-gray-400 text-xl font-bold select-none">
                Legal
              </div>

              <ul className="flex flex-col gap-[10px] text-gray-200">
                <a className="hover:underline" href="/">
                  <li>Terms</li>
                </a>
                <a className="hover:underline" href="/">
                  <li>Privacy</li>
                </a>
                <a className="hover:underline" href="/">
                  <li>Cookies</li>
                </a>
                <a className="hover:underline" href="/">
                  <li>Licenses</li>
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-evenly sm:justify-between flex-col sm:flex-row sm:px-[30px] md:px-[40px] lg:px-[50px] xl:px-[75px] w-full h-[100px] bg-gray-900">
          <div className="text-gray-400">
            Copyright © 2023 - All right reserved by Dream-Job
          </div>

          <ul className="flex gap-[15px] text-gray-400 cursor-pointer">
            <li className="ease-in duration-200 hover:text-gray-100">
              <Icon icon="ri:facebook-circle-fill" width="24" />
            </li>
            <li className="ease-in duration-200 hover:text-gray-100">
              <Icon icon="jam:linkedin-circle" width="24" />
            </li>
            <li className="ease-in duration-200 hover:text-gray-100">
              <Icon icon="mdi:github" width="24" />
            </li>
            <li className="ease-in duration-200 hover:text-gray-100">
              <Icon icon="ant-design:twitter-circle-filled" width="24" />
            </li>
            <li className="ease-in duration-200 hover:text-gray-100">
              <Icon icon="mdi:instagram" width="24" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
