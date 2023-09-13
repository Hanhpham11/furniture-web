import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import {
  formatter,
  useShopContext1,
} from './ShopContext1';
import { useState, useEffect } from 'react';
import { groupBy, keys } from 'ramda';
import { current } from '@reduxjs/toolkit';
import axios from 'axios';
import SearchNow from './SearchNow';
import { useFormik } from 'formik';

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
      values.email,
    )
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const Header = () => {
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
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
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
  // validation email
  const formik = useFormik({
    initialValues: {
      email: ' ',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
            <button
              className=" rounded-md w-[100px] bg-[#FA8443] text-white"
              onClick={() => setShow1(!show1)}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      {show1 && (
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className=" z-10 fixed top-[200px] left-[550px] border border-solid border-black rounded-[20px] flex flex-col gap-[10px] w-[300px] bg-white h-[300px] items-center pt-[30px]">
              {/* <p className="text-[25px]">
                SIGN IN
              </p>
              <input
                placeholder="Enter your email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.values.email}
                className="mt-[10px] pl-[15px] h-[50px] w-[200px] border border-solid border-[1px] border-white bg-slate-100 rounded-[10px]"
              ></input>
              {formik.touched.email &&
              formik.errors.email ? (
                <span>{formik.errors.email}</span>
              ) : null}
              <input
                placeholder="Enter password"
                type="password"
                name="password"
                className="pl-[15px] h-[50px] w-[200px] border border-solid border-[1px] border-white bg-slate-100 rounded-[10px]"
              ></input>
              <button
                type="submit"
                className="mt-[10px] bg-white border border-solid border-[1px] border-black w-[100px] h-[30px]"
              >
                Sign In
              </button> */}
              <p className="text-[25px]">
                SIGN IN
              </p>
              <input
                type="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="Enter your email"
                className="mt-[10px] pl-[15px] h-[50px] w-[200px] border border-solid border-[1px] border-white bg-slate-100 rounded-[10px]"
              />
              {formik.touched.email &&
              formik.errors.email ? (
                <span>{formik.errors.email}</span>
              ) : null}
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your email"
                className="mt-[10px] pl-[15px] h-[50px] w-[200px] border border-solid border-[1px] border-white bg-slate-100 rounded-[10px]"
              />
              <button type="submit">
                Submit
              </button>
            </div>
          </form>

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
                            {result[key][0].name}
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
                  {Tota}
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-[14px] mt-[26px]">
              <button className="leading-[18px] text-[12px] border tex-black rounded-[50px] w-[87px] h-[30px] text-center border">
                Cart
              </button>
              <Link to={'/Checkout'}>
                <button className="leading-[18px] text-[12px] border tex-black rounded-[50px] w-[118px] h-[30px] text-center border">
                  Checkout
                </button>
              </Link>

              <button className="leading-[18px] text-[12px] border tex-black rounded-[50px] w-[135px] h-[30px] text-center border">
                Comparison
              </button>
            </div>
          </div>
          <div
            className=" fixed inset-0 bg-black bg-opacity-40 z-[5]"
            onClick={() => setShow(false)}
          />
        </div>
      )}
    </div>
  );
};
export default Header;
