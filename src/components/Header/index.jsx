import { FiLogOut } from "react-icons/fi";
import image from "../../img/logo-hamburger.png";
import "./style.css";

export const Header = ({onClick}) => {
  
  return (
    <header className="header-all">
      <figure className="image-header">
        <img className="image-logo"src={image} alt="logo" />
      </figure>
      <button className="btn-exit"  onClick= {onClick}>
        <FiLogOut/>
      </button>
    </header>

  );
};