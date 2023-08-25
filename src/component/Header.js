import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useShopContext1 } from './ShopContext1';
import { useState } from 'react';
import { groupBy, keys } from 'ramda';
const Header = () => {
  const [show, setShow] = useState(false);
  const { cart = [] } = useShopContext1();
  const result = groupBy(({ id }) => id)(cart);
  console.log(111, result);

  const carts = keys(result);

  // const Delete = (dele) => {
  //   const UnDelete = carts.findIndex(
  //     (item) => item === '1'
  //   );

  //   cart.splice(UnDelete, 1);
  // };
  const Delete = (dele) => {
    carts.splice(carts.indexOf(dele), 1);
  };
  console.log('hi', carts);
  // cart.map((item) => {
  //   const Sub = 0;
  //   return (Sub = Sub + item.price);
  // });
  const Sub = 0;
  return (
    <div>
      <div className="w-full h-[100px] bg-white pl-[54px] fixed top-0 left-0 right-0 z-10">
        <div className="flex flex-row  gap-[158px]  ">
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
            <Link to={'/shop'}>
              <p>About</p>
            </Link>
            <Link to={'/ContactUs'}>
              <p>Contact</p>
            </Link>
          </div>

          <div className="flex flex-row gap-[45px] items-center h-[100px] ">
            <img
              alt=""
              src="/images/mdi_account-alert-outline.png"
              className="w-[28px] h-[28px] "
            ></img>
            <img
              alt=""
              src="/images/akar-icons_search.png"
              className="w-[28px] h-[28px] "
            ></img>
            <img
              alt=""
              src="/images/akar-icons_heart.png"
              className="w-[28px] h-[28px] "
            ></img>
            <div className="unos flex flex-col shadow-2xl gap-10px  shadow-gray-500/50">
              <div className="flex flex-row">
                <img
                  onClick={() => setShow(!show)}
                  src="/images/ant-design_shopping-cart-outlined.png"
                  className="w-[28px] h-[28px] "
                  data-toggle="collapse"
                  data-target="#Number1"
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
          </div>
        </div>
      </div>
      {show && (
        <>
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
                              {
                                result[key][0]
                                  .price
                              }
                            </p>
                          </div>
                        </div>
                        <img
                          onClick={() =>
                            Delete(key)
                          }
                          src="/images/Vector1.png"
                          className="w-[20px] h-[20px]"
                        />
                      </div>
                    )}
                </div>
              ))}

              <div className="flex flex-row gap-[101px] mt-[253px]">
                <p className="leading-[24px] text-[16px] text-black">
                  Subtotal
                </p>
                <p className="leading-[24px] text-[16px] text-[#B88E2F]">
                  {/* {cart.map((item) => {
                    {
                      return (
                        cart[item].price + Sub
                      );
                    }
                  })} */}
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
        </>
      )}
    </div>
  );
};
export default Header;

// list: []

// total: 100

// limjt: 4

// pages: 100 / 4 = 25

// page: 0

// const start = limit * page
// const end = limit * page + limit
// const data = list.slice(start, end)

// next: page + 1

// prev: page - 1

// select number => page = number - 1
// // 0 => slice(limit* page, limit * page + limit)
// // 4 * 0 = 0, 4 * 0 + 4 = 4
// // 1 => slice(4, 8)
// // 4 * 1 = 4, 4 * 1 + 4 = 8
// // 2 => slice (8, 12)
