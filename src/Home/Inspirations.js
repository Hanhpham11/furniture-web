import React from 'react';

function Inspirations() {
  return (
    <div className="w-full py-[44px] pl-[100px] flex flex-row gap-[42px] bg-orange-100 ">
      <div className="flex flex-col mt-[179px] gap-[7px] w-[422px]">
        <h1 className="leading-[48px] text-[40px] text-black">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="leading-[24px] text-[16px]">
          Our designer already made a lot of
          beautiful prototipe of rooms that
          inspire you
        </p>
        <button className="mt-[18px] w-[176px] h-[48px] leading-[24px] text-[16px] text-center bg-amber-700">
          EXPLORE MORE
        </button>
      </div>
      <img
        src="./images/Inspirations1.png"
        className="h-[582px] w-[404px] relative "
        alt=""
      />
      <div className="flex flex-row absolute">
        <div className=" mt-[428px] ml-[350px] opacity-70 w-[217px] h-[130px] flex flex-col px-[32px] py-[32px] gap-2 bg-white ">
          <div className="flex flex-row items-center">
            <p className="leading-[24px] text-[16px] text-gray-700">
              01
            </p>
            <div className="w-[27px] h-[1px] bg-gray-700 " />
            <p className="leading-[24px] text-[16px] text-gray-700">
              Bed Room
            </p>
          </div>
          <p className="leading-[33.6px] text-[28px] text-black">
            Inner Peace
          </p>
        </div>
        <div className="w-[48px] h-[48px] items-center bg-orange-300 mt-[510px] px-[12px] py-[12px]">
          <img
            src="./images/Right16.png"
            className="w-[24px] h-[24px]"
            alt=""
          ></img>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-row relative">
          <img
            src="./images/Inspirations2.png"
            className="w-[372px] h-[486px] "
            alt=""
          />
          <button className="w-[48px] h-[48px] bg-white rounded-full absolute px-[12px] py-[12px] mt-[267px] ml-[345px]">
            <img
              src="./images/Right24.png"
              className="w-[24px] h-[24px]"
              alt=""
            ></img>
          </button>

          <img
            src="./images/Inspirations3.png"
            className="w-[372px] h-[486px] ml-[6px]"
            alt=""
          />
        </div>
        <div className="flex flex-row gap-[20px]">
          <button className="w-[11px] h-[11px] border border-black rounded-full"></button>
          <button className="w-[11px] h-[11px] border border-black rounded-full"></button>
          <button className="w-[11px] h-[11px] border border-black rounded-full"></button>
          <button className="w-[11px] h-[11px] border border-black rounded-full"></button>
        </div>
      </div>
    </div>
  );
}

export default Inspirations;
