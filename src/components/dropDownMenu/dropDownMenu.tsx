import { AboutUs } from "../aboutUs/aboutUs";
import "./dropDownMenu.css"

export const DropDownMenu = () => {

    return (
      <div className="dropdown-container">
        <ul>
          <li onClick={() => alert("clicked on about us")}>About Us</li>
          <li onClick={() => alert("clicked on or services")}>Our Services</li>
          <li onClick={() => alert("clicked on login")}>Login</li>
          <li onClick={() => alert("clicked on Get Started")}>Get Started</li>
        </ul>
      </div>
    );
}