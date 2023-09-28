import React from 'react';
import './Admin.css';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { groupBy, keys } from 'ramda';
import { useShopContext8 } from '../component/ShopContext1';
import { useNavigate } from 'react-router-dom';
const DetailProduct = () => {
  const navigate = useNavigate();
  const { details, setDetails } =
    useShopContext8();
  const result = groupBy(({ id }) => id)(
    details[0].listproduct,
  );
  const carts = keys(result);
  const onReturn = () => {
    navigate('/Admin');
  };
  return (
    <div className="w-full py-[20px] ">
      <div className="page w-full h-[316px] flex flex-col gap-[5px] justify-center items-center">
        <img
          src="./images/logo15.png"
          className="w-[100px] h-[100px]"
        ></img>
        <p className="text-black text-[30px]">
          ADMIN
        </p>
      </div>
      <div className="flex flex-col gap-[20px] w-full px-[100px] py-[20px] ">
        <p className="text-[30px] text-black">
          Email
        </p>
        <p className="text-[17px] text-stone-500">
          {details[0].email}
        </p>
        <p className="text-[30px] text-black">
          Time Order
        </p>
        <p className="text-[17px] text-stone-500">
          {details[0].Date}
        </p>
        <p className="text-[30px] text-black">
          Order Product
        </p>

        <div>
          {carts.map((key, index) => (
            <div className="flex flex-col gap-[10px]">
              {result[key] && result[key][0] && (
                <div className="grid grid-cols-3 w-[500px] gap-[10px]   ">
                  <p className="text-[17px] text-stone-500">
                    {result[key][0].productname}
                  </p>
                  <p className="text-[17px] text-stone-500">
                    x
                  </p>
                  <p className="text-[17px]  text-stone-500">
                    {result[key].length}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-[30px] text-black">
          Total order value
        </p>
        <p className="text-[17px] text-stone-500">
          {details[0].price}
        </p>
        <p className="text-[30px] text-black">
          Payment
        </p>
        <p className="text-[17px] text-stone-500">
          {details[0].payment}
        </p>
        <p className="text-[30px] text-black">
          Customer name
        </p>
        <p className="text-[17px] text-stone-500">
          {
            details[0].userinformation[0]
              .clientname
          }
        </p>
        <p className="text-[30px] text-black">
          Delivery address
        </p>
        <p className="text-[17px] text-stone-500">
          {
            details[0].userinformation[0]
              .information
          }
        </p>
        <p className="text-[30px] text-black">
          Other contact information
        </p>
        <p className="text-[17px] text-stone-500">
          {details[0].userinformation[0].phone}
        </p>
        <p className="text-[17px] text-stone-500">
          {
            details[0].userinformation[0]
              .emailinAdd
          }
        </p>
        <p className="text-[30px] text-black">
          More information
        </p>
        <p className="text-[17px] text-stone-500">
          {
            details[0].userinformation[0]
              .moreinfor
          }
        </p>
      </div>
      <button
        onClick={onReturn}
        className=" ml-[20px] w-[100px] h-[70px] bg-amber-200"
      >
        Return
      </button>
    </div>
  );
};
export default DetailProduct;
