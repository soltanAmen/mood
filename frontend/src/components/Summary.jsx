import { Link } from "react-router-dom";

const Summary = ({ cart }) => {
  return (
    <div className="cart-summary w-2/4 ml-10 font-third bg-gray-200 p-5 rounded-md  max-md:w-full max-md:mt-5 max-md:ml-0 z-0">
      <h1 className="text-3xl font-third font-light max-md:text-xl max-sm:text-base">
        Summary
      </h1>
      <hr className="w-full border-1 border-gray-300 my-3" />
      <div className="flex items-center justify-between w-full">
        <span className="text-gray-800 text-lg font-third max-md:text-sm">
          Subtotal
        </span>
        <span className="text-gray-800 text-lg font-third max-md:text-sm">
          ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
        </span>
      </div>
      <div className="flex items-center justify-between w-full">
        <span className="text-gray-800 text-lg font-third max-md:text-sm">
          Shipping
        </span>
        <span className="text-gray-800 text-lg font-third max-md:text-sm">
          $0
        </span>
      </div>
      <div className="flex items-center justify-between w-full">
        <span className="text-gray-800 text-lg font-third max-md:text-sm">
          Tax
        </span>
        <span className="text-gray-800 text-lg font-third max-md:text-sm">
          $0
        </span>
      </div>

      <hr className="w-full border-1 border-gray-300 my-3" />
      <div className="flex items-center justify-between  w-full max-md:flex-col  gap-3 ">
        <input
          placeholder="Promo Code"
          className=" w-3/4 h-10 border border-gray-300 rounded-md px-3 max-md:w-full max-md:h-8 max-md:text-sm"
        />
        <button className=" bg-accent text-white px-5 max-md:py-3 py-2 rounded-md w-1/4 max-md:w-full  max-md:text-sm hover:bg-opacity-90">
          Apply
        </button>
      </div>
      <hr className="w-full border-1 border-gray-300 my-3" />

      <div className="flex items-center justify-between w-full">
        <span
          className="text-gray-800 text-lg font-third 
              max-md:text-base max-sm:text-sm
              "
        >
          Total
        </span>
        <span
          className="text-gray-800 text-lg font-third
              max-md:text-sm 
              "
        >
          ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
        </span>
      </div>
      <button className="bg-accent text-white px-5 py-3 rounded-md mt-5 max-md:w-full max-md:px-3 max-md:py-1 max-md:text-sm hover:bg-opacity-90">
        <Link to="/checkout">Proceed to Checkout</Link>
      </button>
    </div>
  );
};

export default Summary;
