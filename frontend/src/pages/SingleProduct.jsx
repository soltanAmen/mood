import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "../assets/images/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

const SingleProduct = () => {
  const [initial, setInitial] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);

  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const [product, setProduct] = useState(
    products.find((product) => product._id === id)
  );

  product.rating = 4;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [product]);

  useEffect(() => {
    const interval = setInterval(() => {
      product.image.length > 1
        ? setInitial((prev) => {
            if (prev >= product.image.length - 1) {
              console.log(initial);

              return 0;
            } else {
              console.log(initial);

              return prev + 1;
            }
          })
        : null;
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-start justify-between h-full pt-20 max-md:px-4 px-16 w-full">
      <div className="initial-info flex  items-start justify-between gap-10 max-md:flex-col">
        <div className="images-container flex justify-center gap-10  items-center max-md:items-center w-2/4 max-md:flex-col-reverse max-md:w-full">
          <div className="small-images grid grid-cols-1 grid-rows-4 max-sm:grid-cols-4 max-sm:grid-rows-2 max-md:grid-cols-4 max-md:grid-rows-1 gap-5 max-md:w-full max-md:h-24">
            {product.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={product.name}
                className="md:w-24 md:h-28 cursor-pointer hover:scale-105 transition-all duration-150 ease-linear"
                onClick={() => setInitial(index)}
              />
            ))}
          </div>
          <div
            className="big-image 
            w-3/4
            h-3/4
            overflow-hidden
           
            max-md:w-full
           
          "
          >
            <img
              src={product.image[initial]}
              alt={product.name}
              className="w-full"
            />
          </div>
        </div>
        <div className="product-info flex flex-col items-start md:mt-20  gap-5 w-2/4 max-md:w-full ">
          <h1 className="text-3xl max-md:text-xl font-semibold font-third text-gray-800">
            {product.name}
          </h1>
          <span className="star flex gap-1 font-third text-lg items-center justify-center">
            {[...Array(5)].map((star, index) => (
              <FontAwesomeIcon
                key={index}
                icon={index < product.rating ? faStar : faStarRegular}
                className="text-accent text-lg"
              />
            ))}
            (122)
          </span>
          <p className="text-gray-400 text-lg font-third">
            {product.description}
          </p>
          <p className="text-gray-800 text-3xl font-third  ">
            ${product.price}
          </p>
          <div className=" flex items-center gap-5  max-md:flex-col">
            <div
              className=" flex
            flex-col
            gap-2
            items-start"
            >
              <span className="text-lg font-third text-gray-800">Size:</span>
              <div className="sizes grid grid-cols-5 gap-3">
                {product.sizes.map((size, index) => (
                  <label
                    id="size"
                    key={index}
                    htmlFor={size}
                    className={
                      selectedSize === size
                        ? "bg-accent text-white text-lg text-center p-2 rounded-full cursor-pointer px-4 py-2 border   border-gray-300"
                        : "bg-gray-200 text-gray-800 text-lg text-center p-2 rounded-full cursor-pointer px-4 py-2 border hover:bg-gray-300   border-gray-300"
                    }
                  >
                    <input
                      type="radio"
                      name="size"
                      id={size}
                      className="hidden"
                      onClick={() => setSelectedSize(size)}
                    />
                    {size}
                  </label>
                ))}
              </div>
            </div>
            <div
              className="
            flex
            flex-col
            gap-2
            items-start
            max-md:w-full
        
            "
            >
              <span className="text-lg font-third text-gray-800">
                Quantity:
              </span>
              <div
                className="quantity 
            flex
            items-center
            gap-5
            
            border
            border-gray-300
            rounded-full"
              >
                <button
                  className="text-xl font-third text-gray-800 bg-gray-200 px-4 py-2 rounded-s-full hover:bg-gray-300"
                  onClick={() =>
                    quantity > 1 ? setQuantity(quantity - 1) : null
                  }
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span className="text-2xl font-third text-gray-800">
                  {quantity}
                </span>
                <button
                  className="text-xl font-third text-gray-800 bg-gray-200 px-4 py-2 rounded-e-full hover:bg-gray-300"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
          </div>

          <button className="text-white text-2xl px-6 py-3 border bg-accent rounded-full mt-4  outline-none font-third hover:bg-opacity-90 transition-all duration-200 ease-in-out">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="product-details w-full mt-10">
        <h2 className="text-3xl font-semibold font-second text-gray-800">
          Product Details
        </h2>
        <p className="text-gray-400 text-lg font-third">
          100% cotton, 100% comfortable. This is the perfect t-shirt for any
          occasion.
        </p>
      </div>
      <div className="related-products w-full mt-10">
        <h2 className="text-3xl font-semibold font-second text-gray-800 mb-5">
          Related Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4  font-third">
          {products
            .filter(
              (relatedProduct) =>
                relatedProduct.category === product.category &&
                relatedProduct._id !== product._id &&
                relatedProduct.subCategory === product.subCategory
            )
            .slice(0, 5)
            .map((reproduct, index) => (
              <Link
                to={`/product/${reproduct._id}`}
                key={index}
                className="  flex  flex-col  justify-center  items-start  bg-white  rounded-md  cursor-pointer"
                onClick={() => {
                  setProduct(reproduct);
                }}
              >
                <div className="w-full  overflow-hidden">
                  <span
                    className={
                      index % 2 === 0
                        ? "text-white bg-accent mt-3  font-second    ml-2 px-3 py-1 rounded-md absolute z-50"
                        : "hidden"
                    }
                  >
                    - 20%
                  </span>

                  <img
                    src={reproduct.image[0]}
                    alt={reproduct.title}
                    className="hover:scale-105 transition-all duration-200 ease-in-out w-full"
                  />
                </div>
                <div
                  className="
                  mb-5
                flex
                flex-col
                justify-center
                items-start
                w-full
                mt-2
                overflow-hidden
                max-lg:text-lg
                text-sm
              "
                >
                  <h3 className="  text-gray-800 line-clamp-1">
                    {reproduct.name}
                  </h3>
                  <p className=" text-gray-800 flex flex-row w-full items-center justify-between">
                    $ {reproduct.price}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
