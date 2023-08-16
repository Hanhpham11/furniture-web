import React from 'react';
const Footer = () => {
  return (
    <div className="w-full h-[505px] pt-[48px] pl-[100px] flex flex-col gap-12 border-t-2">
      <div className="flex flex-row gap-[138px]">
        <div className="flex flex-col gap-[50px] w-[285px]">
          <h1 className="leading-[36px] text-[24px] text-black">
            Funiro.
          </h1>
          <div className="w-[285px] h-[72px]">
            <p className="leading-[24px] text-[16px] text-gray-600">
              400 University Drive Suite 200 Coral Gables,
              FL 33134 USA
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[46px]">
          <p className="mt-[9px] leading-[24px] text-[16px] text-gray-500">
            Links
          </p>
          <a className="leading-[24px] text-[16px] text-black">
            Home
          </a>
          <a className="leading-[24px] text-[16px] text-black">
            Shop
          </a>
          <a className="leading-[24px] text-[16px] text-black">
            About
          </a>
          <a className="leading-[24px] text-[16px] text-black">
            Contact
          </a>
        </div>
        <div className="flex flex-col gap-[46px]">
          <a className="mt-[9px] leading-[24px] text-[16px] text-gray-500">
            Help
          </a>
          <a className="leading-[24px] text-[16px] text-black">
            Payment Options
          </a>
          <a className="leading-[24px] text-[16px] text-black">
            Returns
          </a>
          <a className="leading-[24px] text-[16px] text-black">
            Privacy Policies
          </a>
        </div>
        <div className="flex flex-col gap-[46px]">
          <p className="mt-[9px] leading-[24px] text-[16px] text-gray-500">
            Newsletter
          </p>
          <input
            className="w-[200px] h-[30px] leading-[21px] text-[14px] "
            placeholder="Enter Your Email Address "
          ></input>
        </div>
        <button className="w-[100px] h-[30px] ml-[-124px] mt-[79px]">
          Subcribe
        </button>
      </div>

      <div className="w-[1240px] h-[1px] bg-gray-700"></div>
      <p className="leading-[24px] text-[16px] text-black">
        2023 furino. All rights reverved
      </p>
    </div>
  );
};
export default Footer;
