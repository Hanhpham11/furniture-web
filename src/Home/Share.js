import React from 'react';

function Share() {
  return (
    <div className="w-full pt-[32px] flex flex-col gap-2 relative text-center pb-[32px] overflow-x-hidden">
      <h5 className="leading-[30px] text-[20px]">
        Share your setup with
      </h5>
      <h1 className="leading-[48px] text-[40px]">
        #FuniroFurniture
      </h1>

      <div className="flex flex-col= gap-4 mt-[27px] relative">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <img
              src="./images/unos.png"
              className=" w-[274px] h-[382px] mt-[-50px] "
              alt=""
            />
            <img
              src="./images/dos.png"
              className="w-[451px] h-[312px] ml-94px mt-[20px]"
              alt=""
            />
          </div>

          <div className="flex flex-row gap-4">
            <img
              src="./images/tres.png"
              className="w-[381px] h-[323px]"
              alt=""
            />
            <img
              src="./images/cuatro.png"
              className="w-[344px] h-[242px]"
              alt=""
            />
          </div>
        </div>
        <img
          src="./images/cinco.png"
          className="w-[295px] h-[392px] mt-[86px]  "
          alt=""
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <img
              src="./images/siete.png"
              className="w-[290px] h-[348px] "
              alt=""
            />
            <img
              src="./images/seis.png"
              className=" w-[274px] h-[382px] mt-[-35px] "
              alt=""
            />
          </div>

          <div className="flex flex-row gap-4">
            <img
              src="./images/ocho.png"
              className="w-[178px] h-[242px]"
              alt=""
            />
            <img
              src="./images/nueve.png"
              className="w-[258px] h-[196px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;
