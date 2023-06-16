import "./styles.css";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import ButtonInverse from "../../components/ButtonPrimary";
import ButtonPrimary from "../../components/ButtonInverse";

function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard />
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
