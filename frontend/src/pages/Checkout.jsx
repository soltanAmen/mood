import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcVisa,
  faCcPaypal,
  faCcStripe,
} from "@fortawesome/free-brands-svg-icons";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className=" flex max-md:flex-col items-center justify-center w-ful  gap-5 py-10">
      <div className="form flex flex-col items-center justify-center gap-5 w-1/2 max-md:w-full p-7 outline-none">
        <h1 className="text-3xl font-third">BILLING DETAILS</h1>
        <div className="flex items-center justify-between w-full gap-2">
          <input
            placeholder="First Name"
            className="w-1/2 h-10 border border-gray-300 rounded-md px-3"
          />
          <input
            placeholder="Last Name"
            className="w-1/2 h-10 border border-gray-300 rounded-md px-3"
          />
        </div>
        <input
          placeholder="Email"
          className="w-full h-10 border border-gray-300 rounded-md px-3"
        />
        <input
          placeholder="Address"
          className="w-full h-10 border border-gray-300 rounded-md px-3"
        />
        <div className="flex items-center justify-between w-full gap-2">
          <input
            placeholder="City"
            className="w-full h-10 border border-gray-300 rounded-md px-3"
          />
          <input
            placeholder="State"
            className="w-full h-10 border border-gray-300 rounded-md px-3"
          />
        </div>
        <div className="flex items-center justify-between w-full gap-2">
          <input
            placeholder="Country"
            className="w-full h-10 border border-gray-300 rounded-md px-3"
          />
          <input
            placeholder="Postal Code"
            className="w-full h-10 border border-gray-300 rounded-md px-3"
          />
        </div>
        <input
          placeholder="Phone"
          className="w-full h-10 border border-gray-300 rounded-md px-3"
        />
      </div>
      <div className="summary flex flex-col items-center justify-center gap-5 w-1/2 max-md:w-full p-7">
        <h1 className="text-3xl font-third">CART TOTALS</h1>

        <div className="flex items-center justify-between w-full">
          <span className="text-gray-800 text-lg font-third">Total</span>
          <span className="text-gray-800 text-lg font-third">
            ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
          </span>
        </div>
        <hr className="w-full border-1 border-gray-300 my-3" />
        <div className="flex items-start justify-between w-full gap-3 max-md:flex-col">
          <span className="text-gray-800 text-lg font-third">
            Payment Method
          </span>
          <div className="flex gap-5 ">
            <div className="flex items-center justify-center gap-2">
              <input type="radio" name="payment" id="visa" />
              <label htmlFor="visa" className="text-3xl text-gray-800">
                <FontAwesomeIcon icon={faCcVisa} />
              </label>
            </div>
            <div className="flex items-center justify-center gap-2">
              <input type="radio" name="payment" id="paypal" />
              <label htmlFor="paypal" className="text-3xl text-gray-800">
                <FontAwesomeIcon icon={faCcPaypal} />
              </label>
            </div>
            <div className="flex items-center justify-center gap-2">
              <input type="radio" name="payment" id="stripe" />
              <label htmlFor="stripe" className="text-3xl text-gray-800">
                <FontAwesomeIcon icon={faCcStripe} />
              </label>
            </div>
          </div>
        </div>
        <button className="bg-accent text-white px-5 py-3 rounded-md mt-5">
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default Checkout;
