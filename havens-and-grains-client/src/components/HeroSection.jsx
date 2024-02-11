import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-red-500 h-[500px] overflow-clip">
      <div className="relative">
        <div className="w-[900px] h-[900px] absolute -top-[400px] -left-[150px] bg-gray-500 rounded-[80%]"></div>
        <div className="w-[900px] h-[900px] absolute -top-[400px] -left-[200px] bg-white rounded-[80%]"></div>
        <div className="rounded-[80%] absolute top-12 left-8 w-[500px]">
          <div className="text-6xl">Running a</div>
          <div className="text-6xl font-bold">Successfull Grossery Store</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
