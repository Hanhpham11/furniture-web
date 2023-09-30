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
import { useShopContext7 } from './ShopContext1';
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate();
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
  const [show6, setShow6] = useState(false);
  const { showUser, setShowUser } =
    useShopContext4();
  const { showSignin, setShowSignin } =
    useShopContext5();
  const { showLogin, setShowLogin } =
    useShopContext2();
  // const { show2, setShow2 } = useShopContext3();
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
    setShow6(false);
    setShowUser(false);
    setShowSignin(true);
    setCart([]);
  };
  const { purchase, setPurchase } =
    useShopContext7();
  const [checkOut1, setCheckOut1] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      'https://64d61e33754d3e0f1361a0ec.mockapi.io/checkout?fbclid=IwAR3LLB3EMaRykaMXkw9Fw_acuFrdHYifV6QZwsu-I90qBob8beFQne_0-K8',
      {
        params: {
          filter: {
            order: ['id DESC'],
          },
        },
      },
    );
    if (response.status === 200) {
      setCheckOut1(response.data);
    }
    // console.log(response);
  };

  useEffect(() => {
    getData();
  }, []);
  const email0 =
    window.localStorage.getItem('userEmail');
  const onPurchase = () => {
    const newArray = [];

    if (purchase.length == 0) {
      for (let z = 0; z < checkOut1.length; z++) {
        if (checkOut1[z].email === email0) {
          newArray.unshift(checkOut1[z]);
          console.log(newArray);
          setPurchase(newArray);
        }
      }
    } else {
      const lengt = checkOut1.length - 1;
      if (checkOut1[lengt].email == email0) {
        newArray.unshift(checkOut1[lengt]);
        console.log(newArray);
        setPurchase(newArray);
      }
    }
    navigate('/HistoryPurchase');
    console.log(newArray);
  };
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
            {showUser && (
              <div className="flex flex-row items-center gap-4 w-[100px]">
                <div
                  onClick={() => setShow6(!show6)}
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
            {showSignin && (
              <div>
                <button
                  className=" rounded-md w-[100px] bg-[#FA8443] text-white"
                  onClick={() =>
                    setShowLogin(!showLogin)
                  }
                >
                  Sign In
                </button>
                {showLogin && <Login />}
              </div>
            )}
          </div>
        </div>
      </div>
      {showLogin && (
        <div>
          <Login />
          <div
            className=" fixed inset-0 bg-black bg-opacity-40 z-[5]"
            onClick={() => setShowLogin(false)}
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
      {show6 && (
        <div>
          <div className=" rounded-b-lg bg-slate-300 px-[5px] py-[10px] fixed right-0 top-[100px] bottom-0 z-10 w-[150px] h-[120px]  flex flex-col gap-[5px] ">
            <button
              onClick={onPurchase}
              className="w-full text-white border-none  bg-slate-300 "
            >
              Purchase history
            </button>

            <button
              onClick={onLoggout}
              className="w-full mt-[5px] text-white border-none bg-slate-300 "
            >
              Loggout
            </button>
          </div>
          <div
            className=" fixed inset-0 bg-black bg-opacity-40 z-[5]"
            onClick={() => setShow6(false)}
          />
        </div>
      )}
    </div>
  );
}
export default Header;
