import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/CartContext";

const CartList = () => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="cart-items flex flex-col items-start w-2/4 font-third max-md:w-full">
      <span className="flex items-center justify-between w-full">
        <h1 className="text-3xl max-md:text-xl max-sm:text-base font-second font-light">
          Your Cart
        </h1>
        <span className="text-2xl max-md:text-lg max-sm:text-sm">
          {cart.length > 1 ? (
            <span className="text-gray-800  font-normal">
              {cart.length} items
            </span>
          ) : (
            <span className="text-gray-800  font-semibold">
              {cart.length} item
            </span>
          )}
        </span>
      </span>
      <hr className="w-full border-1 border-gray-300 my-3" />
      {cart.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-start  w-full my-3 border-t border-b border-gray-300 py-3 gap-5 max-sm:flex-col max-sm:items-center max-sm:justify-start max-sm:gap-2 max-sm:py-2 "
        >
          <img
            src={item.image[0]}
            alt={item.name}
            className="w-20 h-20 object-cover max-sm:w-32 max-sm:h-32 max-sm:m-auto"
          />

          <div className="flex flex-col items-start justify-center gap-3 w-1/2 max-sm:w-fit">
            <h3 className="text-gray-800 text-lg max-md:text-base max-sm:text-sm font-third line-clamp-1">
              {item.name}
            </h3>
            <span className="text-gray-800 text-lg max-md:text-base max-sm:text-sm font-third flex items-center gap-10 justify-between ">
              <span>${item.price} </span>

              <span className="bg-gray-100 border border-gray-300 px-2 rounded-md min-w-8 ">
                {item.size}
              </span>

              <input
                type="number"
                value={item.quantity}
                min={1}
                onChange={(e) => {
                  const newCart = cart.map((cartItem) =>
                    cartItem.uid === item.uid
                      ? { ...cartItem, quantity: e.target.value }
                      : cartItem
                  );
                  setCart(newCart);
                  localStorage.setItem("cart", JSON.stringify(newCart));
                }}
                className="w-12  border border-gray-300 px-1 max-sm:text-sm rounded-md max-sm:w-8 max-sm:h-6 "
              />
              <button
                className="text-gray-500 ml-3"
                onClick={() => {
                  const newCart = cart.filter(
                    (cartItem) => cartItem.uid !== item.uid
                  );
                  setCart(newCart);
                  localStorage.setItem("cart", JSON.stringify(newCart));
                }}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;
