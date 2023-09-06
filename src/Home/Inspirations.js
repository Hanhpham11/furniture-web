import React from 'react';
import { useState, useEffect } from 'react';
import Slideshow from './TransImage';
function Inspirations() {
  const List = [
    {
      id: 1,
      name: 'Bed',
      image: './images/Inspirations1.png',
    },
    {
      id: 2,
      name: 'Living',
      image:
        './images/white-formal-living-room.jpg',
    },
    {
      id: 3,
      name: 'Kitchen',
      image: './images/Kitchen1_bu.jpeg',
    },
  ];

  const [add1, setAdd1] = useState(0);
  console.log('Number5', add1);
  const [list, SetList] = useState([List[add1]]);

  const AddButton = () => {
    console.log('HelloLisst', list);
    const Add2 = add1 + 1;
    setAdd1(Add2);
    SetList([List[Add2]]);
    console.log(list);
  };
  // useEffect(() => {
  //   SetList([List[add1]]);
  // }, []);
  return (
    <div className="w-full py-[44px] pl-[100px] flex flex-row gap-[42px] bg-orange-100 hidden md:flex ">
      <div className="flex flex-col mt-[179px] gap-[7px] w-full md:w-[422px]">
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
      {list.map((item, index) => (
        <img
          src={item.image}
          className="h-[582px] w-full md:w-[404px] relative "
          alt=""
        />
      ))}
      <div className="flex flex-row absolute hidden md:flex">
        <div className=" mt-[428px] ml-[500px] opacity-70 w-[217px] h-[130px] flex flex-col px-[32px] py-[32px] gap-2 bg-white ">
          <div className="flex flex-row items-center">
            {list.map((item, index) => (
              <div>
                <p className="leading-[24px] text-[16px] text-gray-700">
                  {item.id}
                </p>
              </div>
            ))}

            <div className="w-[27px] h-[1px] bg-gray-700 " />
            {list.map((item, index) => (
              <div key={index}>
                <p className="leading-[24px] text-[16px] text-gray-700">
                  {item.name} Room
                </p>
              </div>
            ))}
          </div>
          <p className="leading-[33.6px] text-[28px] text-black">
            Inner Peace
          </p>
        </div>
        <div className="w-[48px] h-[48px] items-center bg-orange-300 mt-[510px] px-[12px] py-[12px]">
          <img
            onClick={AddButton}
            src="./images/Right16.png"
            className="w-[24px] h-[24px]"
            alt=""
          ></img>
        </div>
      </div>
      <Slideshow list={list} />
      {/* <div className="flex flex-col gap-10">
        <div className="">
          <div className=" flex flex-row relative">
            <img
              src="./images/Inspirations2.png"
              className="slide w-full md:w-[372px] h-[486px] "
              alt=""
            />
            <img
              src="./images/Inspirations3.png"
              className="slide w-full md:w-[372px] h-[486px] ml-[6px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row gap-[20px]">
          <button className="w-[11px] h-[11px] border border-black rounded-full"></button>
          <button className="w-[11px] h-[11px] border border-black rounded-full"></button>
          <button className="w-[11px] h-[11px] border border-black rounded-full"></button>
          <button className="w-[11px] h-[11px] border border-black rounded-full"></button>
        </div>
      </div> */}
    </div>
  );
}

export default Inspirations;
