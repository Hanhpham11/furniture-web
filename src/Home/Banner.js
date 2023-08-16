import React from 'react';
import './Banner.css';
function Banner() {
  return (
    <div className=" w-full flex flex-col overflow-hidden">
      <div className="relative banner ">
        <div className=" mt-[153px] ml-[700px] flex flex-col gap-[4px] bg-[#FFF3E3] pl-[41px] pr-[43px] pb-[37px] absolute w-[643px] h-[443px]">
          <h6 className="leading-[24px] text-[16px] text-black mt-[62px]">
            NEW ARRIVAL
          </h6>
          <h1 className=" leading-[65px] text-[40px] text-amber-600">
            DISCOVER OUR NEW COLLECTION
          </h1>
          <p className="leading-24px text-18px text-black mt-[13px]">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="w-[222px] text-[30px] h-[74px] items-center justify-center mt-[42px] bg-amber-600 ">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
