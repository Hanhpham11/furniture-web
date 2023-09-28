import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { groupBy, keys } from 'ramda';
import { formatter } from '../component/ShopContext1';
import './Details.css';
import { useShopContext1 } from '../component/ShopContext1';
function DetailsProduct() {
  const { cart, setCart } = useShopContext1();
  const [detail, setDetail] = useState({});
  const Add1 = (hi) => {
    const Arr1 = new Array(plus).fill(hi);
    const Arr2 = cart.concat(Arr1);
    setCart(Arr2);
  };

  let { id } = useParams();

  const getDetail = async () => {
    const response = await axios.get(
      'https://64d61e33754d3e0f1361a0ec.mockapi.io//products/' +
        id,
    );
    if (response.status === 200) {
      setDetail(response.data);
    }
    console.log(response);
  };
  useEffect(() => {
    getDetail();
  }, []);

  const [plus, setPlus] = useState(1);

  const OnPlus = () => {
    if (plus == 10) {
      setPlus(plus);
    } else {
      setPlus(plus + 1);
    }
  };
  const OnDivison = () => {
    if (plus == 1) {
      setPlus(plus);
    } else {
      setPlus(plus - 1);
    }
  };

  return (
    <div className="font-sans flex flex-col gap-[10px]">
      <div className="flex w-full pl-[99px]gap-[14px] px-[38px] bg-[#F9F1E7] h-[100px] items-center mt-[100px]">
        <p className="leading-[24px] text-[16px] text-gray-400">
          Home
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z"
            fill="black"
          />
        </svg>
        <p className="leading-[24px] text-[16px] text-gray-400 ml-[10px]">
          Shop
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z"
            fill="black"
          />
        </svg>
        <p className="h=[37px] leading-[24px] text-[16px] text-gray-400 ml-[10px]">
          |
        </p>
        <div className="leading-[24px] text-[16px] text-gray-400 ml-[10px] ">
          {detail && (
            <p className="text-[20px] text-black">
              {detail.productname}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-[82px] py-5 ml-[50px] mt-[50px]">
        <div className="flex mx-[20px]  flex-2 ">
          {detail && (
            <img
              alt=""
              src={detail.url}
              style={{
                width: 481,
                height: 500,
              }}
            />
          )}
        </div>
        <div className="flex flex-col flex-1 gap-[20px] ">
          <h3 className="text-[42px]  ">
            {detail.productname}
          </h3>
          <span className=" text-[24px] text-[#9F9F9F]">
            {formatter.format(detail.price)}
          </span>
          <p className="text-[13px]  max-w-xs">
            {detail.description}
          </p>
          <div className="flex flex-row gap-[6px]">
            <img
              src="../images/star.png"
              className="w-[20px] h-[20px]"
              alt=""
            />
            <img
              src="../images/star.png"
              className="w-[20px] h-[20px]"
              alt=""
            />
            <img
              src="../images/star.png"
              className="w-[20px] h-[20px]"
              alt=""
            />
            <img
              src="../images/star.png"
              className="w-[20px] h-[20px]"
              alt=""
            />
            <img
              src="../images/star.png"
              className="w-[20px] h-[20px]"
              alt=""
            />
            <div className="ml-[12px] w-[1px] h-[30px] bg-black"></div>
            <p className="ml-[16px] leading-[20px] text-[13px] text-[#9F9F9F]"></p>
          </div>
          <p className=" leading-[20px] text-[13px] text-black ">
            Setting the bar as one of the loudest
            speakers in its class, the Kilburn is
            a compact, stout-hearted hero with a
            well-balanced audio which boasts a
            clear midrange and extended highs for
            a sound.
          </p>

          <div className="mt-[12px] flex flex-row gap-[24px]">
            <button className="leading-[20px] text-[13px]  w-[30px] h-[30px] bg-[#F9F1E7] text-center rounded-[5px]">
              L
            </button>
            <button className="leading-[20px] text-[13px]  w-[30px] h-[30px] bg-[#F9F1E7] text-center  rounded-[5px]">
              XL
            </button>
            <button className="leading-[20px] text-[13px]  w-[30px] h-[30px] bg-[#F9F1E7] text-center  rounded-[5px]">
              XS
            </button>
          </div>
          <div className="mt-[18px] flex flex-row gap-[16px]">
            <button className="leading-[20px] text-[13px]  w-[30px] h-[30px] bg-[#816DFA] text-center  rounded-full"></button>
            <button className="leading-[20px] text-[13px]  w-[30px] h-[30px] bg-black text-center  rounded-full"></button>
            <button className="leading-[20px] text-[13px]  w-[30px] h-[30px] bg-[#B88E2F] text-center  rounded-full"></button>
          </div>
          <div className="mt-[32px] flex flex-row gap-[18px]">
            <div className="flex flex-row gap-[30px] pl-[15px]  w-[123px] h-[64px] border border-solid rounded-[15px] items-center">
              <p
                className="leading-[24px] text-[16px] "
                onClick={OnDivison}
              >
                -
              </p>

              <p className="leading-[24px] text-[16px]">
                {plus}
              </p>
              <p
                className="leading-[24px] text-[16px]"
                onClick={OnPlus}
              >
                +
              </p>
            </div>
            {detail && (
              <button
                onClick={() => Add1(detail)}
                className="   w-[215px] h-[64px] border bg-white border-solid border-black rounded-[15px] text-center  rounded-[15px]"
              >
                Add To Cart
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-[744px] pt-[48px] px-[50px] flex flex-col  border-t-2 ">
        <div className="flex flex-row gap-[52px] justify-center  ">
          <h1 className="leading-[36px] text-[24px] text-black">
            Description
          </h1>
          <p className="leading-[36px] text-[24px] text-[#9F9F9F]">
            Additional Information
          </p>
          <p className="leading-[36px] text-[24px] text-[#9F9F9F]">
            Reviews [5]
          </p>
        </div>
        <div className="w-[1026px] h-[48px] mt-[37px] ml-[108px]">
          {' '}
          <p className="leading-[24px] text-[16px] text-[#9F9F9F]  ">
            Embodying the raw, wayward spirit of
            rock ‘n’ roll, the Kilburn portable
            active stereo speaker takes the
            unmistakable look and sound of
            Marshall, unplugs the chords, and
            takes the show on the road.
          </p>
        </div>
        <div className="w-[1026px] h-[96px] mt-[30px] ml-[108px]">
          <p className="leading-[24px] text-[16px] text-[#9F9F9F]  ">
            Weighing in under 7 pounds, the
            Kilburn is a lightweight piece of
            vintage styled engineering. Setting
            the bar as one of the loudest speakers
            in its class, the Kilburn is a
            compact, stout-hearted hero with a
            well-balanced audio which boasts a
            clear midrange and extended highs for
            a sound that is both articulate and
            pronounced. The analogue knobs allow
            you to fine tune the controls to your
            personal preferences while the
            guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>

        <div className="flex flex-row gap-[20px] mt-[36px] justify-around ">
          {detail && (
            <img
              alt=""
              src={detail.url}
              style={{
                width: 535,
                height: 300,
              }}
              className="rounded-[30px]"
            />
          )}

          {detail && (
            <img
              alt=""
              src={detail.url}
              style={{
                width: 535,
                height: 300,
              }}
              className="rounded-[30px]"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailsProduct;
