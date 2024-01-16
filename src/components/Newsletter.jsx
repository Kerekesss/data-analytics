import React from "react";

const Newsletter = () => {
  return (
    <div className="text-white" id="subscribe">
      <div className="max-w-[1240px] mx-auto flex max-lg:flex-col max-lg:items-center max-lg:text-center py-20 px-6">
        <div className=" w-full max-lg:px-4">
          <h1 className="md:text-3xl sm:text-2xl text-xl font-bold">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className="py-2">Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="flex flex-col pt-2 ">
          <div className="flex max-lg:flex-col gap-4 justify-center max-lg:px-4">
            <input
              type="text"
              placeholder="Enter your Email"
              className="p-2 px-3 rounded-lg w-[250px] max-lg:w-[580px] max-md:w-[470px] max-sm:w-[390px]"
            />
            <button className="bg-green1 text-black w-[130px] rounded-md font-medium py-3 max-lg:w-[580px] max-md:w-[470px] max-sm:w-[390px]">
              Notify me
            </button>
          </div>
          <p className="pt-4 max-lg:px-4">
            We care about the protection of your date. Read our <br />
            <span className="text-green1 underline">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
