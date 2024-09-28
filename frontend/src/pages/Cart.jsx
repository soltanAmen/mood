import { CartContext } from "../context/CartContext";
import { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CartList, Summary } from "../components";
const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className=" flex pt-10 items-start font-second  justify-start h-fit     bg-white px-10 ">
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center my-40 w-full h-full font-second">
          <span className="text-3xl font-second font-light">
            Your Cart is Empty
          </span>

          <Link
            to="/shop"
            className=" bg-accent text-white px-5 py-3 text-2xl font-third mt-5
            flex items-center gap-2 hover:bg-opacity-80 hover:scale-105
            rounded-full transition-all duration-300 ease-in-out "
          >
            {" "}
            Shop Now
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      ) : (
        <div className=" flex items-start font-second  justify-start   min-h-screen  bg-white w-full max-md:flex-col h-fit">
          <CartList cart={cart} />
          <Summary cart={cart} />
        </div>
      )}
    </div>
  );
};

export default Cart;
