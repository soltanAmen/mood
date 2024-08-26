const Subsicribe = () => {
  return (
    <div className=" flex items-center flex-col  justify-between">
      <div className=" text-center text-white p-4 my-5">
        <h2 className="text-4xl font-bold font-first text-gray-800 text-center">
          Subscribe to our newsletter
        </h2>
        <p className="text-xl font-third mt-2">
          Get the latest updates and special offers delivered directly to your
          inbox.
        </p>
        <div className=" flex justify-between items-center   m-auto border-accent rounded-full border-2 py-1 px-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="text-black px-4 py-2 rounded-l-md outline-none w-3/4"
          />
          <button
            className="btn h-full bg-accent font-third  text-white border-2 px-5 py-3 rounded-full uppercase  hover:scale-105 transition-all duration-200 ease-in-out "
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subsicribe;
