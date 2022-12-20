import { createContext, useState, useEffect } from "react";
import { SHOP_DATA } from "../shop-data";
import {
  addCollectionDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils";
export const CategoriesContext = createContext({
  categories: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  useEffect(
    /* async */ () => {
      // BURADA YUKARIDAKİ GİBİ USEEFFECT İÇİNDE ASYNC FUNCTİON KULLANAMAYIZ. bUNU YAPMAK İÇİN AŞAĞIDA OLDUĞU GİBİ YENİ BİR ASYNC FUNCTİON OLUŞTURUYORUZ:

      const getCategoriesMap = async () => {
        const categoryMap = await getCategoriesAndDocuments();
        console.log(categoryMap);
        setCategories(categoryMap)
      };
      getCategoriesMap();
      
    },
    []
    );

  // AŞAĞIDAKİ USEEFFECTİ SHOP_DATA'DAKİ VERİLERİ ÇEKSİN DİYE KULLANDIK.
  // useEffect(() => {
  // addCollectionDocuments("categories", SHOP_DATA )
  // }, [])

  // console.log(SHOP_DATA);
  const value = { categories, setCategories };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
