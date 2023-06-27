import "./styles.css";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import ButtonInverse from "../../../components/ButtonPrimary";
import ButtonPrimary from "../../../components/ButtonInverse";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import * as ProductService from "../../../services/product-service";

function ProductDetails() {
  const params = useParams();

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    ProductService.findById(Number(params.productId)).then((reponse) => {
      setProduct(reponse.data);
    });
  }, []);

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
