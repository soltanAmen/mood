const Banner = ({ img, title }) => {
  return (
    <div
      className={`
      ${img}
      
     bg-cover bg-bottom h-60 mt-0 w-full`}
    >
      <div className=" bg-gray-900 w-full h-full bg-opacity-25 flex justify-center items-center">
        <h1 className="text-5xl font-bold font-first text-white">{title}</h1>
      </div>
    </div>
  );
};

export default Banner;
