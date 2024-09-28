import { Link } from "react-router-dom";
const Products = ({ products, shop }) => {
  return (
    <div
      className={
        shop
          ? "grid grid-cols-1 md:grid-cols-3  gap-4 p-4 font-third"
          : "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  gap-4 p-4 font-third"
      }
    >
      {products.map((product, index) => (
        <Link
          to={`/product/${product._id}`}
          key={index}
          className=" flex flex-col justify-center items-start bg-white p-4 rounded-md cursor-pointer"
        >
          <div className="w-full  overflow-hidden">
            {Products.discount && (
              <span
                className={
                  index % 2 === 0
                    ? "text-white bg-accent mt-3  font-second   ml-2 px-3 py-1 rounded-md absolute z-50"
                    : "hidden"
                }
              >
                {Products.discount}
              </span>
            )}

            <img
              src={product.image[0]}
              alt={product.title}
              className="hover:scale-105 transition-all duration-200 ease-in-out w-full"
            />
          </div>
          <div className="   flex   flex-col   justify-center   items-start   w-full   mt-2   overflow-hidden   max-lg:text-lg   text-sm ">
            <h3
              className="  text-gray-800 line-clamp-1 text-lg max-md:text-xl
            

            "
            >
              {product.name}
            </h3>
            <p
              className=" text-gray-800 flex flex-row w-full items-center justify-between
            text-lg max-md:text-xl"
            >
              $ {product.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
