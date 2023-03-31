import React from "react";
import dream from "../../assets/dream.png"
import { FiFacebook } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="m-8">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 ">
        <div className="w-30%">
          <div className="flex ">
            <div>
              <img className="w-16 h-16" src={dream} alt="#" />
            </div>
            <div className="my-3 text-4xl">Dream Job</div>
          </div>
          <h1 className="text-3xl">Call us</h1>
          <h1 className="text-2xl text-blue-600">123 456 7890</h1>
          <p className="mb-4">
            329 Queensberry Street, North Melbourne VIC <br />
            3051, Australia.
            <br />
            support@superio.com
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
          {/* part2 */}
          <div>
            <h1 className="text-xl mb-5">For Candidates</h1>
            <p>
              Browse Jobs <br />
              Browse Categories <br />
              Candidate Dashboard <br />
              Job Alerts <br />
              My Bookmarks
            </p>
          </div>
          <div>
            <h1 className="text-xl mb-5">For Employers</h1>
            <p>
              Browse Candidates Employer Dashboard <br />
              Add Job <br />
              Job Packages
            </p>
          </div>
          <div>
            <h1 className="text-xl mb-5">About Us</h1>
            <p>
              About Us Job Page Invoice <br />
              Terms Page <br />
              Blog <br />
              Contact
            </p>
          </div>
          <div>
            <h1 className="text-xl mb-5">Helpful </h1>
            <p>
              Site Map Terms of Use Privacy Center Security Center Accessibility
              Center
            </p>
          </div>
        </div>
      </div>
      <div className="divide-x divide-slate-950 my-10">
        <hr />
      </div>
      {/* down */}
      <div className="sm:col-reverse">
        <div className="">© 2023 Superio by ib-themes. All Right Reserved.</div>
        <div className="flex lg:float-right  gap-4 ">
          <div>
            <Link to="./">
              <FiFacebook></FiFacebook>
            </Link>
          </div>
          <div>
            <Link to="./">
              <BsTwitter></BsTwitter>
            </Link>
          </div>
          <div>
            <Link to="./">
              <FaInstagramSquare></FaInstagramSquare>
            </Link>
          </div>
          <div>
            <Link to="./">
              <FaLinkedinIn></FaLinkedinIn>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
