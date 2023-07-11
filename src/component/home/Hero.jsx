import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col px-8 pt-12 overflow-x-hidden lg:items-center lg:pt-8 lg:flex-row">
      <div className="flex flex-col gap-4">
        <p className="text-3xl font-thin text-gray-900 md:text-5xl whitespace-nowrap ">
          Ace Your <span className="text-[#F76680]">Interviews!</span>
        </p>
        <p className="text-3xl font-bold text-gray-900 md:text-5xl whitespace-nowrap ">
          the best for <span className="text-[#57007B]">juniors</span>
        </p>
        <p className="text-xl font-thin text-gray-600 max-w-[500px]">
          with our comprehensive collection of flashcards, you'll gain the
          knowledge and confidence needed to impress potential employers.
        </p>
        <button className="px-4 mt-4 self-start py-2 font-bold text-white bg-[#57007B] rounded hover:bg-blue-700">
          Get Started
        </button>
      </div>
      <div className="flex items-center justify-center w-full">
        <img src="hero-img.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
