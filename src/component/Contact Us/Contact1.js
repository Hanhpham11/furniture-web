import React from 'react';
const Contact1 = () => {
  return (
    <div className=" shopbanner w-full h-[316px]  relative]">
      <div className="flex flex-col absolute w-[196px] ml-[622px] mt-[62px] items-center">
        <img
          src="/images/logo15.png"
          className="w-[77px] h-[77px]"
        />
        <h1 className=" text-[48px] text-black ">
          Contact
        </h1>
        <div className="flex flex-row gap-[6px] h-[24px] items-center">
          <p className="leading-[24px] text-[16px] text-black font-medium">
            Home
          </p>
          <img
            src="/images/right-black.png"
            className="w-[20px] h-[20px]"
          />
          <p className="leading-[24px] text-[16px] text-black ">
            Contact
          </p>
        </div>
      </div>
    </div>
  );
};
export default Contact1;
