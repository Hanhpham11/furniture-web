import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
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
          <Link to={'/shop'}>
            <p>Contact</p>
          </Link>
        </div>

        <div className="flex flex-row gap-[45px] items-center h-[100px] ">
          <img
            alt=""
            src="image/mdi_account-alert-outline.png"
            className="w-[28px] h-[28px] "
          ></img>
          <img
            alt=""
            src="image/akar-icons_search.png"
            className="w-[28px] h-[28px] "
          ></img>
          <img
            alt=""
            src="image/akar-icons_heart.png"
            className="w-[28px] h-[28px] "
          ></img>
          <img
            alt=""
            src="image/ant-design_shopping-cart-outlined.png"
            className="w-[28px] h-[28px] "
          ></img>
        </div>
      </div>
    </div>
  );
};
export default Header;
