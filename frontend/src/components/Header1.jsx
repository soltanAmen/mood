import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Header1 = () => {
  return (
    <header className="header bg-blue-600">
      <div className="logo  text-2xl font-bold font-first text-gray-800  cursor-pointer">
        <Link to="/">MOOD.</Link>
      </div>
      <nav className=" hidden md:flex items-center gap-8  ml-5 mr-5  ">
        <Link
          className={location.pathname === "/" ? "underline" : "link"}
          to="/"
        >
          Home
        </Link>
        <Link
          className={location.pathname === "/shop" ? "underline" : "link"}
          to="/shop"
        >
          Shop
        </Link>
        <Link
          className={location.pathname === "/about" ? "underline" : "link"}
          to="/about"
        >
          About
        </Link>
        <Link
          className={location.pathname === "/contact" ? "underline" : "link"}
          to="/contact"
        >
          Contact
        </Link>
      </nav>
      <div className="  flex items-center  gap-4 ">
        <div className="     flex items-center     gap-2     ">
          <input
            type="text"
            placeholder="Search..."
            className=" max-sm:hidden max-md:w-32 max-md:h-8 border-none focus:outline-none focus:ring-0 max-md:pl-2 max-md:pr-2 max-md:rounded-full       max-md:text-sm    max-md:ml-2    max-md:mr-2 "
          />
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className=" flex items-center  gap-4  max-lg:mr-10 ">
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faUser} />
          <div className=" relative cursor-pointer">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="cart-count absolute -top-2 -right-2 bg-accent text-primary w-4 h-4 text-xs  text-center  rounded-full flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header1;
