import { useState } from "react";
import { AboutUs } from "../components/aboutUs/aboutUs";
import { DropDownMenu } from "../components/dropDownMenu/dropDownMenu";
import { Footer } from "../components/Footer/footer";
import { HeroPage } from "../components/heroPage/heroPage";
import { Navbar } from "../components/navbar/navbar"
import { Services } from "../components/services/services";

import "./landingPage.css"

// interface isMenuProps {
//   isMenuOpen: boolean;
//   setIsMenuOpen: (value: boolean) => void;
// }
export const LandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);


    return (
      <div className="landingPage">
        <Navbar isMenuOpen = {isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        <HeroPage isMenuOpen= {isMenuOpen}/>
        <AboutUs />
        <Services />
        <Footer />
      </div>
    );
}