import React from 'react';
import Header from './Header';
import { useState, useEffect } from 'react';
import { useShopContext7 } from './ShopContext1';
import axios from 'axios';
import { groupBy, keys } from 'ramda';
const Purchase = () => {
  const { purchase, setPurchase } =
    useShopContext7();
  console.log(purchase);
  return (
    <div className="w-full">
      <Header />
      <div className="mt-[100px] flex flex-col w-full px-[100px]">
        {purchase?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-[10px]"
          >
            <p className="text-[30px] text-black mt-[20px]">
              Date Delivery
            </p>
            <p className="text-[17px] text-stone-500">
              {item.Date}
            </p>
            <p className="text-[30px] text-black">
              Payable Amount
            </p>
            <p className="text-[17px] text-stone-500">
              {item.price}
            </p>
            <p className="text-[30px] text-black">
              Payment
            </p>
            <p className="text-[17px] text-stone-500">
              {item.payment}
            </p>
            <p className="text-[30px] text-black">
              Adress order
            </p>
            <p className="text-[17px] text-stone-500">
              {
                [item.userinformation[0]]
                  .information
              }
            </p>
            <p className="text-[30px] text-black">
              List Product
            </p>
            <div className="flex flex-col gap-[8px]">
              {item.listproduct.map(
                (value, index) => (
                  <div>
                    <p className="text-[17px] text-stone-500">
                      {value.productname}
                    </p>
                  </div>
                ),
              )}
            </div>
            <div className="w-full h-[1px] bg-black" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Purchase;
