import React from 'react';
import { ReactDOM } from 'react';
import axios from 'axios';
import { useState } from 'react';
import {
  Navigate,
  useNavigate,
} from 'react-router-dom';

import Login from './Login';
const Signup = (show1) => {
  const [email, setEmail] = useState('');
  const [passwor, setPasswor] = useState('');
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

    return response;
  };
  const addSignup = async () => {
    const response = await axios.post(
      'https://64fe5ad1f8b9eeca9e28ac79.mockapi.io/information/hi/User',
      {
        email: email,
        password: passwor,
      },
    );

    if (response.status === 201) {
      alert('Request sent successfully');
    }
    console.log(response);
  };
  return (
    <div className=" z-10 fixed top-[200px] left-[550px] border border-solid border-black rounded-[20px] flex flex-col gap-[10px] w-[300px] bg-white h-[300px] items-center pt-[20px]">
      <p className="text-[25px]">SIGN UP</p>
      <input
        placeholder="Enter your email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className=" pl-[15px] h-[50px] w-[200px] border border-solid border-[1px] border-white bg-slate-100 rounded-[10px]"
      ></input>
      <input
        placeholder="Enter password"
        type="password"
        name="password"
        value={passwor}
        onChange={(e) =>
          setPasswor(e.target.value)
        }
        className="pl-[15px] h-[50px] w-[200px] border border-solid border-[1px] border-white bg-slate-100 rounded-[10px]"
      ></input>
      <input
        placeholder="Enter confirm password"
        type="password"
        name="password"
        value={passwor}
        onChange={(e) =>
          setPasswor(e.target.value)
        }
        className="pl-[15px] h-[50px] w-[200px] border border-solid border-[1px] border-white bg-slate-100 rounded-[10px]"
      ></input>
      <button
        onClick={addSignup}
        className="mt-[10px] bg-white border border-solid border-[1px] border-black w-[100px] h-[30px]"
      >
        Sign up
      </button>
    </div>
  );
};
export default Signup;
