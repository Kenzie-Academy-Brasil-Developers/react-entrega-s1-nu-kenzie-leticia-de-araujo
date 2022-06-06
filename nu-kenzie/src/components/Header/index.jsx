import "./style.css";
import logo from "./../../imgs-icons/Nu Kenzie.svg";

const Header = ({ changePage }) => {
  return (
    <header>
      <div className="Header-logo">
        <img src={logo} alt="logo" />
      </div>
      <button
        className="Header-inicio"
        onClick={() => {
          changePage();
        }}
      >
        <p>Início</p>
      </button>
    </header>
  );
};

export default Header;
