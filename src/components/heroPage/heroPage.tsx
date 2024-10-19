
import hrImage from "../../assets/hr-image.jpeg";
import { GenericButton } from "../button.tsx/button";
import { DropDownMenu } from "../dropDownMenu/dropDownMenu";
import { Engaging } from "../engaging/engaging";
import "./heroPage.css"

interface isMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen?: (value: boolean) => void;
}
export const HeroPage = ({isMenuOpen}: isMenuProps) => {


    return (
      <div className="heroPage-container1">
        {isMenuOpen ? (
          <DropDownMenu />
        ) : (
          <div className="heroPage-container">
            <div className="heropage-description">
              <p className="heropage-description1">
                "Building blocks for a <br />
                great culture where <br />
                every voice matters".
              </p>
              <p className="heropage-description2">
                Shamzbridge human resource prides itself beign able to
                accurately assess, identify and resolve a <br />
                range of workforce challenes whichcan lead to a toxic culture if
                not quickly detected or <br />
                addressed. We ave a team of HR cnsultants whoc can support you
                to promote happy and healthy <br />
                healthy workplace culture where employees feel physically and
                psychologically safe to raise concerns
              </p>
              <p>
                <GenericButton
                  type="button"
                  label="Diagonse our work culture"
                  onClick={() => "clicked"}
                  variant="primary"
                />
              </p>
            </div>
            <div className="heroPage-image">
              <img src={hrImage} alt="hr image" />
            </div>
          </div>
        )}
        <Engaging />
      </div>
    );
}