import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
const Header = () => {
  return (
    <div className="w-full h-[100px] bg-white pl-[54px] ">
      <div className="flex flex-row  gap-[158px]  ">
        <div className="logo flex flex-row gap-[5px] items-center h-[100px]">
          <img
            src="./logo12.png"
            className="w-[50px] h-[32px]"
          ></img>
          <a href="#">Furino</a>
        </div>
        <div className="flex flex-row gap-[75px] ml-[108px] items-center h-[100px]">
          <Link to={'/shop'}>
            <p className="leading-[24px] text-[16px] text-black font-sans">
              Home
            </p>
          </Link>
          <Link to={'/shop'}>
            <p className="leading-[24px] text-[16px] text-black font-sans">
              Shop
            </p>
          </Link>
          <Link to={'/shop'}>
            <p className="leading-[24px] text-[16px] text-black font-sans">
              About
            </p>
          </Link>
          <Link to={'/shop'}>
            <p className="leading-[24px] text-[16px] text-black font-sans">
              Contact
            </p>
          </Link>
        </div>

        {/* <div className="flex flex-row gap-[45px] items-center h-[100px] ">
          <img
            src="image/mdi_account-alert-outline.png"
            className="w-[28px] h-[28px] "
          ></img>
          <img
            src="image/akar-icons_search.png"
            className="w-[28px] h-[28px] "
          ></img>
          <img
            src="image/akar-icons_heart.png"
            className="w-[28px] h-[28px] "
          ></img>
          <img
            src="image/ant-design_shopping-cart-outlined.png"
            className="w-[28px] h-[28px] "
          ></img>
        </div> */}
      </div>
    </div>
  );
};
export default Header;
