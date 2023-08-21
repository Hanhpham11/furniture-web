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

export { ShopProvider1, useShopContext1 };
