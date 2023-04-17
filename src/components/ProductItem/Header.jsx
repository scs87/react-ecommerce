import React from "react";
import Logo from "../../assets/imgs/logo.png"
import fondo from "../../assets/fondo.jpg"


const Header = () => {
    return(
        <nav>
        <div className="nav-wrapper light-blue darken-2">
         <img alt="#!" src={Logo} className="logostyle" />
         <div src={fondo} className="fondoback">

         </div>



        </div>


    </nav>
    );
}

export default Header;