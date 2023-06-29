import "./styles.css";
import cartIcon from "../../assets/cart.svg";

function CartIcon() {
  return (
    <>
      <img src={cartIcon} alt="Carrinho de compras" />
      <div className="dsc-cart-count">22</div>
    </>
  );
}

export default CartIcon;
