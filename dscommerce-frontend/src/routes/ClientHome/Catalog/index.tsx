import "./styles.css";
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import * as ProductService from "../../../services/product-service";

function Catalog() {
  return (
    <>
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar />
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            {ProductService.findAll().map((product) => (
              <CatalogCard product={product} key={product.id} />
            ))}
          </div>
          <ButtonNextPage />
        </section>
      </main>
    </>
  );
}

export default Catalog;
