import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTriangleExclamation,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-5">
      <h1 className="text-4xl font-bold font-second text-gray-800  max-md:text-2xl ">
        404 - Not Found
        <FontAwesomeIcon
          icon={faTriangleExclamation}
          className="text-4xl ml-2 text-red-500 max-md:text-2xl"
        />
      </h1>

      <p className="text-2xl font-second mt-2 text-gray-800 max-md:text-lg text-center">
        Ooops! The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="btn mt-4 
        text-black
        hover:text-white 
        text-2xl 
        font-third
        border-2
        border-accent
        hover:bg-accent
        px-8 
        py-4 
        rounded-full 
        uppercase
        transition-all 
        duration-200
        max-md:text-lg
      "
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;
