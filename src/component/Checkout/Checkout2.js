import React from 'react';
import { groupBy, keys } from 'ramda';
import {
  formatter,
  useShopContext1,
  useShopContext2,
} from '../ShopContext1';
import './Chechout2.css';
import dayjs from 'dayjs';
import axios from 'axios';
const Checkout2 = () => {
  const { show1, setShow1 } = useShopContext2();
  const { cart = [] } = useShopContext1();
  const result = groupBy(({ id }) => id)(cart);

  const carts = keys(result);
  const Tota = cart.reduce(
    (accumulator, current) =>
      Math.floor(
        accumulator + Number(current.price),
      ),
    0,
  );
  const date = dayjs().format(
    'dddd, MMMM D, YYYY',
  );
  const curentEmail =
    window.localStorage.getItem('userEmail');

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

    return response;
  };
  const onCheckout = async () => {
    if (curentEmail !== null) {
      const response = await axios.post(
        'https://64d61e33754d3e0f1361a0ec.mockapi.io/checkout?fbclid=IwAR3LLB3EMaRykaMXkw9Fw_acuFrdHYifV6QZwsu-I90qBob8beFQne_0-K8',
        {
          Date: date,
          email: curentEmail,
          price: formatter.format(Tota),
        },
      );

      if (response.status === 201) {
        alert('Request sent successfully');
      }
    } else {
      setShow1(true);
    }
  };
  return (
    <div className="w-full h-[1829px] bg-white pt-[63px] pl-[100px] pr-[98px] flex flex-row gap-[26px]">
      <div className="flex flex-col w-[608px] h-[1714px] pt-[35px] pl-[74px]">
        <p className="leading-[54px] text-[36px] text-black">
          Billing details
        </p>
        <div className="flex flex-row gap-[155px] mt-[36px]">
          <p className="leading-[24px] text-[16px] text-black">
            First Name
          </p>
          <p className="leading-[24px] text-[16px] text-black">
            Last Name
          </p>
        </div>
        <div className="flex flex-row gap-[31px] mt-[22px]">
          <input
            type="text"
            className="pl-[29px] w-[211px] h-[75px] rounded-[10px] border-solid border-[1px] border-[#9F9F9F] rounded-[10px]"
          ></input>
          <input
            type="text"
            className="pl-[29px] w-[211px] h-[75px] rounded-[10px] border-solid border-[1px] border-[#9F9F9F] rounded-[10px]"
          ></input>
        </div>
        <p className="leading-[24px] text-[16px] text-black mt-[36px]">
          Company Name (Optional)
        </p>
        <input className="pl-[29px] w-[453px] h-[75px] rounded-[10px] border-solid border-[1px] border-[#9F9F9F] rounded-[10px] mt-[22px]"></input>
        <p className="leading-[24px] text-[16px] text-black mt-[36px]">
          Country / Region
        </p>
        <select
          id="country"
          className="pl-[29px] w-[453px] h-[75px] rounded-[10px] border-solid border-[1px] border-[#9F9F9F] rounded-[10px] mt-[22px]"
        >
          <option></option>
        </select>
        <p className="leading-[24px] text-[16px] text-black mt-[36px]">
          Street address
        </p>
        <input className="pl-[29px] w-[453px] h-[75px] rounded-[10px] border-solid border-[1px] border-[#9F9F9F] rounded-[10px] mt-[22px]"></input>
        <p className="leading-[24px] text-[16px] text-black mt-[36px]">
          Town / City
        </p>
        <input className="pl-[29px] w-[453px] h-[75px] rounded-[10px] border-solid border-[1px] border-[#9F9F9F] rounded-[10px] mt-[22px]"></input>
        <p className="leading-[24px] text-[16px] text-black mt-[36px]">
          Province
        </p>
        <input className="pl-[29px] w-[453px] h-[75px] rounded-[10px] border-solid border-[1px] border-[#9F9F9F] rounded-[10px] mt-[22px]"></input>
        <p className="leading-[24px] text-[16px] text-black mt-[36px]">
          Phone
        </p>
        <input className="pl-[29px] w-[453px] h-[75px] rounded-[10px] border-solid border-[1px] border-[#9F9F9F] rounded-[10px] mt-[22px]"></input>
        <p className="leading-[24px] text-[16px] text-black mt-[36px]">
          Email address
        </p>
        <input className="pl-[29px] w-[453px] h-[75px] rounded-[10px] border-solid border-[1px] border-[#9F9F9F] rounded-[10px] mt-[22px] "></input>

        <input
          placeholder="Additional information"
          className="w-[453px] h-[75px] rounded-[10px] border-solid border-[1px] border-[#9F9F9F] rounded-[10px] mt-[58px] pl-[29px]"
        ></input>
      </div>
      <div className="flex flex-col w-[608px] h-[789px] pt-[87px] pl-[38px] pr-[37px]">
        <div className="flex flex-row justify-between">
          <p className="leading-[36px] text-[24px] text-black">
            Product
          </p>
          <p className="leading-[36px] text-[24px] text-black">
            Subtotal
          </p>
        </div>
        {carts?.map((key, index) => (
          <div>
            {result[key] && result[key][0] && (
              <div className="flex flex-row mt-[14px] justify-between  ">
                <div className="flex flex-row">
                  <p className="leading-[24px] text-[16px] text-[#9F9F9F] w-[108px]">
                    {result[key][0].productname}
                  </p>
                  <p className="leading-[24px] text-[16px] text-black ml-[11px]">
                    x
                  </p>
                  <p className="leading-[24px] text-[16px] text-black ml-[10px]">
                    {result[key].length}
                  </p>
                </div>
                <p className="leading-[24px] w-[109px] text-[16px] text-black text-end ">
                  {formatter.format(
                    result[key][0].price,
                  )}
                </p>
              </div>
            )}
          </div>
        ))}
        <div className="flex flex-row mt-[22px] justify-between ">
          <p className="leading-[24px] text-[16px] text-black">
            Subtotal
          </p>
          <p className="leading-[24px] text-[16px] text-black ">
            {formatter.format(Tota)}
          </p>
        </div>
        <div className="flex flex-row mt-[16px] justify-between ">
          <p className="leading-[24px] text-[16px] text-black mt-[6px]">
            Total
          </p>
          <p className="leading-[36px] text-[24px] text-[#B88E2F] ">
            {formatter.format(Tota)}
          </p>
        </div>
        <div className="w-full h-[1px] bg-[#D9D9D9] mt-[39.5px]"></div>
        <div className="flex flex-row gap-[15px] mt-[22.5px] items-center">
          <button className=" hiChange rounded-full w-[14px] h-[14px] border border-solid border-black bg-black"></button>
          <p className="leading-[24px] text-[16px] text-black font-[400]">
            Direct Bank Transfer
          </p>
        </div>
        <p className="leading-[24px] text-[16px] text-[#9F9F9F] mt-[11px] ">
          Make your payment directly into our bank
          account. Please use your Order ID as the
          payment reference. Your order will not
          be shipped until the funds have cleared
          in our account.
        </p>

        <div className="flex flex-row gap-[15px] mt-[11px] items-center">
          <button className="hiChange rounded-full w-[14px] h-[14px] border border-solid border-black bg-white"></button>
          <p className="leading-[24px] text-[16px] text-black font-[400]">
            Cash On Delivery
          </p>
        </div>
        <p className="leading-[24px] text-[16px] text-black mt-[22px]">
          Your personal data will be used to
          support your experience throughout this
          website, to manage access to your
          account, and for other purposes
          described in our privacy policy.
        </p>
        <button
          onClick={onCheckout}
          className="ml-[111px] mt-[39px] w-[318px] h-[64px] text-center leading-[30px] text-[20px] text-black rounded-[8px] border border-solid border-black "
        >
          {' '}
          Place order
        </button>
      </div>
    </div>
  );
};
export default Checkout2;
