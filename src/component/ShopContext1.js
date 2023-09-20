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

export {
  ShopProvider1,
  useShopContext1,
  formatter,
};
