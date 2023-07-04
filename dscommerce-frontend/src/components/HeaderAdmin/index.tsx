import "./styles.css";
import homeIcon from "../../assets/home.svg";
import stockIcon from "../../assets/stock.svg";
import LoggedUser from "../LoggedUser";

function HeaderAdmin() {
  return (
    <header className="dsc-header-admin">
      <nav className="dsc-container">
        <h1>DSC Admin</h1>
        <div className="dsc-navbar-right">
          <div className="dsc-menu-items-container">
            <div className="dsc-menu-item">
              <img src={homeIcon} alt="home" />
              <p>Início</p>
            </div>
            <div className="dsc-menu-item">
              <img src={stockIcon} alt="Cadastro de produtos" />
              <p className="dsc-menu-item-active">Produtos</p>
            </div>
          </div>
          <LoggedUser />
        </div>
      </nav>
    </header>
  );
}

export default HeaderAdmin;
