import React from "react";
import Typed from "react-typed";
const Hero = () => {
  return (
    <div className="text-white" id="home">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex text-center flex-col justify-center">
        <p className="text-green1 font-bold p-2">GROWING WITH DATA ANALYTICS</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl md:py-6">
          Grow with data
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast,flexible financing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-600">
          {" "}
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platforms.
        </p>
        <button className="bg-green1 text-black w-[200px] mx-auto my-6 rounded-md font-medium py-3">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
