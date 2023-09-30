import React, { useState } from 'react';
import { groupBy, keys } from 'ramda';
import {
  formatter,
  useShopContext1,
  useShopContext2,
} from '../ShopContext1';
import './Chechout2.css';
import dayjs from 'dayjs';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { number } from 'prop-types';
const Checkout2 = () => {
  const { show1, setShow1 } = useShopContext2();
  const { cart = [], setCart } =
    useShopContext1();
  const result = groupBy(({ id }) => id)(cart);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
  const [infor, setInfor] = useState('');
  const [infor1, setInfor1] = useState('');
  const [infor2, setInfor2] = useState('');
  const [infor3, setInfor3] = useState('');
  const [infor4, setInfor4] = useState('');
  const [infor5, setInfor5] = useState('');
  const [infor6, setInfor6] = useState('');
  const [infor7, setInfor7] = useState('');
  const [infor8, setInfor8] = useState('');
  const [infor9, setInfor9] = useState('');
  const [allInfor, setAllinfor] = useState([]);
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

  const [select, setSelect] = useState('');
  // const [payRadio, setPayRadio] = useState(true);
  const listRadio = [
    {
      card: 'Direct Bank Transfer',
      cash: 'Cash On Delivery',
    },
  ];
  const listRadio1 = (valu) => {
    setSelect(valu);
  };

  const onCheckout = async () => {
    const newNumber = Number(infor7);
    const email3 =
      document.getElementById('email');
    const filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (
      curentEmail !== null &&
      cart.length !== 0 &&
      infor !== '' &&
      infor1 !== '' &&
      infor2 !== '' &&
      infor3 !== '' &&
      infor4 !== '' &&
      infor5 !== '' &&
      infor6 !== '' &&
      infor7 !== '' &&
      infor8 !== '' &&
      typeof newNumber == 'number' &&
      filter.test(email3.value)
    ) {
      const response = await axios.post(
        'https://64d61e33754d3e0f1361a0ec.mockapi.io/checkout?fbclid=IwAR3LLB3EMaRykaMXkw9Fw_acuFrdHYifV6QZwsu-I90qBob8beFQne_0-K8',
        {
          Date: date,
          email: curentEmail,
          price: formatter.format(Tota),
          payment: select,
          listproduct: cart,
          userinformation: [
            {
              clientname: infor1 + ' ' + infor,
              information:
                infor2 +
                ' ' +
                infor3 +
                ' ' +
                infor4 +
                ' ' +
                infor5 +
                ' ' +
                infor6,
              phone: infor7,
              emailAdd: infor8,
              moreinfor: infor9,
            },
          ],
        },
      );

      if (response.status === 201) {
        alert('Request sent successfully');
      }
    } else if (cart.length == 0) {
      alert('You need to order to checkout');
    } else if (curentEmail == null) {
      setShow1(true);
    } else {
      alert('You must enter the correct form');
      console.log(typeof infor7);
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
        <form
          onSubmit={handleSubmit((data) =>
            console.log(data),
          )}
        >
          <div className="flex flex-row gap-[31px] mt-[22px]">
            <div className="flex flex-col gap-[5px]">
              <input
                {...register('firstname', {
                  required: true,
                })}
                name="firstname"
                type="text"
                value={infor}
                onChange={(e) =>
                  setInfor(e.target.value)
                }
                className="pl-[29px] w-[211px] h-[75px] rounded-[10px] border-solid border-[1px] border-[#9F9F9F] rounded-[10px]"
              ></input>
              {errors.firstname && (
                <p className="text-red-500 mt-[5px]">
                  Required
                </p>
              )}
            </div>
            <div className="flex flex-col gap-[5px]">
              <input
                {...register('lastname', {
                  required: true,
                })}
                name="lastname"
                type="text"
                value={infor1}
                onChange={(e) =>
                  setInfor1(e.target.value)
                }
                className="pl-[29px] w-[211px] h-[75px] rounded-[10px] border-solid border-[1px] border-[#9F9F9F] rounded-[10px]"
              ></input>
              {errors.lastname && (
                <p className="text-red-500 mt-[5px]">
                  Required
                </p>
              )}
            </div>
          </div>
          <p className="leading-[24px] text-[16px] text-black mt-[36px]">
            Company Name/ Adress Home
          </p>
          <input
            {...register('adress', {
              required: true,
            })}
            name="adress"
            value={infor2}
            onChange={(e) =>
              setInfor2(e.target.value)
            }
            className="pl-[29px] w-[453px] h-[75px] rounded-[10px] border-solid border-[1px] border-[#9F9F9F] rounded-[10px] mt-[22px]"
          ></input>
          {errors.adress && (
            <p className="text-red-500 mt-[5px]">
              Required.
            </p>
          )}
          <p className="leading-[24px] text-[16px] text-black mt-[36px]">
            Country / Region
          </p>
          <input
            {...register('location', {
              required: true,
            })}
            name="location"
            value={infor3}
            onChange={(e) =>
              setInfor3(e.target.value)
            }
            className="pl-[29px] w-[453px] h-[75px] rounded-[10px] border-solid border-[1px] border-[#9F9F9F] rounded-[10px] mt-[22px]"
          ></input>
          {errors.location && (
            <p className="text-red-500 mt-[5px]">
              Required
            </p>
          )}
          <p className="leading-[24px] text-[16px] text-black mt-[36px]">
            Street address
          </p>
          <input
            {...register('street', {
              required: true,
            })}
            name="street"
            value={infor4}
            onChange={(e) =>
              setInfor4(e.target.value)
            }
            className="pl-[29px] w-[453px] h-[75px] rounded-[10px] border-solid border-[1px] border-[#9F9F9F] rounded-[10px] mt-[22px]"
          ></input>
          {errors.street && (
            <p className="text-red-500 mt-[5px]">
              Required
            </p>
          )}
          <p className="leading-[24px] text-[16px] text-black mt-[36px]">
            Town / City
          </p>
          <input
            {...register('town', {
              required: true,
            })}
            name="town"
            value={infor5}
            onChange={(e) =>
              setInfor5(e.target.value)
            }
            className="pl-[29px] w-[453px] h-[75px] rounded-[10px] border-solid border-[1px] border-[#9F9F9F] rounded-[10px] mt-[22px]"
          ></input>
          {errors.town && (
            <p className="text-red-500 mt-[5px]">
              Required
            </p>
          )}
          <p className="leading-[24px] text-[16px] text-black mt-[36px]">
            Province
          </p>
          <input
            {...register('province', {
              required: true,
            })}
            name="province"
            value={infor6}
            onChange={(e) =>
              setInfor6(e.target.value)
            }
            className="pl-[29px] w-[453px] h-[75px] rounded-[10px] border-solid border-[1px] border-[#9F9F9F] rounded-[10px] mt-[22px]"
          ></input>
          {errors.province && (
            <p className="text-red-500 mt-[5px]">
              Required
            </p>
          )}
          <p className="leading-[24px] text-[16px] text-black mt-[36px]">
            Phone
          </p>
          <input
            {...register('number', {
              required: true,
            })}
            name="number"
            value={infor7}
            onChange={(e) =>
              setInfor7(e.target.value)
            }
            className="pl-[29px] w-[453px] h-[75px] rounded-[10px] border-solid border-[1px] border-[#9F9F9F] rounded-[10px] mt-[22px]"
          ></input>
          {errors.number && (
            <p className="text-red-500 mt-[5px]">
              Required
            </p>
          )}
          <p className="leading-[24px] text-[16px] text-black mt-[36px]">
            Email address
          </p>
          <input
            {...register('email', {
              required: true,
            })}
            name="email"
            id="email"
            value={infor8}
            onChange={(e) =>
              setInfor8(e.target.value)
            }
            className="pl-[29px] w-[453px] h-[75px] rounded-[10px] border-solid border-[1px] border-[#9F9F9F] rounded-[10px] mt-[22px] "
          ></input>
          {errors.email && (
            <p className="text-red-500 mt-[5px]">
              Required
            </p>
          )}
          <input
            placeholder="Additional information"
            value={infor9}
            onChange={(e) =>
              setInfor9(e.target.value)
            }
            className="w-[453px] h-[75px] rounded-[10px] border-solid border-[1px] border-[#9F9F9F] rounded-[10px] mt-[58px] pl-[29px]"
          ></input>
          <button
            type="submit"
            onClick={onCheckout}
            className=" absolute ml-[111px] mt-[-500px] w-[318px] h-[64px] text-center leading-[30px] text-[20px] text-black rounded-[8px] border border-solid border-black "
          >
            {' '}
            Place order
          </button>
        </form>
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
        {listRadio.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-[20px]"
          >
            <div className="flex flex-row gap-[5px] items-center mt-[22.5px]">
              <input
                checked="checked"
                id="card"
                type="radio"
                name="pay"
                value="Direct Bank Transfer"
                // checked={payRadio}
                // onChange={() => {
                //   setPayRadio(!payRadio);
                // }}
                onClick={() =>
                  listRadio1(item.card)
                }
                className="leading-[24px]  text-[16px] text-black font-[400]"
              />
              <p>{item.card}</p>
            </div>

            <p className="leading-[24px] text-[16px] text-[#9F9F9F] mt-[11px] ">
              Make your payment directly into our
              bank account. Please use your Order
              ID as the payment reference. Your
              order will not be shipped until the
              funds have cleared in our account.
            </p>
            <div className="mt-[11px] flex flex-row gap-[5px] items-center">
              <input
                id="cash"
                type="radio"
                name="pay"
                value="Cash On Delivery"
                onClick={() =>
                  listRadio1(item.cash)
                }
                className="leading-[24px]  text-[16px] text-black font-[400]"
              />
              <p>{item.cash}</p>
            </div>
          </div>
        ))}

        <p className="leading-[24px] text-[16px] text-black mt-[22px]">
          Your personal data will be used to
          support your experience throughout this
          website, to manage access to your
          account, and for other purposes
          described in our privacy policy.
        </p>
      </div>
    </div>
  );
};
export default Checkout2;
