import React from "react";
import Laptop from "../assets/images/laptop.jpg";
const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4" id="about">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-6" src={Laptop} alt="laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-green1 font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="font-bold sm:text-3xl text-2xl py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam esse
            quia magni minus, odio maiores nisi nostrum consequuntur in tempore
            deserunt animi impedit ipsa ipsam nemo? Voluptatum libero illo
            inventore!
          </p>
          <button className="bg-black text-green1 w-[200px] max-md:mx-auto my-6 rounded-md font-medium py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
