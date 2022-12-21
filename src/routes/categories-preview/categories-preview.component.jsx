import { Fragment } from "react";
import { useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categories.context";

const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <Fragment>
      {/* Object değerlerini diziye çevirdik. sonra bunları map ile aldık. BÖYLECE TİTLE'LARI BİRER DİZİ ŞEKLİNDE ELDE ETTİK */}
      {console.log(Object.keys(categories))}
      {Object.keys(categories).map((title) => {
        const products = categories[title];
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
    </Fragment>
  );
};

export default CategoriesPreview;
