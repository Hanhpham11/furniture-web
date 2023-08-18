import React from 'react';
import '../css/Introduce.css';
function Introduce() {
  return (
    <div className="px-[131px] pt-[30px] flex flex-col w-full  bg-white text-center gap-2 ">
      <h5 className="leading-[48px] text-[32px] text-black">
        Browse The Range
      </h5>
      <p className="leading-[30px] text-[20px] text-gray-500 mb-[15px]">
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </p>
      <div className=" introduce grid grid-cols-3 gap-[5px]">
        <div className="flex flex-col gap-4">
          <img
            className="h-[520px] rounded-md"
            src="./images/dinning.png"
            alt=""
          ></img>
          <p className="leading-[36px] text-[24px]">
            Dining
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <img
            className="h-[520px] rounded-md"
            src="./images/living.png"
            alt=""
          ></img>
          <p className="leading-[36px] text-[24px]">
            Living
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <img
            className="h-[520px] rounded-md"
            src="./images/bedroom.png"
            alt=""
          ></img>
          <p className="leading-[36px] text-[24px]">
            Bedrooma
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
