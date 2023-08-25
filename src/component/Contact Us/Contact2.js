import React from 'react';
const Contact2 = () => {
  return (
    <div className="w-full h-[1144px] flex flex-col pt-[98px] px-[191px] bg-white  ">
      <p className="leading-[54px] text-[36px] text-black font-[600] ml-[342px]">
        Get In Touch With Us
      </p>
      <p className="leading-[24px] text-[16px] text-[#9F9F9F] font-[600] text-center w-[644px] ml-[207px]">
        For More Information About Our Product &
        Services. Please Feel Free To Drop Us An
        Email. Our Staff Always Be There To Help
        You Out. Do Not Hesitate!
      </p>
      <div className="flex flex-row gap-[30px]">
        <div className="flex flex-col gap-[42px] w-[393px] h-[527px] pt-[46.12px] pl-[54px] pr-[75px] mt-[82px]">
          <div className="flex flex-row gap-[30px]">
            <img
              src="/images/Vector.png"
              className="w-[22px] h-[27.6px]"
            ></img>
            <div className="flex flex-col">
              <p className="leading-[36px] text-[24px]">
                Address
              </p>
              <p className="leading-[24px] text-[16px] font-medium w-[212px]">
                236 5th SE Avenue, New York
                NY10000, United States
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-[30px]">
            <img
              src="/images/phone.png"
              className="w-[22px] h-[27.6px]"
            ></img>
            <div className="flex flex-col">
              <p className="leading-[36px] text-[24px]">
                Phone
              </p>
              <p className="leading-[24px] text-[16px] font-medium w-[212px]">
                Mobile: +(84) 546-6789 Hotline:
                +(84) 456-6789
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-[30px]">
            <img
              src="/images/clock-fill.png"
              className="w-[22px] h-[22px]"
            ></img>
            <div className="flex flex-col">
              <p className="leading-[36px] text-[24px]">
                Working Time
              </p>
              <p className="leading-[24px] text-[16px] font-medium w-[212px]">
                Monday-Friday: 9:00 - 22:00
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>
        <div className="w-[635px] h-[923px] ml-[14px] pt-[119px] pl-[53px] pr-[52px] flex flex-col ">
          <p className="leading-[24px] text-[16px]">
            Your name
          </p>
          <input
            className="w-[529px] h-[75px] border rounded-[5px] items-center pl-[29.75px] mt-[22px]"
            placeholder="Abc"
          ></input>
          <p className="leading-[24px] text-[16px] mt-[36px]">
            {' '}
            Email address
          </p>
          <input
            className="w-[529px] h-[75px] border rounded-[5px] items-center pl-[29.75px] mt-[22px]"
            placeholder="Abc@def.com"
          ></input>
          <p className="leading-[24px] text-[16px] mt-[36px]">
            {' '}
            Subject
          </p>
          <input
            className="w-[529px] h-[75px] border rounded-[5px] items-center pl-[29.75px] mt-[22px]"
            placeholder="This is an optional"
          ></input>
          <p className="leading-[24px] text-[16px] mt-[36px]">
            {' '}
            Message
          </p>
          <input
            className="w-[529px] h-[120px] border rounded-[5px] items-center pl-[30px] mt-[22px]"
            placeholder="Hi! i’d like to ask about"
          ></input>
          <button className="text-center mt-[49px] w-[237px] h-[55px] rounded-[5px] bg-[#B88E2F] text-[white]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Contact2;
