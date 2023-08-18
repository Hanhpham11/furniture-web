import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
function DetailsProduct() {
  let { id } = useParams();
  const [detail, setDetail] = useState({});
  const getDetail = async () => {
    const response = await axios.get(
      'https://64d61e33754d3e0f1361a0ec.mockapi.io//products/' +
        id
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
    <div>
      <div className="w-full">
        <div className=" flex w-full pl-[99px]gap-[14px] px-[38px] bg-[#F9F1E7] h-[100px] items-center">
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
              <p className="text-[20px]">
                {detail.name}
              </p>
            )}
          </div>
        </div>
        <div className="flex mx-5">
          {detail && (
            <img
              alt=""
              src={detail.url}
              style={{
                width: 423,
                height: 500,
              }}
            />
          )}
          <div className="flex flex-col">
            <h3 className="text-[42px] pl-3">
              {detail.name}
            </h3>
            <span>{detail.price}</span>
            <p>{detail.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsProduct;
