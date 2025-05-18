
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo/logo.svg";

const Header = () => {
  const location = useLocation();

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden ">
      <header className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-md p-2 gap-15 flex items-center justify-between h-24 shadow-md transition-all rounded-[5px]"> 
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-20 flex justify-center items-center" />
        </div>
        <div className="flex gap-15 h-10 text-[20px] text-[#0092B2] ">
          <div className="flex flex-col items-center">
            <Link
              to="/"
              className={`hover:text-[#93B611] hover:bg-gray-200 flex rounded-[10px] hover:text-[22px] transition-all duration-300 ${
                location.pathname === "/" ? "text-[#93B611]" : ""
              }`}
            >
              Home
            </Link>
            {location.pathname === "/" && (
              <div className="h-1 w-full bg-[#93B611] rounded-b" />
            )}
          </div>
          <div className="flex flex-col items-center">
            <Link
              to="/about"
              className={`hover:text-[#93B611] hover:bg-gray-200 flex rounded-[10px] hover:text-[22px] transition-all duration-300 ${
                location.pathname === "/about" ? "text-[#93B611]" : ""
              }`}
            >
              About
            </Link>
            {location.pathname === "/about" && (
              <div className="h-1 w-full bg-[#93B611] rounded-b" />
            )}
          </div>
          <div className="flex flex-col items-center">
            <Link
              to="/contact"
              className={`hover:text-[#93B611] hover:bg-gray-200 flex rounded-[10px] hover:text-[22px] transition-all duration-300 ${
                location.pathname === "/contact" ? "text-[#93B611]" : ""
              }`}
            >
              Contact
            </Link>
            {location.pathname === "/contact" && (
              <div className="h-1 w-full bg-[#93B611] rounded-b" />
            )}
          </div>
          <div className="flex flex-col items-center">
            <Link
              to="/proyectos"
              className={`hover:text-[#93B611] hover:bg-gray-200 flex rounded-[10px] hover:text-[22px] transition-all duration-300 ${
                location.pathname === "/proyectos" ? "text-[#93B611]" : ""
              }`}
            >
             Experiencia
            </Link>
            {location.pathname === "/proyectos" && (
              <div className="h-1 w-full bg-[#93B611] rounded-b" />
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;


