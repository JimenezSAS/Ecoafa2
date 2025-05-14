import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.svg";

const Header = () => {
  return (
     <div className="w-full h-full flex items-center justify-center overflow-hidden ">
      <header className="p-1 gap-15 flex items-center justify-between w-full h-full ">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-20 flex justify-center items-center" />
        </div>
        <div className="flex gap-15 h-10 text-[20px] text-[#0092B2] ">

          <Link to="/" className="hover:text-[#93B611] hover:bg-gray-200 flex  rounded-[10px] hover:text-[22px] transition-all duration-300">
            Home
          </Link>

          <Link to="/about" className="hover:text-[#93B611] hover:bg-gray-200 flex  rounded-[10px] hover:text-[22px] transition-all duration-300">
            About
          </Link>

          <Link to="/contact"  className="hover:text-[#93B611] hover:bg-gray-200 flex  rounded-[10px] hover:text-[22px] transition-all duration-300">
            Contact
          </Link>

          <Link to="/proyectos" className="hover:text-[#93B611] hover:bg-gray-200 flex  rounded-[10px] hover:text-[22px] transition-all duration-300" >
           Proyectos
          </Link>

        </div>
      </header>
    </div>
  );
};

export default Header;  


