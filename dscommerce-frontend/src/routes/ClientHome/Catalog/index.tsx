import "./styles.css";
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import * as ProductService from "../../../services/product-service";

type QueryParams = {
  page: number;
  name: string;
};

function Catalog() {
  const [isLastPage, setIsLastPage] = useState(false);

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: "",
  });

  useEffect(() => {
    ProductService.findPageRequest(queryParams.page, queryParams.name).then(
      (response) => {
        const nextPage = response.data.content;
        setProducts(products.concat(nextPage));
        setIsLastPage(response.data.last);
      }
    );
  }, [queryParams]);

  function handleSearch(searchText: string) {
    setProducts([]);
    setQueryParams({ ...queryParams, page: 0, name: searchText });
  }

  function handleNextPageClick() {
    setQueryParams({ ...queryParams, page: queryParams.page + 1 });
  }

  return (
    <>
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar onSearch={handleSearch} />
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            {products.map((product) => (
              <CatalogCard product={product} key={product.id} />
            ))}
          </div>

          {!isLastPage && (
            <div onClick={handleNextPageClick}>
              <ButtonNextPage onNextPage={handleNextPageClick} />
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default Catalog;
