import "./styles.css";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import ButtonInverse from "../../../components/ButtonPrimary";
import ButtonPrimary from "../../../components/ButtonInverse";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import * as ProductService from "../../../services/product-service";
import * as cartService from "../../../services/cart-service";
import { ContextCartCount } from "../../../utils/context-cart";

function ProductDetails() {
  const params = useParams();

  const navigate = useNavigate();

  const { setContextCartCount } = useContext(ContextCartCount);

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    ProductService.findById(Number(params.productId))
      .then((response) => {
        setProduct(response.data);
      })
      .catch(() => {
        navigate("/");
      });
  }, []);

  function handleByClick() {
    if (product) {
      cartService.addProduct(product);
      setContextCartCount(cartService.getCart().items.length);
      navigate("/cart");
    }
  }

  return (
    <>
      <main>
        <section id="product-details-section" className="dsc-container">
          {product && <ProductDetailsCard product={product} />}
          <div className="dsc-btn-page-container">
            <div onClick={handleByClick}>
              <ButtonInverse text="Comprar" />
            </div>
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
