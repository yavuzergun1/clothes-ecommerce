import { createContext, useState, useEffect } from "react";
import {SHOP_DATA}  from "../shop-data";
import { addCollectionDocuments } from "../utils/firebase/firebase.utils";
export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    
  addCollectionDocuments("categories", SHOP_DATA )

  }, [])
  
  console.log(SHOP_DATA);
  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
