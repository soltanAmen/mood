import { latestProducts, products, service } from "../assets/images/assets.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import { SideBarContext } from "../context/SideBarContext.jsx";
import { Subsicribe, Products } from "../components";
const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const { isSideBarOpen } = useContext(SideBarContext);
  return (
    <div
      className={isSideBarOpen ? " transition-all duration-1000 fixed" : "  "}
    >
      <div className=" flex justify-center items-center h-screen bg-cover bg-center bg-fixed bg-no-repeat relative bg-home">
        <div className="absolute bg-black bg-opacity-50 w-full h-full">
          <div className="text-white text-center mt-52">
            <h1 className="text-6xl font-bold font-first">With MOOD.</h1>
            <p className="text-2xl font-second mt-1">
              {" "}
              Outfit Your Every Mood{" "}
            </p>

            <button className=" bg-opacity-50 text-white text-2xl  px-8 py-4 rounded-full mt-4  bg-accent outline-none  font-third hover:bg-accent  hover:scale-110 transition-all duration-200 ease-in-out ">
              Shop Now
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 " />
            </button>
          </div>
        </div>
      </div>

      <div className="latest-products  mt-5">
        <h2 className="text-4xl font-bold font-first text-gray-800 text-center">
          New Arrivals <hr className="w-20 mx-auto mt-2" />
        </h2>

        <Products products={latestProducts} />
        <div className="bg-banner  mb-5  bg-cover bg-left  bg-no-repeat h-96 flex justify-center items-center">
          <div className="promotion  h-full py-20   text-start w-full px-10 max-md:text-center">
            <h2 className="text-7xl max-md:text-5xl font-bold font-second text-gray-800 ">
              Get 50% Off
            </h2>
            <p className="text-3xl max-md:text-2xl font-third mt-1 ">
              On Your First Order
            </p>

            <button
              className=" flex items-center  text-white text-2xl  px-8 py-4 rounded-full mt-4 hover:bg-opacity-90 hover:scale-110  bg-accent outline-none  font-third
            
             transition-all duration-200 ease-in-out
            "
            >
              Shop Now
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 " />
            </button>
          </div>
        </div>
        <div className="best-selers  mt-5">
          <h2 className="text-4xl font-bold font-first text-gray-800 text-center">
            Best Sellers
            <hr className="w-20 mx-auto mt-2" />
          </h2>

          <Products
            products={products.filter((product) => product.bestseller)}
          />
          <div className="services flex justify-center items-center max-md:flex-col gap-5 font-third">
            {service.map((service, index) => (
              <div
                key={index}
                className="
              flex
              flex-col
              justify-center
              items-center
              bg-white
              p-4
              rounded-md
              cursor-pointer
              max-md:w-full
              max-md:mb-4
              max-md:flex-col
            "
              >
                <div className="w-full  overflow-hidden flex flex-col items-center justify-center">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="  w-10 h-10  max-md:w-16 max-md:h-16"
                  />
                  <div
                    className="
              flex
              flex-col
              justify-center
              items-center
              w-full
              mt-2
              overflow-hidden
              max-lg:text-lg
              text-sm"
                  >
                    <h3 className=" text-lg max-md:text-xl  text-gray-800 line-clamp-1">
                      {service.title}
                    </h3>
                    <p className=" text-gray-300  max-md:text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Subsicribe />
    </div>
  );
};

export default Home;
