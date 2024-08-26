import { useContext, useEffect, useState } from "react";
import { SideBarContext } from "../context/SideBarContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faSearch,
  faBars,
  faShoppingCart,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useContext(SideBarContext);
  const [search, setSearch] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setSearch(false);
    setIsSideBarOpen(false);
  }, [location, setIsSideBarOpen]);
  return (
    <div>
      <header className="header ">
        <div className="logo  text-3xl font-bold font-first text-gray-800  cursor-pointer max-md:text-2xl mr-2">
          <Link to="/">MOOD.</Link>
        </div>
        <nav className=" hidden md:flex items-center gap-8  ml-5 mr-5  ">
          <Link
            className={location.pathname === "/" ? "page-link" : "link"}
            to="/"
          >
            Home
          </Link>
          <Link
            className={location.pathname === "/shop" ? "page-link" : "link"}
            to="/shop"
          >
            Shop
          </Link>
          <Link
            className={location.pathname === "/about" ? "page-link" : "link"}
            to="/about"
          >
            About
          </Link>
          <Link
            className={location.pathname === "/contact" ? "page-link" : "link"}
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
              className="max-lg:hidden max-md:h-8 border-none focus:outline-none focus:ring-0 max-md:pl-2 max-md:pr-2 max-md:rounded-full       max-md:text-sm    max-md:ml-2    max-md:mr-2 "
            />
            <FontAwesomeIcon icon={faSearch} className="max-lg:hidden" />
            <FontAwesomeIcon
              icon={faSearch}
              className={
                search
                  ? "opacity-0"
                  : "cursor-pointer max-lg:block   hidden transition-all duration-200 ease-in-out "
              }
              onClick={() => setSearch(true)}
            />
          </div>
          <div className=" flex items-center  gap-4  max-lg:mr-3 max-sm:mr-0 ">
            <FontAwesomeIcon icon={faHeart} />
            <Link to={"/login"}>
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <div className=" relative cursor-pointer">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="cart-count absolute -top-2 -right-2 bg-accent text-primary w-4 h-4 text-xs  text-center  rounded-full flex items-center justify-center">
                0
              </span>
            </div>
          </div>

          <div className="cursor-pointer md:hidden">
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setIsSideBarOpen(!isSideBarOpen)}
            />
            <div className={isSideBarOpen ? "show" : "hide"}>
              <div
                className="
              flex
              justify-between
              items-center
              p-4

            "
              >
                <h1 className="text-2xl font-bold font-first text-gray-800 cursor-pointer">
                  <Link to="/">MOOD.</Link>
                </h1>
                <FontAwesomeIcon
                  icon={faX}
                  onClick={() => setIsSideBarOpen(!isSideBarOpen)}
                  className={
                    isSideBarOpen ? "absolute right-3 cursor-pointer" : "hidden"
                  }
                />
              </div>

              <nav
                className=" side flex flex-col gap-4 m-auto mt-44 text-center text-3xl
            "
              >
                <Link
                  to="/"
                  className={location.pathname === "/" ? "page-link" : "link"}
                >
                  Home
                </Link>
                <Link
                  to="/shop"
                  className={
                    location.pathname === "/shop" ? "page-link" : "link"
                  }
                >
                  Shop
                </Link>
                <Link
                  to="/about"
                  className={
                    location.pathname === "/about" ? "page-link" : "link"
                  }
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className={
                    location.pathname === "/contact" ? "page-link" : "link"
                  }
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div
        className={
          search
            ? "px-10 absolute bg-white w-full flex max-h-60 items-center z-50 gap-4 transition-all duration-300 ease-in-out overflow-hidden"
            : "px-10 absolute bg-white w-full  flex max-h-0 items-center z-50 gap-4 overflow-hidden transition-all   duration-300 ease-in-out"
        }
      >
        <div className="search    my-4   px-4   w-full   m-auto flex items-center justify-center border gap- rounded-full ">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border  py-3 border-none focus:outline-none focus:ring-0 pl-2 pr-2 rounded-full text-sm ml-2 mr-2"
          />
          <FontAwesomeIcon icon={faSearch} className="h-4 w-4 cursor-pointer" />
        </div>
        <FontAwesomeIcon
          icon={faX}
          className="cursor-pointer h-4 w-4"
          onClick={() => setSearch(!search)}
        />
      </div>
    </div>
  );
};

export default Header;
