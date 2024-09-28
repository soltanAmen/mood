import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import {
  faStar,
  faPlus,
  faMinus,
  faCheck,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { toast } from "react-toastify";
import { CartContext } from "../context/CartContext";

const ProductInfo = ({
  product,
  selectedSize,
  setSelectedSize,
  quantity,
  setQuantity,
  like,
  setLike,
  chosenColor,
  setChosenColor,
  animate,
  setAnimate,
  addedToCart,
  setAddedToCart,
}) => {
  const colors = ["black", "white", "gray"];
  const { setCartCount, setCart } = useContext(CartContext);

  const likeProduct = async () => {
    if (like) {
      setLike(false);
      let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      wishlist = wishlist.filter((id) => id !== product._id);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      console.log(wishlist);
    } else {
      setLike(true);
      let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      wishlist.push(product._id);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      console.log(wishlist);
    }
  };
  const addToCart = () => {
    if (!selectedSize) {
      toast.warn("Select Size");
      return;
    }
    if (!chosenColor) {
      toast.warn("Select Color");
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find(
      (item) =>
        item.id === product._id &&
        item.size === selectedSize &&
        item.color === chosenColor
    );

    if (existingProduct) {
      existingProduct.quantity += quantity;
      setCart(cart);
    } else {
      cart.push({
        uid: new Date().getTime() + Math.random(),
        id: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
        size: selectedSize,
        color: chosenColor,
        quantity: quantity,
      });
      setCartCount((prev) => prev + 1);
      setCart(cart);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
    setAddedToCart(true);
    setAnimate(true);

    setTimeout(() => {
      setAnimate(false);
    }, 400);
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  const rating = 4;
  return (
    <div className="product-info flex flex-col items-start gap-5  w-2/4 max-md:w-full ">
      <h1 className="text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-base font-semibold font-third text-gray-800 ">
        {product.name}
      </h1>
      <span className="star flex gap-1 font-third text-lg items-center justify-center">
        {[...Array(5)].map((star, index) => (
          <FontAwesomeIcon
            key={index}
            icon={index < rating ? faStar : faStarRegular}
            className="text-accent text-lg"
          />
        ))}
        (122)
      </span>
      <p className="text-gray-400 text-base max-sm:text-sm font-third">
        {product.description}
      </p>
      <p className="text-gray-800 text-3xl font-third flex justify-between items-center gap-5">
        ${product.price}
        <span className="text-gray-400 text-lg font-third line-through">
          ${product.price + 50}
        </span>
      </p>
      <div className="flex items-center gap-5 max-md:flex-col">
        <div className="flex flex-col gap-2 items-start">
          <span className="text-lg font-third text-gray-800">Size:</span>
          <div className="sizes grid grid-cols-4 w-[200px]">
            {product.sizes.map((size, index) => (
              <label
                key={index}
                htmlFor={size}
                className={
                  selectedSize === size
                    ? "bg-accent w-10 h-10  text-white text-lg text-center px-2 py-1 rounded-full cursor-pointer  border border-gray-300"
                    : "bg-gray-200 w-10 h-10 text-gray-800 text-lg text-center px-2 py-1  rounded-full cursor-pointer  border hover:bg-gray-300 border-gray-300"
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
        <div className="flex flex-col gap-2 items-start max-md:w-full">
          <span className="text-lg font-third text-gray-800">Quantity:</span>
          <div className="quantity flex items-center gap-5 border border-gray-300 rounded-full">
            <button
              className="text-xl font-third text-gray-800 bg-gray-200 px-4 py-2 rounded-s-full hover:bg-gray-300"
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
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
      <div className="flex items-center gap-5 mt-3">
        <span className="text-lg font-third text-gray-800">Color:</span>
        <div className="colors grid grid-cols-3 gap-3 text-center">
          {colors.map((color, index) => (
            <label
              key={index}
              htmlFor={color}
              onClick={() => setChosenColor(color)}
              className={
                color === "black"
                  ? "bg-black w-10 h-10 text-white text-lg text-center px-2 py-1 rounded-full cursor-pointer border border-gray-300"
                  : color === "white"
                  ? "bg-white w-10 h-10 text-gray-800 text-lg text-center px-2 py-1 rounded-full cursor-pointer border border-gray-300"
                  : "bg-gray-300 w-10 h-10 text-gray-800 text-lg text-center px-2 py-1 rounded-full cursor-pointer border border-gray-300"
              }
            >
              <FontAwesomeIcon
                icon={faCheck}
                className={
                  chosenColor === color
                    ? "text-center mx-auto"
                    : "text-transparent"
                }
              />
              <input type="radio" name="color" id={color} className="hidden" />
            </label>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end gap-5 mt-4 ">
        <button
          className={`${animate ? "add-to-card-btn-animation" : ""}
              bg-accent text-white text-2xl text-center rounded-full cursor-pointer px-4 py-3 font-third w-[220px]
              max-md:w-[150px] 
              max-md:text-base  max-sm:text-sm
              hover:bg-opacity-90 transition-all duration-200 ease-in-out`}
          onClick={addToCart}
        >
          {addedToCart ? "Added to Cart" : "Add to Cart"}
        </button>
        <FontAwesomeIcon
          icon={faHeart}
          onClick={likeProduct}
          className={`text-4xl font-extralight cursor-pointer transition-all duration-500 ease-in-out ${
            like ? "like-btn-animation " : ""
          }`}
        />
      </div>
      <hr className="w-full border-t-2 border-gray-200" />
      <div className="flex items-start gap-5 flex-col">
        <p className="text-gray-400 text-base max-sm:text-sm font-third">
          <span className="text-gray-800">Categories: {product.category}</span>
          <br />
          100% cotton, 100% comfortable. This is the perfect t-shirt for any
          occasion.
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
