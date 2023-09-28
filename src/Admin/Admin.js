import React from 'react';
import './Admin.css';
import Adminproduct from './Adminproduct';
import { useState } from 'react';
import Admincontact from './Admincontact';
import AdminOrder from './AdminOrder';
import { useNavigate } from 'react-router-dom';
import Link from 'antd/es/typography/Link';
const Admin = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const onRequest = () => {
    setShow(false);
    setShow2(false);
    setShow1(true);
  };

  const onProduct = () => {
    setShow1(false);
    setShow2(false);
    setShow(true);
  };
  const onChekout = () => {
    setShow1(false);
    setShow(false);
    setShow2(true);
  };

  const changeHome = () => {
    navigate('/');
  };
  return (
    <div className="w-full">
      <div className="page w-full h-[316px] flex flex-col gap-[5px] justify-center items-center">
        <img
          src="./images/logo15.png"
          className="w-[100px] h-[100px]"
        ></img>
        <p className="text-black text-[30px]">
          ADMIN
        </p>
      </div>
      <div className="flex flex-col">
        {' '}
        <div className="w-full h-[80px] px-[10px] py-[10px] flex flex-row gap-[50px]  bg-stone-300 justify-around ">
          <div className="flex flex-row items-center gap-[5px] align-middle">
            <img
              src="./images/home.png"
              className="w-[30px] h-[30px] "
            />
            <p
              onClick={changeHome}
              className="text1 text-[20px] text-black text-center "
            >
              Home
            </p>
          </div>

          <div className="flex flex-row items-center">
            <img
              src="./images/product.png"
              className="w-[30px] h-[30px]"
            />
            <p
              onClick={onProduct}
              id="product"
              className="selec text1 text-[20px] text-black "
            >
              Our product
            </p>
          </div>
          <div className="flex flex-row items-center">
            <img
              src="./images/request.png"
              className="w-[30px] h-[30px]"
            />
            <p
              className="selec text1 text-[20px] text-black "
              id="request"
              onClick={onRequest}
            >
              Request
            </p>
          </div>
          <div className="flex flex-row items-center">
            <img
              src="./images/order.png"
              className="w-[30px] h-[30px]"
            />
            <p
              onClick={onChekout}
              id="checkout"
              className="selec text1 text-[20px] text-black "
            >
              The Orders
            </p>
          </div>
        </div>
        <div className=" flex">
          {show && <Adminproduct />}
          {show1 && <Admincontact />}
          {show2 && <AdminOrder />}
        </div>
      </div>
    </div>
  );
};
export default Admin;
