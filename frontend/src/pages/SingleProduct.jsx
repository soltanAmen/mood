import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "../assets/images/assets";
import { Products, ProductInfo, ProductImg } from "../components";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SingleProduct = () => {
  const [initial, setInitial] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [like, setLike] = useState(false);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [chosenColor, setChosenColor] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = products.find((product) => product._id === id);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setInitial(0);
      setChosenColor(null);
      setSelectedSize(null);
      setAddedToCart(false);
      setLike(false);
      setQuantity(1);
    }
  }, [product]);

  useEffect(() => {
    if (product && product.image.length > 1) {
      const interval = setInterval(() => {
        setInitial((prev) => (prev >= product.image.length - 1 ? 0 : prev + 1));
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [product]);
  useEffect(() => {
    const fetchWishlist = async () => {
      if (product) {
        try {
          let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
          if (wishlist.includes(product._id)) {
            setLike(true);
          }
        } catch (error) {
          console.error("Error fetching wishlist:", error);
        }
      }
    };
    fetchWishlist();
  }, [product]);

  if (!product) return <p>Loading...</p>;

  return (
    <div
      className={`flex    flex-col items-start justify-between  pt-20 max-md:px-4  w-full`}
    >
      <ToastContainer />
      <div className=" flex justify-center md:h-screen items-center gap-5 w-full max-md:flex-col max-md:items-start max-md:gap-5 max-md:w-full px-16">
        <ProductImg
          product={product}
          setInitial={setInitial}
          initial={initial}
        />
        <ProductInfo
          product={product}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          quantity={quantity}
          setQuantity={setQuantity}
          like={like}
          setLike={setLike}
          chosenColor={chosenColor}
          setChosenColor={setChosenColor}
          animate={animate}
          setAnimate={setAnimate}
          addedToCart={addedToCart}
          setAddedToCart={setAddedToCart}
        />
      </div>
      <div className="related-products w-full mt-10 ">
        <h2 className="text-3xl max-md:text-2xl max-sm:text-xl font-semibold font-second text-gray-800 mb-5 text-center">
          Related Products
        </h2>
        <Products
          products={products
            .filter(
              (relatedProduct) =>
                relatedProduct.category === product.category &&
                relatedProduct._id !== product._id &&
                relatedProduct.subCategory === product.subCategory
            )
            .slice(0, 5)}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
