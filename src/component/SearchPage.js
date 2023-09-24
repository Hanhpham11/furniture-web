import React from 'react';
import Header from './Header';
import Link from 'antd/es/typography/Link';
import { formatter } from './ShopContext1';
import { useState } from 'react';
const SearchPage = (search) => {
  return (
    <div className="w-full">
      <Header />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  md:gap-[10px] gap-[30px] mx-[30px] font-sans md:mx-[30px] mt-[50px]">
        {/* {search?.map((item) => (
          <div>
            <div
              key={item}
              className=" card h-[440px]"
            >
              <div className="item">
                <img
                  src={item.url}
                  alt={item.productname}
                  style={{
                    width: 284,
                    height: 301,
                  }}
                />
                <div className="add w-[285px] h-[301px]">
                  <button className="  bottom-2 left-2 border-solid border h-[48px] w-[202px]">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="infor  ">
                <Link to={'/detail/' + item.id}>
                  <p className=" text-[20px]">
                    {item.productname}
                  </p>
                </Link>
                <p className="text-[18px] py-2 text-[#898989]">
                  {item.type}
                </p>
                <span className="text-[18px]">
                  {formatter.format(item.price)}
                </span>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};
export default SearchPage;
