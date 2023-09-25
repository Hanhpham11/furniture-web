import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  useShopContext2,
  useShopContext4,
  useShopContext5,
  useShopContext6,
} from './ShopContext1';
import { useContext } from 'react';
const Login = () => {
  const { show1, setShow1 } = useShopContext2();
  const [passwor, setPasswor] = useState('');
  // const [inputFields, setInputFields] = useState({
  //   email1: '',
  //   passwor: '',
  // });
  const [username, setUsername] = useState([]);
  const navigate = useNavigate();
  const { show3, setShow3 } = useShopContext4();
  const { show4, setShow4 } = useShopContext5();
  const [email1, setEmail1] = useState();
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
      setUsername(response.data);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = () => {
    for (let x = 0; x < username.length; x++) {
      if (
        username[0].useEmail == email1 &&
        username[0].password1 == passwor
      ) {
        navigate('/Admin');
      } else if (
        username[x].useEmail == email1 &&
        username[x].password1 == passwor
      ) {
        window.localStorage.setItem(
          'userEmail',
          email1,
        );

        setShow1(false);
        setShow4(false);
        setShow3(true);
        // } else {
        //   window.alert(
        //     'The User Account is not define',
        //   );

        // let text =
        //   'The User Account is not define';

        // if (window.confirm(text) === true) {
        //   window.confirm(false);
        // }
      }
    }
  };
  // console.log('check', username);
  return (
    <div>
      {show1 && (
        <form className="register-form z-10 fixed top-[200px] left-[550px] border border-solid border-black rounded-[20px] flex flex-col gap-[10px] w-[300px] bg-white h-[300px] items-center pt-[30px]">
          <p className="text-[25px]">SIGN IN</p>
          <input
            placeholder="Enter your email"
            type="email"
            value={email1}
            onChange={(e) =>
              setEmail1(e.target.value)
            }
            className="mt-[10px] pl-[15px] h-[50px] w-[200px] border border-solid border-[1px] border-white bg-slate-100 rounded-[10px]"
          ></input>
          <input
            placeholder="Enter password"
            type="password"
            value={passwor}
            onChange={(e) =>
              setPasswor(e.target.value)
            }
            className="pl-[15px] h-[50px] w-[200px] border border-solid border-[1px] border-white bg-slate-100 rounded-[10px]"
          ></input>
          <button
            onClick={handleSubmit}
            className="mt-[10px] bg-white border border-solid border-[1px] border-black w-[100px] h-[30px]"
          >
            Sign In
          </button>
        </form>
      )}
    </div>
  );
};
export default Login;
