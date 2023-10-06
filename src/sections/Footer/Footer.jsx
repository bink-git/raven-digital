import React from "react";
import logo from "../../assets/logo.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const Footer = () => {
  return (
    <div className="footer container-2xl mx-auto w-full max-w-screen-2xl py-[74px]">
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt="logo" className="mb-9 w-[153px]" />
        </div>
        <p className="mb-10 max-w-[560px] text-center text-lg font-light text-[#787878]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id
          fringilla turpis tempor enim. Vel tristique suspendisse{" "}
        </p>
        <div className="mb-20">
          <ul className="flex gap-x-24">
            <li>
              <a href="#">Website development</a>
            </li>
            <li>
              <a href="#">Branding</a>
            </li>
            <li>
              <a href="#">UI/UX design</a>
            </li>
            <li>
              <a href="#">Software</a>
            </li>
            <li>
              <a href="#">Digital marketing</a>
            </li>
          </ul>
        </div>
        <div className="mb-16 flex items-center justify-between gap-8">
          <a href="#">
            <img src={facebook} alt="" />
          </a>
          <a href="#">
            <img src={twitter} alt="" />
          </a>
          <a href="#">
            <img src={instagram} alt="" className="svg" />
          </a>
        </div>
        <p className="text-center text-sm font-normal">
          Copyright © 2021. Raven Digital. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
