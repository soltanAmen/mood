import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebookF,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="   flex   justify-center   items-center   w-full   h-full   py-16 ">
      <div className="     flex     flex-col     justify-center     items-center     bg-white     p-4     rounded-md     max-md:w-full     w-[35%] ">
        <h1 className="text-4xl font-bold font-second text-gray-800 mb-4">
          Login
        </h1>
        <form className="flex flex-col gap-4 w-full font-third">
          <input
            type="text"
            placeholder="Username"
            className="     border     border-gray-300     rounded-md     px-4     py-2     focus:outline-none     focus:ring-2     focus:ring-accent     focus:border-transparent     max-md:w-full "
          />
          <input
            type="password"
            placeholder="Password"
            className="     border     border-gray-300     rounded-md     px-4     py-2     focus:outline-none     focus:ring-2     focus:ring-accent     focus:border-transparent     max-md:w-full "
          />
          <button className="     bg-accent     text-white     px-4     py-2     border         border-accent     rounded-md     max-md:w-full     hover:bg-opacity-75      ">
            Login
          </button>
        </form>
        <div className="flex justify-between items-center w-full mt-2 font-medium max-md:text-sm ">
          <p className="text-gray-800 cursor-pointer font-third hover:text-gray-400">
            Forgot Password?
          </p>
          <Link
            to={"/register"}
            className="text-gray-800 font-third cursor-pointer hover:text-gray-400"
          >
            Create account
          </Link>
        </div>
        <hr className="w-full border-gray-300 my-4" />
        <div className="flex justify-between items-center w-full mt-1 gap-5">
          <button className="   bg-white   text-gray-800      text-center      px-4   py-2   border   border-gray-300   max-md:w-full   hover:bg-gray-200 rounded-md    ">
            <FontAwesomeIcon
              icon={faGoogle}
              className="md:mr-2 max-md:text-2xl"
            />
            <span className="max-md:hidden">Google</span>
          </button>
          <button className=" text-center   bg-white   text-gray-800   px-4   py-2   border   border-gray-300   rounded-md   max-md:w-full   hover:bg-gray-200">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="md:mr-2 max-md:text-2xl"
            />
            <span className="max-md:hidden">Facebook</span>
          </button>
          <button className=" bg-white text-gray-800 px-4 py-2 text-center border border-gray-300 rounded-md   max-md:w-full hover:bg-gray-200 ">
            <FontAwesomeIcon
              icon={faXTwitter}
              className="md:mr-2 max-md:text-2xl"
            />
            <span className="max-md:hidden">Twitter</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
