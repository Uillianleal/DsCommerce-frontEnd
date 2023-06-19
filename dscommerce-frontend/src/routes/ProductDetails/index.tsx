import "./styles.css";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import ButtonInverse from "../../components/ButtonPrimary";
import ButtonPrimary from "../../components/ButtonInverse";
import { ProductDTO } from "../../models/product";

const product: ProductDTO = {
  id: 2,
  name: "Smart tv",
  description: "Esta TV é muito top",
  price: 2500,
  imgUrl:
    "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
  categories: [
    {
      id: 2,
      name: "Eletrôniucos",
    },
    {
      id: 3,
      name: "Computadores",
    },
  ],
};

function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard product={product} />
          <div className="dsc-btn-page-container">
            <ButtonInverse />
            <ButtonPrimary />
          </div>
        </section>
      </main>
    </>
  );
}

export default ProductDetails;
