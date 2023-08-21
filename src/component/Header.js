import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useShopContext1 } from './ShopContext1';
import { useState } from 'react';
const Header = () => {
  const [show, setShow] = useState(false);
  const { cart } = useShopContext1();
  return (
    <div className="w-full h-[100px] bg-white pl-[54px] ">
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
          <Link to={'/Contact Us'}>
            <p>Contact</p>
          </Link>
        </div>

        <div className="flex flex-row gap-[45px] items-center h-[100px] ">
          <img
            alt=""
            src="./images/mdi_account-alert-outline.png"
            className="w-[28px] h-[28px] "
          ></img>
          <img
            alt=""
            src="./images/akar-icons_search.png"
            className="w-[28px] h-[28px] "
          ></img>
          <img
            alt=""
            src="./images/akar-icons_heart.png"
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
              <p className=" text-10px text-red-500 mt-[5px]">
                {cart && cart.length}
              </p>
            </div>

            <div
              style={
                show
                  ? { display: 'block' }
                  : { display: 'none' }
              }
              id="Number1"
              className="dos w-[417px] pb-[28px] flex flex-col pl-[30px] pt-[28px]"
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
                {cart?.map((item, index) => (
                  <div className="grid grid-cols-1">
                    <div className="flex flex-row gap-[32px]">
                      <img
                        src={item.url}
                        className="w-[111px] h-[90px] rounded"
                      />
                      <div className="flex flex-col gap-[11px] mt-[17px]">
                        <p className="leading-[24px] text-[16px] text-black">
                          {item.name}
                        </p>
                        <div className="flex flex-row gap-[15px]">
                          <p className="leading-[24px] text-[16px] text-black"></p>
                          <p className="leading-[18px] text-[12px] text-black">
                            X
                          </p>
                          <p className="leading-[24px] text-[16px] text-[#B88E2F]">
                            {item.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <img
                  src="/image/Vector.png"
                  className="w-[20px] h-[20px]"
                />
                <div className="flex flex-row gap-[101px] mt-[253px]">
                  <p className="leading-[24px] text-[16px] text-black">
                    Subtotal
                  </p>
                  <p className="leading-[24px] text-[16px] text-[#B88E2F]"></p>
                </div>
              </div>

              <div className="flex flex-row gap-[14px] mt-[26px]">
                <button className="leading-[18px] text-[12px] border tex-black rounded-[50px] w-[87px] h-[30px] text-center border">
                  Cart
                </button>
                <Link to={'/Check out'}>
                  <button className="leading-[18px] text-[12px] border tex-black rounded-[50px] w-[118px] h-[30px] text-center border">
                    Checkout
                  </button>
                </Link>

                <button className="leading-[18px] text-[12px] border tex-black rounded-[50px] w-[135px] h-[30px] text-center border">
                  Comparison
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
