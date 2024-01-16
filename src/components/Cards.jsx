import React from "react";
import Single from "../assets/images/single.png";
import Double from "../assets/images/double.png";
import Triple from "../assets/images/triple.png";

const Cards = () => {
  return (
    <div className="w-full bg-white text-black" id="pricing">
      <div className="max-w-[1240px] px-8 mx-auto py-32 grid lg:grid-cols-3 sm:grid-cols-2 gap-8  items-center">
        <div className=" shadow-xl rounded-md px-8 py-10 text-center  hover:scale-105 duration-300 w-full">
          <img
            src={Single}
            alt="single"
            className=" w-[70px] mt-[-70px] mx-auto pb-6"
          />
          <h1 className="font-bold text-xl">Single User</h1>
          <h2 className="font-bold text-3xl py-5 border-b">$149</h2>
          <p className="text-sm border-b py-1">500 GB Storage</p>
          <p className="text-sm border-b py-1">1 User Allowed</p>
          <p className="text-sm border-b py-1">Send up to 2GB</p>
          <button className="bg-green1 text-black w-[140px] mx-auto my-6 rounded-md font-medium py-3">
            Start Trial
          </button>
        </div>

        <div className=" bg-slate-100 shadow-xl rounded-md px-8 py-10 text-center my-10 lg:py-14 hover:scale-110 duration-300">
          <img
            src={Double}
            alt="double"
            className=" w-[70px] mt-[-70px]  mx-auto pb-6"
          />
          <h1 className="font-bold text-xl">Partnership</h1>
          <h2 className="font-bold text-3xl py-5 border-b">$199</h2>
          <p className="text-sm border-b py-1">1 TB Storage</p>
          <p className="text-sm border-b py-1">3 Users Allowed</p>
          <p className="text-sm border-b py-1">Send up to 2GB</p>
          <button className="bg-black text-green1 w-[140px] mx-auto my-6 rounded-md font-medium py-3">
            Start Trial
          </button>
        </div>

        <div className=" shadow-xl rounded-md px-8 py-10 text-center hover:scale-110 duration-300 ">
          <img
            src={Triple}
            alt="triple"
            className=" w-[70px] mt-[-70px] mx-auto pb-6"
          />
          <h1 className="font-bold text-xl">Group Account</h1>
          <h2 className="font-bold text-3xl py-5 border-b">$299</h2>
          <p className="text-sm border-b py-1">5 TB Storage</p>
          <p className="text-sm border-b py-1">10 Users Allowed</p>
          <p className="text-sm border-b py-1">Send up to 50GB</p>
          <button className="bg-green1 text-black w-[140px] mx-auto my-6 rounded-md font-medium py-3">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
