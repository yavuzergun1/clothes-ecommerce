import { Fragment } from "react";
import { useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";
import "./shop.styles.scss";

const Shop = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <div className="shop-container">
      {/* Object değerlerini diziye çevirdik. sonra bunları map ile aldık. BÖYLECE TİTLE'LARI BİRER DİZİ ŞEKLİNDE ELDE ETTİK */}
      {console.log(Object.keys(categories))}
      {Object.keys(categories).map((title) => {
        const products= categories[title]
        return (
          <Fragment key={title}>
            <CategoryPreview products={products} title={title} />
            {console.log("TITLES", title)}
          </Fragment>
        );

        // ALDIĞIMIZ HER BİR TİTLE'ın ALT KATEGORİSİNİ YAZDIRDIK
        // categories[title].map((product) => (
        //   <ProductCard/>
        // ))
      })}
    </div>
  );
};

export default Shop;
