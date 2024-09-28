import { useContext, useEffect, useState } from "react";
import { SideBarContext } from "../context/SideBarContext";
import { CartContext } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchContext } from "../context/SearchContext";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faSearch,
  faBars,
  faShoppingCart,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import SideMenue from "./SideMenue";

const Header = () => {
  const { searchText, setSearchText } = useContext(SearchContext);
  const { cartCount } = useContext(CartContext);
  const { isSideBarOpen, setIsSideBarOpen } = useContext(SideBarContext);
  const [search, setSearch] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setShow(true);
      }
      if (currentScrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  useEffect;
  useEffect(() => {
    setSearch(false);
    setIsSideBarOpen(false);
    setSearchText("");
  }, [location, setIsSideBarOpen]);
  useEffect(() => {
    setSearch(false);
  }, [isSideBarOpen]);
  const handileChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div
      className={`      font-second fixed  flex flex-col justify-center h-44 items-center px-4  top-0 left-0 w-full z-[50]   transition-all   duration-300   ease-in-out ${
        show ? "translate-y-0" : "-translate-y-full"
      } `}
    >
      <header className={`header bg-white z-[55]`}>
        <div className="logo  text-4xl font-bold font-first text-gray-800  cursor-pointer max-md:text-3xl mr-2">
          <Link to="/">MOOD.</Link>
        </div>
        <nav className=" hidden md:flex items-center gap-8  ml-5 mr-5  text-lg ">
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
              className="max-lg:hidden font-third max-md:h-8 border-none focus:outline-none focus:ring-0 max-md:pl-2 max-md:pr-2 max-md:rounded-full       max-md:text-sm    max-md:ml-2    max-md:mr-2 "
              value={searchText}
              onChange={handileChange}
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
              <Link to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
              <span className="cart-count absolute -top-2 -right-2 bg-accent px-2 py-2 text-primary w-4 h-4 text-xs  text-center  rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </div>
          </div>

          <div className="cursor-pointer md:hidden">
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setIsSideBarOpen(!isSideBarOpen)}
            />
            <SideMenue
              setIsSideBarOpen={setIsSideBarOpen}
              isSideBarOpen={isSideBarOpen}
            />
          </div>
        </div>
      </header>

      <div
        className={
          search
            ? "px-10 absolute bg-white w-full flex max-h-60 translate-y-0 items-center z-[55] gap-4 transition-all duration-300 ease-in-out overflow-hidden"
            : "px-10 absolute bg-white w-full  flex max-h-60 -translate-y-40 items-center z-[50] gap-4 overflow-hidden transition-all   duration-300 ease-in-out"
        }
      >
        <div className="search    my-4   px-4   w-full   m-auto flex items-center justify-center border gap- rounded-full ">
          <input
            type="text"
            autoFocus={true}
            placeholder="Search..."
            className="w-full border font-third  py-3 border-none focus:outline-none focus:ring-0 pl-2 pr-2 rounded-full text-sm ml-2 mr-2"
            value={searchText}
            onChange={handileChange}
          />
          <FontAwesomeIcon icon={faSearch} className="h-4 w-4 cursor-pointer" />
        </div>
        <FontAwesomeIcon
          icon={faX}
          className="cursor-pointer h-4 w-4"
          onClick={() => {
            setSearch(false);
            setSearchText("");
          }}
        />
      </div>
    </div>
  );
};

export default Header;
