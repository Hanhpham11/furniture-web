import React, {
  useContext,
  useState,
} from 'react';
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

////////
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
  const shopContext1 = useContext(ShopContext1);
  return shopContext1;
};
export {
  ShopProvider1,
  useShopContext1,
  useShopContext2,
  ShopProvider2,
  formatter,
};
