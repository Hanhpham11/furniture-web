import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import {
  formatter,
  useShopContext1,
  useShopContext2,
  useShopContext3,
  useShopContext4,
  useShopContext5,
} from './ShopContext1';
import { useState, useEffect } from 'react';
import { groupBy, keys, values } from 'ramda';
import { current } from '@reduxjs/toolkit';
import axios from 'axios';
import SearchNow from './SearchNow';
import { Formik, useFormik } from 'formik';
import Login from './Login';
import { useContext } from 'react';

function Header() {
  const [keyword, setKeyword] = useState('');
  function handleInput(e) {
    setKeyword(e.target.value);
  }
  async function handleSearch() {
    const { data } = await axios.get(
      `https://64d61f3d754d3e0f1361a33b.mockapi.io/Furniture/hi/utinure?q=${keyword}`,
    );
    // console.log(data);
  }
  const [message, setMessage] = useState('');

  const [show, setShow] = useState(false);
  const [show5, setShow5] = useState(false);
  const { show3, setShow3 } = useShopContext4();
  const { show4, setShow4 } = useShopContext5();
  const { show1, setShow1 } = useShopContext2();
  const { show2, setShow2 } = useShopContext3();
  const { cart = [], setCart } =
    useShopContext1();
  const result = groupBy(({ id }) => id)(cart);

  const carts = keys(result);

  const onDeleteProduct = (targetId) => {
    const newCarts = cart.filter(
      (item) => item.id !== targetId,
    );

    setCart(newCarts);
  };

  const Tota = cart.reduce(
    (accumulator, current) =>
      Math.floor(
        accumulator + Number(current.price),
      ),
    0,
  );
  const account =
    window.localStorage.getItem('userEmail') ||
    '';
  const account1 = account[0];
  const onLoggout = () => {
    window.localStorage.removeItem('userEmail');
    setShow5(false);
    setShow3(false);
    setShow4(true);
  };
  // const [message, setMessage] = useState('')
  const setChange = function (childdata) {
    // console.log('datafromChild', childdata);
  };
  SearchNow(setChange);
  return (
    <div>
      <div className="w-full font-sans h-[100px] bg-white pl-[54px]  top-0 left-0 right-0 z-10 fixed">
        <div className="flex flex-row  gap-[120px]  ">
          <div className=" logo flex flex-row gap-[5px] items-center h-[100px]">
            <img
              src="/logo12.png "
              alt=""
              className="w-[50px] h-[32px]"
            ></img>
            <Link to={'/'}>
              <p>Funiro</p>
            </Link>
          </div>
          <div className="flex flex-row gap-[75px] ml-[108px] items-center h-[100px]">
            <Link to={'/'}>
              <p>Home</p>
            </Link>
            <Link to={'/shop'}>
              <p>Shop</p>
            </Link>
            <Link to={'/About'}>
              <p>About</p>
            </Link>
            <Link to={'/ContactUs'}>
              <p>Contact</p>
            </Link>
          </div>

          <div className="flex flex-row gap-[20px]  items-center h-[100px] ">
            <SearchNow />
            <div className="unos flex flex-col shadow-2xl gap-10px  shadow-gray-500/50">
              <div className="flex flex-row">
                <img
                  onClick={() => setShow(!show)}
                  src="/images/ant-design_shopping-cart-outlined.png"
                  className="w-[28px] h-[28px] "
                  data-toggle="collapse"
                  data-target="#Number1"
                  alt=""
                ></img>
                <p
                  style={{
                    color:
                      cart.length !== 0
                        ? 'red'
                        : 'white',
                  }}
                  className=" text-10px  mt-[5px]"
                >
                  {cart && cart.length}
                </p>
              </div>
            </div>
            {show3 && (
              <div className="flex flex-row items-center gap-4 w-[100px]">
                <div
                  onClick={() => setShow5(!show5)}
                  className=" bg-amber-300 ml-[50px]  rounded-full  text-center py-[4px] h-[40px] w-[40px]"
                >
                  <p className="text-white text-[28px]">
                    {account1}
                  </p>
                </div>
                {/* <button
                  onClick={handleLogout}
                  className="py-3 px-3 rounded-md bg-[#FA8443] text-white"
                >
                  LOGOUT
                </button> */}
              </div>
            )}
            {show4 && (
              <div>
                <button
                  className=" rounded-md w-[100px] bg-[#FA8443] text-white"
                  onClick={() => setShow1(!show1)}
                >
                  Sign In
                </button>
                {show1 && <Login />}
              </div>
            )}
          </div>
        </div>
      </div>
      {show1 && (
        <div>
          <div
            className=" fixed inset-0 bg-black bg-opacity-40 z-[5]"
            onClick={() => setShow1(false)}
          />
        </div>
      )}

      {show && (
        <div>
          <div
            id="Number1"
            className="dos w-[417px] pb-[28px] flex flex-col pl-[30px] pt-[28px] overflow-y-auto fixed right-0 top-[100px] bottom-0 z-10"
          >
            <div className="flex flex-row gap-[152px]">
              <p className="leading-[36x] text-[24px] text-black">
                Shopping Cart
              </p>
              <img
                src="/image/Group.png"
                className="w-[16.625px] h-[19px]"
                alt=""
              />
            </div>
            <div className="w-[287px] h-[1px] bg-black"></div>
            <div className="flex flex-col gap-[28px] mt-[49px] border-b-2 pb-[23px]">
              {carts?.map((key, index) => (
                <div className="grid grid-cols-1">
                  {result[key] &&
                    result[key][0] && (
                      <div className="flex flex-row gap-[32px] items-center">
                        <img
                          src={result[key][0].url}
                          className="w-[111px] h-[90px] rounded"
                          alt=""
                        />
                        <div className="flex flex-col gap-[11px] mt-[17px]">
                          <p className="leading-[24px] text-[16px] text-black">
                            {
                              result[key][0]
                                .productname
                            }
                          </p>
                          <div className="flex flex-row gap-[15px] items-center">
                            <p className="leading-[24px] text-[16px] text-black">
                              {result[key].length}
                            </p>
                            <p className="leading-[18px] text-[12px] text-black">
                              X
                            </p>
                            <p className="leading-[24px] text-[16px] text-[#B88E2F]">
                              {formatter.format(
                                result[key][0]
                                  .price,
                              )}
                            </p>
                          </div>
                        </div>
                        <img
                          onClick={() =>
                            onDeleteProduct(key)
                          }
                          src="/images/Vector1.png"
                          className="w-[20px] h-[20px]"
                          alt=""
                        />
                      </div>
                    )}
                </div>
              ))}

              <div className="flex flex-row gap-[101px] mt-[253px]">
                <p
                  style={{
                    color:
                      Tota !== 0
                        ? 'black'
                        : 'white',
                  }}
                  className="leading-[24px] text-[16px] text-black"
                >
                  Subtotal
                </p>
                <p
                  style={{
                    color:
                      Tota !== 0
                        ? 'black'
                        : 'white',
                  }}
                  className="leading-[24px] text-[16px] "
                >
                  {formatter.format(Tota)}
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-[14px] mt-[26px]">
              <Link to={'/Checkout'}>
                <button className="leading-[18px] text-[12px] border tex-black rounded-[50px] w-[118px] h-[30px] text-center border">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
          <div
            className=" fixed inset-0 bg-black bg-opacity-40 z-[5]"
            onClick={() => setShow(false)}
          />
        </div>
      )}
      {show5 && (
        <div>
          <div className=" px-[5px] py-[10px] fixed right-0 top-[100px] bottom-0 z-10 w-[150px] h-[120px] bg-white flex flex-col gap-[20px] ">
            <p className="text-gray-700">
              Purchase history
            </p>

            <p
              onClick={onLoggout}
              className="mt-[5px] text-gray-700"
            >
              Loggout
            </p>
          </div>
          <div
            className=" fixed inset-0 bg-black bg-opacity-40 z-[5]"
            onClick={() => setShow5(false)}
          />
        </div>
      )}
    </div>
  );
}
export default Header;
