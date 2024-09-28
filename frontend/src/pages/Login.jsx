import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { tokenUser, setTokenUser } = useContext(UserContext);
  const [lodingProsses, setLodingProsses] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handilChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  if (tokenUser) {
    return <Navigate to={"/"} />;
  }

  return (
    <div
      className={`flex   justify-center   items-center   w-full   h-full   py-16 mt-20 `}
    >
      <div className="     flex     flex-col     justify-center     items-center     bg-white     p-4     rounded-md     max-md:w-full     w-[35%] ">
        <h1 className="text-4xl font-bold font-second text-gray-800 mb-4">
          Login
        </h1>

        <form
          className="flex flex-col gap-4 w-full font-third"
          onSubmit={async (e) => {
            e.preventDefault();
            setLodingProsses(true);
            try {
              const res = await axios.post("/users/login", user, {
                withCredentials: true,
              });
              setUser({ email: "", password: "" });
              toast.success("Login successfully", {
                position: "top-right",
                autoClose: 1800,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });

              setTimeout(() => {
                setTokenUser(res.data);
                setLodingProsses(false);
              }, 2000);
            } catch (error) {
              console.log(error.response.data.error);
              setTokenUser(null);
              toast.error(error.response.data.error);
            }
          }}
        >
          <input
            name="email"
            value={user.email}
            type="email"
            placeholder="Email"
            className="     border     border-gray-300     rounded-md     px-4     py-2     focus:outline-none     focus:ring-2     focus:ring-accent     focus:border-transparent     max-md:w-full "
            onChange={handilChange}
          />

          <input
            name="password"
            value={user.password}
            type="password"
            placeholder="Password"
            className="     border     border-gray-300     rounded-md     px-4     py-2     focus:outline-none     focus:ring-2     focus:ring-accent     focus:border-transparent     max-md:w-full "
            onChange={handilChange}
          />
          <button
            type="submit"
            className="     bg-accent     text-white     px-4     py-2     border         border-accent     rounded-md     max-md:w-full     hover:bg-opacity-75      "
            onClick={
              user.name === "" || user.password === ""
                ? (e) => {
                    e.preventDefault();
                    toast.warn("Please fill all fields", {
                      position: "top-right",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                  }
                : null
            }
          >
            {lodingProsses ? (
              <div className="flex justify-center items-center gap-2">
                <div className="loading-circle"></div>
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>
        <div className="flex justify-between items-center w-full mt-2 font-medium max-md:text-sm  font-third">
          <p className="text-gray-800 cursor-pointer  text-center mx-auto">
            Don't have an account?{" "}
            <Link
              to={"/register"}
              className="text-gray-800 cursor-pointer hover:text-gray-400"
            >
              Register
            </Link>
          </p>
        </div>
        <div className="flex justify-center items-center w-full mt-4">
          <hr className="w-1/3 bg-gray-300 h-0.5" />
          <p className="mx-2 text-gray-800 font-third text-center">
            Or login with
          </p>
          <hr className="w-1/3 bg-gray-300 h-0.5" />
        </div>
        <div className="flex justify-center items-center w-full mt-4 gap-5">
          <button className=" w-full bg-white   text-gray-800      text-center      px-4   py-2   border   border-gray-300   max-md:w-full   hover:bg-gray-200 rounded-md    ">
            <FontAwesomeIcon
              icon={faGoogle}
              className="md:mr-2 max-md:text-2xl"
            />
            <span className="max-md:hidden">Google</span>
          </button>
          <button className=" w-full bg-white   text-gray-800      text-center      px-4   py-2   border   border-gray-300   max-md:w-full   hover:bg-gray-200 rounded-md    ">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="md:mr-2 max-md:text-2xl"
            />
            <span className="max-md:hidden">Facebook</span>
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
