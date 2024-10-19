import {FaCaretDown, FaBars, FaTimes} from "react-icons/fa"
import { GenericButton } from "../button.tsx/button";

import "./navbar.css"


export const Navbar = ({ isMenuOpen, setIsMenuOpen }: any) => {
  const image =
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1724055539467/36a4b661-bd4f-488c-88d9-7109189330e5.png";

  const toggleMenu = () => setIsMenuOpen((prev: any) => !prev);

  return (
    <div className="navbar-container">
      <div className="navbar-image">
        <span>
          <img src={image} alt="image" />
        </span>
      </div>
      <div className={`navbar-sections ${isMenuOpen ? "open" : ""}`}>
        <span>About Us</span>
        <span>Our Services</span>
      </div>
      <div className="navbar-auth">
        <span className="login">
          Login <FaCaretDown />
        </span>
        <span>
          <GenericButton
            label="Get Started"
            onClick={() => "clicked"}
            variant="primary"
            type="button"
          />
        </span>
      </div>
      <div className="burger-menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};