import "./App.css";
import ButtonInverse from "./components/ButtonPrimary";
import ButtonPrimary from "./components/ButtonInverse";
import HeaderClient from "./components/HeaderClient";
import ProductDetailsCard from "./components/ProductDetailsCard";

function App() {
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

export default App;
