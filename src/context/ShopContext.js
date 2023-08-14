import React, { useContext,useState } from 'react'
const ShopContext = React.createContext([]); 

const ShopProvider = ({ children }) => {
        const [list, setList] = useState([]);
    
      return (
            <ShopContext.Provider value={{ list, setList }}>
              {children}
            </ShopContext.Provider>
      )
}
const useShopContext = () => {
    const shopContext = useContext(ShopContext);
    return shopContext;
}    

export { ShopProvider, useShopContext };