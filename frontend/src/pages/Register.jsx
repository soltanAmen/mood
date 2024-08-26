import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebookF,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="   flex   justify-center   items-center   w-full   h-full   py-16 ">
      <div className="font-third      flex     flex-col     justify-center     items-center     bg-white     p-4     rounded-md     max-md:w-full     w-[35%] ">
        <h1 className="text-4xl font-bold font-second text-gray-800 mb-4">
          Sign Up
        </h1>
        <form className="flex flex-col gap-4 w-full">
          <input
            type="text"
            placeholder="Username"
            className="  font-third   border     border-gray-300     rounded-md     px-4     py-2     focus:outline-none     focus:ring-2     focus:ring-accent     focus:border-transparent     max-md:w-full "
          />
          <input
            type="email"
            placeholder="Email"
            className="font-third      border     border-gray-300     rounded-md     px-4     py-2     focus:outline-none     focus:ring-2     focus:ring-accent     focus:border-transparent     max-md:w-full "
          />

          <input
            type="password"
            placeholder="Password"
            className=" font-third     border     border-gray-300     rounded-md     px-4     py-2     focus:outline-none     focus:ring-2     focus:ring-accent     focus:border-transparent     max-md:w-full "
          />
          <button className="     bg-accent     text-white     px-4     py-2     border         border-accent     rounded-md     max-md:w-full     hover:bg-opacity-75      font-third ">
            Sign Up
          </button>
        </form>
        <div className="flex justify-between items-center w-full mt-2 font-medium max-md:text-sm  font-third">
          <p className="text-gray-800 cursor-pointer  text-center mx-auto">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-gray-800 cursor-pointer hover:text-gray-400"
            >
              Login
            </Link>
          </p>
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

export default Register;
