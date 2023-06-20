import "./styles.css";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import ButtonInverse from "../../../components/ButtonPrimary";
import ButtonPrimary from "../../../components/ButtonInverse";
import * as ProductService from "../../../services/product-service";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetails() {
  const params = useParams();
  const product = ProductService.findById(Number(params.productId));

  return (
    <>
      <main>
        <section id="product-details-section" className="dsc-container">
          {product && <ProductDetailsCard product={product} />}

          <div className="dsc-btn-page-container">
            <ButtonInverse text="Comprar" />
            <Link to="/">
              <ButtonPrimary text="Início" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default ProductDetails;
