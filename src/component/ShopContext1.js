import React, {
  useContext,
  useState,
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
  const [show1, setShow1] = useState([]);

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
export {
  ShopProvider1,
  useShopContext1,
  formatter,
  validate,
  useShopContext2,
  ShopProvider2,
};
