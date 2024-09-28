const ProductImg = ({ product, setInitial, initial }) => {
  return (
    <div className="images-container md:w-2/4 flex items-center gap-x-5 max-md:items-center max-lg:flex-col-reverse max-md:w-full p-0 h-[80%]">
      <div className="small-images lg:w-1/4 max-lg:mt-5 overflow-hidden  grid grid-cols-1  grid-rows-4  max-lg:grid-cols-4 max-lg:grid-rows-1 gap-5 max-lg:w-full  ">
        {product.image.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={product.name}
            className="md:w-24 mx-auto md:h-full cursor-pointer hover:scale-105 transition-all duration-150 ease-linear"
            onClick={() => setInitial(index)}
          />
        ))}
      </div>
      <div className="w-3/4 overflow-hidden max-lg:w-full h-full">
        <img
          src={product.image[initial]}
          alt={product.name}
          className="w-full md:h-full max-md:w-full object-cover  hover:scale-105 transition-all duration-150 ease-linear cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ProductImg;
