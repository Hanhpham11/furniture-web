import React, {
  useContext,
  useState,
  useEffect,
} from 'react';
import { useFormik } from 'formik';
const ShopContext1 = React.createContext();

const ShopProvider1 = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <ShopContext1.Provider
      value={{ cart, setCart }}
    >
      {children}
    </ShopContext1.Provider>
  );
};
const useShopContext1 = () => {
  const shopContext = useContext(ShopContext1);
  return shopContext;
};
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
      values.email,
    )
  ) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const ShopContext2 = React.createContext();

const ShopProvider2 = ({ children }) => {
  const [show1, setShow1] = useState(false);

  return (
    <ShopContext2.Provider
      value={{ show1, setShow1 }}
    >
      {children}
    </ShopContext2.Provider>
  );
};
const useShopContext2 = () => {
  const shopContext2 = useContext(ShopContext2);
  return shopContext2;
};
///

const ShopContext3 = React.createContext();
const ShopProvider3 = ({ children }) => {
  const [show2, setShow2] = useState(false);

  return (
    <ShopContext3.Provider
      value={{ show2, setShow2 }}
    >
      {children}
    </ShopContext3.Provider>
  );
};
const useShopContext3 = () => {
  const shopContext3 = useContext(ShopContext3);
  return shopContext3;
};
///
const ShopContext4 = React.createContext();
const ShopProvider4 = ({ children }) => {
  const [show3, setShow3] = useState(false);

  return (
    <ShopContext4.Provider
      value={{ show3, setShow3 }}
    >
      {children}
    </ShopContext4.Provider>
  );
};
const useShopContext4 = () => {
  const shopContext4 = useContext(ShopContext4);
  return shopContext4;
};
//
const ShopContext5 = React.createContext();
const ShopProvider5 = ({ children }) => {
  const [show4, setShow4] = useState(true);

  return (
    <ShopContext5.Provider
      value={{ show4, setShow4 }}
    >
      {children}
    </ShopContext5.Provider>
  );
};
const useShopContext5 = () => {
  const shopContext5 = useContext(ShopContext5);
  return shopContext5;
};
////
const ShopContext6 = React.createContext();
const ShopProvider6 = ({ children }) => {
  const [list2, setList2] = useState([]);

  return (
    <ShopContext6.Provider
      value={{ list2, setList2 }}
    >
      {children}
    </ShopContext6.Provider>
  );
};
const useShopContext6 = () => {
  const shopContext6 = useContext(ShopContext6);
  return shopContext6;
};
///
const ShopContext7 = React.createContext();
const ShopProvider7 = ({ children }) => {
  const [purchase, setPurchase] = useState([]);

  return (
    <ShopContext7.Provider
      value={{ purchase, setPurchase }}
    >
      {children}
    </ShopContext7.Provider>
  );
};
const useShopContext7 = () => {
  const shopContext7 = useContext(ShopContext7);
  return shopContext7;
};
///
const ShopContext8 = React.createContext();
const ShopProvider8 = ({ children }) => {
  const [details, setDetails] = useState([]);

  return (
    <ShopContext8.Provider
      value={{ details, setDetails }}
    >
      {children}
    </ShopContext8.Provider>
  );
};
const useShopContext8 = () => {
  const shopContext8 = useContext(ShopContext8);
  return shopContext8;
};
///
const ShopContext9 = React.createContext();
const ShopProvider9 = ({ children }) => {
  const [show5, setShow5] = useState(false);

  return (
    <ShopContext9.Provider
      value={{ show5, setShow5 }}
    >
      {children}
    </ShopContext9.Provider>
  );
};
const useShopContext9 = () => {
  const shopContext9 = useContext(ShopContext9);
  return shopContext9;
};
///
export {
  ShopProvider1,
  useShopContext1,
  formatter,
  validate,
  useShopContext2,
  ShopProvider2,
  useShopContext3,
  ShopProvider3,
  useShopContext4,
  ShopProvider4,
  ShopProvider5,
  useShopContext5,
  useShopContext6,
  ShopProvider6,
  ShopProvider7,
  useShopContext7,
  useShopContext8,
  ShopProvider8,
  useShopContext9,
  ShopProvider9,
};
