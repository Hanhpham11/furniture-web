import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useShopContext2 } from './ShopContext1';
const Login = () => {
  const { show1, setShow1 } = useShopContext2();
  const [email, setEmail] = useState('');
  const [passwor, setPasswor] = useState('');
  const [username, setUsername] = useState([]);
  const navigate = useNavigate();

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
      console.log(response);
      setUsername(response.data);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const checkEmail = () => {
    if (
      username[0].email === email &&
      username[0].password === passwor
    ) {
      navigate('/Admin');
    }
    for (let x = 0; x < username.length; x++) {
      if (
        username[x].email === email &&
        username[x].password === passwor
      ) {
        setShow1(false);
      }
    }
  };
  console.log('check', username);
  return (
    <div>
      {show1 && (
        <div className=" z-10 fixed top-[200px] left-[550px] border border-solid border-black rounded-[20px] flex flex-col gap-[10px] w-[300px] bg-white h-[300px] items-center pt-[30px]">
          <p className="text-[25px]">SIGN IN</p>
          <input
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="mt-[10px] pl-[15px] h-[50px] w-[200px] border border-solid border-[1px] border-white bg-slate-100 rounded-[10px]"
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
          <button
            onClick={checkEmail}
            className="mt-[10px] bg-white border border-solid border-[1px] border-black w-[100px] h-[30px]"
          >
            Sign In
          </button>
        </div>
      )}
    </div>
  );
};
export default Login;
