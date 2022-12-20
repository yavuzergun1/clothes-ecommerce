import { Fragment } from "react";
import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";

import "./shop.styles.scss";

const Shop = () => {
  const { categories } = useContext(CategoriesContext);
  return (
    <Fragment>
      {/* Object değerlerini diziye çevirdik. sonra bunları map ile aldık. BÖYLECE TİTLE'LARI BİRER DİZİ ŞEKLİNDE ELDE ETTİK */}
      {console.log(Object.keys(categories))}
      {Object.keys(categories).map((title) => (
        <Fragment key={title}>
          {console.log("TITLES", title)}
          <h2>{title} </h2>
          <div className="products-container">
            {
              // ALDIĞIMIZ HER BİR TİTLE'ın ALT KATEGORİSİNİ YAZDIRDIK
              categories[title].map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            }
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
