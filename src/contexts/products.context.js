import { createContext, useState, useEffect } from "react";
import { addCollectionDocuments } from "../utils/firebase/firebase.utils";
export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  
  console.log(products);
  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
