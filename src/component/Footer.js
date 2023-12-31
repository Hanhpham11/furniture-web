import React from 'react';
import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Signup from './SignUp';
import Login from './Login';
import {
  useShopContext9,
  useShopContext2,
} from './ShopContext1';
const Footer = () => {
  const { showSignup, setShowSignup } =
    useShopContext9();
  const { showLogin, setShowLogin } =
    useShopContext2();
  const initialState = {
    email: '',
    password: '',
  };
  const [emai, setEmai] = useState(initialState);
  useState(initialState);
  useEffect(() => {
    const emailStore =
      window.localStorage.getItem('email');
    setEmai({ ...emai, email: emailStore });
  }, []);
  const handleChange = (e) => {
    setEmai({
      ...emai,
      [e.target.name]: e.target.value,
    });
  };
  // const [getUser, setGetuser] = useState();
  // const [show, setShow] = useState(false);
  // const handleSubmit = () => {
  //   window.localStorage.setItem(
  //     'email',
  //     emai.email,
  //     setShow1(true),
  //   );
  //   const getUser1 =
  //     window.localStorage.getItem('email');
  //   setGetuser(getUser1);
  // };
  // console.log(getUser);
  const loggin = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  return (
    <div className="w-full font-sans h-[505px] border-slate-300 pt-[48px] px-[100px] border-solid border-t-2 flex flex-col gap-12 mt-[30px] ">
      <div className="flex flex-row gap-[138px]">
        <div className="flex flex-col gap-[50px] w-[285px]">
          <h1 className="leading-[36px] text-[24px] text-black">
            Funiro.
          </h1>
          <div className="w-[285px] h-[72px]">
            <p className="leading-[24px] text-[16px] text-gray-600">
              400 University Drive Suite 200 Coral
              Gables, FL 33134 USA
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
          <p
            className=" text-black hover:text-red-500 underline"
            onClick={loggin}
          >
            Sign in here
          </p>

          {/* <input
            className="w-[200px] h-[30px] leading-[21px] text-[14px] "
            placeholder="Enter Your Email Address "
            name="email"
            onChange={handleChange}
          ></input> */}
        </div>
        {/* <button
          className="w-[100px] h-[30px] ml-[-124px] mt-[79px]"
          onClick={handleSubmit}
        >
          Subcribe
        </button> */}
      </div>
      <div className="w-full h-[1px] bg-gray-700 "></div>
      <p className="leading-[24px] text-[16px] text-black">
        2023 furino. All rights reverved
      </p>
      {showSignup && (
        <div>
          <Signup />
          <div
            className=" fixed inset-0 bg-black bg-opacity-40 z-[5]"
            onClick={() => setShowSignup(false)}
          />
        </div>
      )}
    </div>
  );
};
export default Footer;
