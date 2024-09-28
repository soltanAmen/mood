import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { Link, Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { useContext, useState } from "react";
const Register = () => {
  const { tokenUser, setTokenUser } = useContext(UserContext);
  const [lodingProsses, setLodingProsses] = useState(false);
  const [user, setUser] = useState({
    name: "",
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
      className={` flex   justify-center   items-center   w-full   h-full   py-16 mt-20 `}
    >
      <ToastContainer />
      <div className="font-third      flex     flex-col     justify-center     items-center     bg-white     p-4     rounded-md     max-md:w-full     w-[35%] ">
        <h1 className="text-4xl font-bold font-second text-gray-800 mb-4">
          Sign Up
        </h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setLodingProsses(true);
            try {
              const res = await axios.post("/users/register", user, {
                withCredentials: true,
              });
              setTimeout(
                () => {
                  setTokenUser(res.data);

                  setLodingProsses(false);
                },

                2000
              );

              toast.success("Sing up successfully", {
                position: "top-right",
                autoClose: 1800,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              setUser({ name: "", email: "", password: "" });
            } catch (error) {
              console.log(error);
              toast.error(error.response.data.error);
            }
          }}
          className="flex flex-col gap-4 w-full"
        >
          <input
            type="text"
            name="name"
            value={user.name}
            placeholder="Username"
            className="  font-third   border     border-gray-300     rounded-md     px-4     py-2     focus:outline-none     focus:ring-2     focus:ring-accent     focus:border-transparent     max-md:w-full "
            onChange={handilChange}
          />
          <input
            name="email"
            value={user.email}
            type="email"
            placeholder="Email"
            className="font-third      border     border-gray-300     rounded-md     px-4     py-2     focus:outline-none     focus:ring-2     focus:ring-accent     focus:border-transparent     max-md:w-full "
            onChange={handilChange}
          />

          <input
            type="password"
            placeholder="Password"
            className=" font-third     border     border-gray-300     rounded-md     px-4     py-2     focus:outline-none     focus:ring-2     focus:ring-accent     focus:border-transparent     max-md:w-full "
            name="password"
            value={user.password}
            onChange={handilChange}
          />
          <button
            type="submit"
            className="     bg-accent     text-white     px-4     py-2     border         border-accent     rounded-md     max-md:w-full     hover:bg-opacity-75      font-third "
            onClick={
              user.name === "" || user.password === "" || user.email === ""
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
              "Sign Up"
            )}
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
        <div className="flex justify-center items-center w-full mt-4">
          <hr className="w-1/3 bg-gray-300 h-0.5" />
          <p className="text-gray-800 cursor-pointer  text-center mx-auto">
            Or sign up with
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
    </div>
  );
};

export default Register;
