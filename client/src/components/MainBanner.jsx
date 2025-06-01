import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const MainBanner = () => {
  return (
    <div className="relative">
      <img
        src={assets.bannerLarge}
        alt="large-device-banner"
        className="w-full hidden md:block h-[80vh] rounded-xl"
      />
      <img
        src={assets.banner}
        alt="small-device-banner"
        className="w-full h-[80vh] md:hidden rounded-xl"
      />
      <div className="absolute inset-0 flex flex-col md:justify-center p-5 gap-3 ">
        <h1 className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-bold max-w-72 sm:max-w-96 md:max-w-72 lg:max-w-96 xl:max-w-116 leading-tight ">
          Where Earth Meets Elegance, Shop Smart, Live Green
        </h1>
        <div className="flex">
          <Link to="/products" className="flex items-center gap-2 group transition px-3 text-sm lg:text-base md:px-5 py-3 bg-primary hover:bg-primary-dull cursor-pointer font-medium text-white rounded-xl">
            Shop Now
            <span className="group-hover:rotate-360 transition-transform duration-700">
              <FaArrowRightLong />
            </span>
          </Link>
        </div>
      </div>
    </div>
  ); 
};

export default MainBanner;
