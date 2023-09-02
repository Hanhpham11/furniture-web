import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { formatter } from '../component/ShopContext1';
import './Details.css';
function DetailsProduct() {
  let { id } = useParams();
  const [detail, setDetail] = useState({});
  const getDetail = async () => {
    const response = await axios.get(
      'https://64d61e33754d3e0f1361a0ec.mockapi.io//products/' +
        id,
    );
    if (response.status === 200) {
      setDetail(response.data);
    }
    console.log(response);
  };
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div className="font-sans flex flex-col">
      <div className="flex w-full pl-[99px]gap-[14px] px-[38px] bg-[#F9F1E7] h-[100px] items-center">
        <p className="leading-[24px] text-[16px] text-gray-400">
          Home
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z"
            fill="black"
          />
        </svg>
        <p className="leading-[24px] text-[16px] text-gray-400 ml-[10px]">
          Shop
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z"
            fill="black"
          />
        </svg>
        <p className="h=[37px] leading-[24px] text-[16px] text-gray-400 ml-[10px]">
          |
        </p>
        <div className="leading-[24px] text-[16px] text-gray-400 ml-[10px]">
          {detail && (
            <p className="text-[20px] text-black">
              {detail.name}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-[82px] py-5 ml-[50px]">
        <div className="flex mx-[20px]  flex-2 ">
          {detail && (
            <img
              alt=""
              src={detail.url}
              style={{
                width: 481,
                height: 500,
              }}
            />
          )}
        </div>
        <div className="flex flex-col flex-1 gap-[20px] ">
          <h3 className="text-[42px]  ">
            {detail.name}
          </h3>
          <span className=" text-[24px] text-[#9F9F9F]">
            {formatter.format(detail.price)}
          </span>
          <p className="text-[13px] mt-[30px] max-w-xs">
            {detail.description}
          </p>
          <p>Size</p>
          <div className="size flex gap-[15px]">
            <li>
              <button>M</button>
            </li>
            <li>
              <button>L</button>
            </li>
            <li>
              <button>XL</button>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsProduct;
