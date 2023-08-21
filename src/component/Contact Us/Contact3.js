import React from 'react';
const Contact3 = () => {
  return (
    <div className="w-full h-[270px] flex justify-around py-[100px] px-[20px] flex-row  bg-[#FAF3EA]">
      <div className="flex flex-row gap-[10px]  ">
        <img
          src="/images/cup.png"
          className="w-[60px] h-[60px]"
        />
        <div className="flex flex-col gap-[2px]">
          <p className="leading-[37.5px] text-[25px] text-black">
            High Quality
          </p>
          <p className="leading-[30px] text-[20px] text-[#898989]">
            crafted from top materials
          </p>
        </div>
        <img
          src="/images/guarantee.png"
          className="w-[60px] h-[60px]"
        />
        <div className="flex flex-col gap-[2px]">
          <p className="leading-[37.5px] text-[25px] text-black">
            Warranty Protection
          </p>
          <p className="leading-[30px] text-[20px] text-[#898989]">
            Over 2 years
          </p>
        </div>
        <img
          src="/images/shipping.png"
          className="w-[60px] h-[60px]"
        />
        <div className="flex flex-col gap-[2px]">
          <p className="leading-[37.5px] text-[25px] text-black">
            Free Shipping
          </p>
          <p className="leading-[30px] text-[20px] text-[#898989]">
            Order over 150 $
          </p>
        </div>
        <img
          src="/images/customer-support.png"
          className="w-[60px] h-[60px]"
        />
        <div className="flex flex-col gap-[2px]">
          <p className="leading-[37.5px] text-[25px] text-black">
            24 / 7 Support
          </p>
          <p className="leading-[30px] text-[20px] text-[#898989]">
            Dedicated support
          </p>
        </div>
      </div>
    </div>
  );
};
export default Contact3;
