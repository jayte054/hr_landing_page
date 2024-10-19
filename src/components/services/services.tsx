import { FaBuilding, FaChalkboard, FaChess } from "react-icons/fa";
import { } from "react-icons/fa";
import { } from "react-icons/fa";
import "./services.css"

export const Services = () => {
    return (
      <div className="services-container">
        <h2> Our Services </h2>
        <span>
          Explore our diverse offerings and experience unparalleled excellence
          from tailored solutions to personalized consultations.
        </span>
        <div className="services-body">
          <div className="services-body-content">
            <p>Capacity Building</p>
            <FaBuilding style={{ color: "blue" }} />
            <p>
              Nurture talent and skills with our capacity building services.
            </p>
          </div>
          <div className="services-body-content">
            <p>Consultancy Services</p>
            <FaChalkboard style={{ color: "blue" }} />
            <p>Elevate your strategy with our consultancy services.</p>
          </div>
          <div className="services-body-content">
            <p>Community Development</p>
            <FaChess style={{ color: "blue" }} />
            <p>Championing development where it matters most.</p>
          </div>
        </div>
      </div>
    );
}