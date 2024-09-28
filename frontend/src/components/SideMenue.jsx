import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const SideMenue = ({ isSideBarOpen, setIsSideBarOpen }) => {
  return (
    <div className={isSideBarOpen ? "show" : "hide"}>
      <div className="       flex       justify-between       items-center       p-4">
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

      <nav className=" side flex flex-col gap-4 m-auto mt-44 text-center text-3xl">
        <Link
          to="/"
          className={location.pathname === "/" ? "page-link" : "link"}
        >
          Home
        </Link>
        <Link
          to="/shop"
          className={location.pathname === "/shop" ? "page-link" : "link"}
        >
          Shop
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "page-link" : "link"}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "page-link" : "link"}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default SideMenue;
