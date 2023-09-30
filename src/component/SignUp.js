import React from 'react';
import { ReactDOM } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  Navigate,
  useNavigate,
} from 'react-router-dom';
import {
  useShopContext2,
  useShopContext9,
} from './ShopContext1';
import Login from './Login';
import { useForm } from 'react-hook-form';
import { ifElse } from 'ramda';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { showSignup, setShowSignup } =
    useShopContext9();
  const { showLogin, setShowLogin } =
    useShopContext2();
  const [email0, setEmail0] = useState('');
  const [passwor, setPasswor] = useState('');
  const [passwor1, setPasswor1] = useState('');
  const [inputFields, setInputFields] = useState({
    email: '',
    passwor: '',
  });
  const Navigate = useNavigate();
  const handleChange = (e) => {
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value,
    });
  };
  const [email2, setEmail2] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      'https://64fe5ad1f8b9eeca9e28ac79.mockapi.io/information/hi/User',
      {
        params: {
          filter: {
            order: ['id DESC'],
          },
        },
      },
    );
    if (response.status === 200) {
      // console.log(response);
      setEmail2(response.data);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const account =
    window.localStorage.getItem('userEmail') ||
    '';
  const addSignup = async () => {
    const email3 =
      document.getElementById('email');
    const filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // if (!filter.test(email3.value)) {
    //   alert(
    //     'Hay nhap dia chi email hop le.\nExample@gmail.com',
    //   );
    //   email3.focus;
    //   return false;
    // } else {
    //   alert('OK roi day, Email nay hop le.');
    // }
    const passwo =
      document.getElementById('passwor0');
    const filter1 = /^([a-zA-Z0-9]{6,})+$/;
    if (
      email0 !== '' &&
      passwor !== '' &&
      passwor == passwor1 &&
      filter.test(email3.value) &&
      filter1.test(passwo.value)
    ) {
      const response = await axios.post(
        'https://64fe5ad1f8b9eeca9e28ac79.mockapi.io/information/hi/User',
        {
          useEmail: email0,
          password1: passwor,
        },
      );
      if (response.status === 201) {
        alert('Request sent successfully');
        setShowSignup(false);
        setShowLogin(true);
      }
    } else {
      alert(
        'The value input is required, email must valid and the lenght of password least 6 characters',
      );
    }
  };

  // const registerOptions = {
  //   name: { required: 'Name is required' },
  //   email: { required: 'Email is required' },
  //   password: {
  //     required: 'Password is required',
  //     minLength: {
  //       value: 8,
  //       message:
  //         'Password must have at least 8 characters',
  //     },
  //   },
  // };

  return (
    <div className=" z-10 fixed top-[200px] left-[550px] border border-solid border-black rounded-[20px] flex flex-col gap-[10px] w-[300px] bg-white h-auto items-center py-[10px]">
      <p className="text-[25px]">SIGN UP</p>
      <form
        onSubmit={handleSubmit((data) =>
          console.log(data),
        )}
        className=" pl-[15px] flex flex-col gap-[10px]"
      >
        <input
          {...register('email', {
            required: true,
          })}
          id="email"
          placeholder="Enter your email"
          name="email"
          value={email0}
          onChange={(e) =>
            setEmail0(e.target.value)
          }
          className="email0 pl-[15px] h-[50px] w-[200px] border border-solid border-[1px] border-white bg-slate-100 rounded-[10px]"
        ></input>

        <input
          {...register('password', {
            required: true,
          })}
          placeholder="Enter password"
          type="password"
          id="passwor0"
          name="password"
          value={passwor}
          onChange={(e) =>
            setPasswor(e.target.value)
          }
          className="pl-[15px] h-[50px] w-[200px] border border-solid border-[1px] border-white bg-slate-100 rounded-[10px]"
        ></input>
        {errors.password && (
          <p>Password is required.</p>
        )}
        <input
          placeholder="Enter confirm password"
          type="password"
          value={passwor1}
          onChange={(e) =>
            setPasswor1(e.target.value)
          }
          className="pl-[15px] h-[50px] w-[200px] border border-solid border-[1px] border-white bg-slate-100 rounded-[10px]"
        ></input>
        <button
          onClick={addSignup}
          className="mt-[10px] ml-[30px] bg-white border border-solid border-[1px] border-black w-[100px] h-[30px]"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};
export default Signup;
