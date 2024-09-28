import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const Filters = ({
  filterPrice,
  setFilterPrice,
  filterCategories,
  setFilerCategories,
  filterSubCategories,
  setFilerSubCategories,
  filterSize,
  setFilterSize,
  filerColor,
  setFilterColor,
  showFilter,
}) => {
  const handilSubChange = (e) => {
    const { name } = e.target;
    filterSubCategories.includes(name)
      ? setFilerSubCategories(
          filterSubCategories.filter((categorie) => categorie !== name)
        )
      : setFilerSubCategories([...filterSubCategories, name]);
  };
  const handilChange = (e) => {
    const { name } = e.target;
    filterCategories.includes(name)
      ? setFilerCategories(
          filterCategories.filter((categorie) => categorie !== name)
        )
      : setFilerCategories([...filterCategories, name]);
  };
  return (
    <div className="categories flex flex-col justify-center items-start w-full  ">
      <h1
        className="text-3xl

      max-md:text-2xl
      max-sm:text-xl
        font-third text-gray-800"
      >
        Categories
      </h1>
      <ul className="my-5 ml-5">
        <li className="text-gray-800 text-lg font-third">
          <input
            {...(filterCategories.includes("Men") && { checked: true })}
            type="checkbox"
            className="mr-2"
            onChange={handilChange}
            name="Men"
          />
          Men
        </li>
        <li className="text-gray-800 text-lg font-third">
          <input
            {...(filterCategories.includes("Women") && { checked: true })}
            type="checkbox"
            className="mr-2"
            onChange={handilChange}
            name="Women"
          />
          Women
        </li>
        <li className="text-gray-800 text-lg font-third">
          <input
            {...(filterCategories.includes("Kids") && { checked: true })}
            type="checkbox"
            className="mr-2"
            onChange={handilChange}
            name="Kids"
          />
          Kids
        </li>
      </ul>
      <h1
        className="text-3xl

      max-md:text-2xl
      max-sm:text-xl
        font-third text-gray-800"
      >
        Subcategory
      </h1>
      <ul className="my-5 ml-5">
        <li className="text-gray-800 text-lg font-third">
          <input
            {...(filterSubCategories.includes("Topwear") && {
              checked: true,
            })}
            type="checkbox"
            className="mr-2"
            onChange={handilSubChange}
            name="Topwear"
          />
          Topwear
        </li>
        <li className="text-gray-800 text-lg font-third">
          <input
            {...(filterSubCategories.includes("Boottomwear") && {
              checked: true,
            })}
            type="checkbox"
            className="mr-2"
            onChange={handilSubChange}
            name="Bottomwear"
          />
          Bottomwear
        </li>
        <li className="text-gray-800 text-lg font-third">
          <input
            {...(filterSubCategories.includes("Winterwear") && {
              checked: true,
            })}
            type="checkbox"
            className="mr-2"
            onChange={handilSubChange}
            name="Winterwear"
          />
          Winterwear
        </li>
      </ul>
      <h1
        className="text-3xl

      max-md:text-2xl
      max-sm:text-xl
        font-third text-gray-800"
      >
        Size
      </h1>
      <div
        className={
          showFilter
            ? "grid grid-cols-5 gap-2 my-5 ml-5  max-md:gap-1"
            : "grid grid-cols-5 gap-2 my-5 ml-5 max-md:grid-cols-2 max-lg:grid-cols-3 max-md:gap-1"
        }
      >
        <label
          className={`${
            filterSize.includes("S") ? "border-accent" : " border-gray-300"
          } w-8 h-8  border bg-gray-200 text-black cursor-pointer flex justify-center items-center rounded-sm`}
        >
          <input
            type="checkbox"
            className="hidden"
            onChange={() => {
              filterSize.includes("S")
                ? setFilterSize(filterSize.filter((size) => size !== "S"))
                : setFilterSize([...filterSize, "S"]);
            }}
          />
          S
        </label>
        <label
          className={`${
            filterSize.includes("M") ? "border-accent" : " border-gray-300"
          } w-8 h-8  border bg-gray-200 text-black cursor-pointer flex justify-center items-center rounded-sm`}
        >
          <input
            type="checkbox"
            className="hidden"
            onChange={() => {
              filterSize.includes("M")
                ? setFilterSize(filterSize.filter((size) => size !== "M"))
                : setFilterSize([...filterSize, "M"]);
            }}
          />
          M
        </label>
        <label
          className={`${
            filterSize.includes("L") ? "border-accent" : " border-gray-300"
          } w-8 h-8  border bg-gray-200 text-black cursor-pointer flex justify-center items-center rounded-sm`}
        >
          <input
            type="checkbox"
            className="hidden"
            onChange={() => {
              filterSize.includes("L")
                ? setFilterSize(filterSize.filter((size) => size !== "L"))
                : setFilterSize([...filterSize, "L"]);
            }}
          />
          L
        </label>
        <label
          className={`${
            filterSize.includes("XL") ? "border-accent" : " border-gray-300"
          } w-8 h-8  border bg-gray-200 text-black cursor-pointer flex justify-center items-center rounded-sm`}
        >
          <input
            type="checkbox"
            className="hidden"
            onChange={() => {
              filterSize.includes("XL")
                ? setFilterSize(filterSize.filter((size) => size !== "XL"))
                : setFilterSize([...filterSize, "XL"]);
            }}
          />
          XL
        </label>

        <label
          className={`${
            filterSize.includes("XXL") ? "border-accent" : " border-gray-300"
          } w-8 h-8  border bg-gray-200 text-black cursor-pointer flex justify-center items-center rounded-sm`}
        >
          <input
            type="checkbox"
            className="hidden"
            onChange={() => {
              filterSize.includes("XXL")
                ? setFilterSize(filterSize.filter((size) => size !== "XXL"))
                : setFilterSize([...filterSize, "XXL"]);
            }}
          />
          XXL
        </label>
      </div>
      <h1
        className="text-3xl

      max-md:text-2xl
      max-sm:text-xl
        font-third text-gray-800"
      >
        Colors
      </h1>
      <div
        className={
          showFilter
            ? "grid grid-cols-5 gap-2 my-5 ml-5  max-md:gap-1"
            : "grid grid-cols-5 gap-2 my-5 ml-5 max-md:grid-cols-2 max-lg:grid-cols-3 max-md:gap-1"
        }
      >
        <label className="w-8 h-8 bg-black cursor-pointer flex justify-center items-center rounded-sm">
          <input
            type="checkbox"
            className="hidden"
            onChange={() => {
              filerColor.includes("black")
                ? setFilterColor(
                    filerColor.filter((color) => color !== "black")
                  )
                : setFilterColor([...filerColor, "black"]);
            }}
          />
          <FontAwesomeIcon
            icon={faCheck}
            className={
              filerColor.includes("black") ? "text-white" : "text-black"
            }
          />
        </label>
        <label className="w-8 h-8 bg-white-500 border cursor-pointer flex justify-center items-center rounded-sm">
          <input
            type="checkbox"
            className="hidden"
            onChange={() => {
              filerColor.includes("white")
                ? setFilterColor(
                    filerColor.filter((color) => color !== "white")
                  )
                : setFilterColor([...filerColor, "white"]);
            }}
          />
          <FontAwesomeIcon
            icon={faCheck}
            className={
              filerColor.includes("white") ? "text-black" : "text-white"
            }
          />
        </label>
        <label className="w-8 h-8 bg-red-500 cursor-pointer flex justify-center items-center rounded-sm">
          <input
            type="checkbox"
            className="hidden"
            onChange={() => {
              filerColor.includes("red")
                ? setFilterColor(filerColor.filter((color) => color !== "red"))
                : setFilterColor([...filerColor, "red"]);
            }}
          />
          <FontAwesomeIcon
            icon={faCheck}
            className={
              filerColor.includes("red") ? "text-white" : "text-transparent"
            }
          />
        </label>
        <label className="w-8 h-8 bg-gray-500 cursor-pointer flex justify-center items-center rounded-sm">
          <input
            type="checkbox"
            className="hidden"
            onChange={() => {
              filerColor.includes("gray")
                ? setFilterColor(filerColor.filter((color) => color !== "gray"))
                : setFilterColor([...filerColor, "gray"]);
            }}
          />
          <FontAwesomeIcon
            icon={faCheck}
            className={
              filerColor.includes("gray") ? "text-white" : "text-transparent"
            }
          />
        </label>
        <label className="w-8 h-8 bg-blue-500 cursor-pointer flex justify-center items-center rounded-sm">
          <input
            type="checkbox"
            className="hidden"
            onChange={() => {
              filerColor.includes("blue")
                ? setFilterColor(filerColor.filter((color) => color !== "blue"))
                : setFilterColor([...filerColor, "blue"]);
            }}
          />
          <FontAwesomeIcon
            icon={faCheck}
            className={
              filerColor.includes("blue") ? "text-white" : "text-transparent"
            }
          />
        </label>
        <label className="w-8 h-8 bg-green-500 cursor-pointer flex justify-center items-center rounded-sm">
          <input
            type="checkbox"
            className="hidden"
            onChange={() => {
              filerColor.includes("green")
                ? setFilterColor(
                    filerColor.filter((color) => color !== "green")
                  )
                : setFilterColor([...filerColor, "green"]);
            }}
          />
          <FontAwesomeIcon
            icon={faCheck}
            className={
              filerColor.includes("green") ? "text-white" : "text-transparent"
            }
          />
        </label>
        <label className="w-8 h-8 bg-yellow-500 cursor-pointer flex justify-center items-center rounded-sm">
          <input
            type="checkbox"
            className="hidden"
            onChange={() => {
              filerColor.includes("yellow")
                ? setFilterColor(
                    filerColor.filter((color) => color !== "yellow")
                  )
                : setFilterColor([...filerColor, "yellow"]);
            }}
          />
          <FontAwesomeIcon
            icon={faCheck}
            className={
              filerColor.includes("yellow") ? "text-white" : "text-transparent"
            }
          />
        </label>
        <label className="w-8 h-8 bg-purple-500 cursor-pointer flex justify-center items-center rounded-sm">
          <input
            type="checkbox"
            className="hidden"
            onChange={() => {
              filerColor.includes("purple")
                ? setFilterColor(
                    filerColor.filter((color) => color !== "purple")
                  )
                : setFilterColor([...filerColor, "purple"]);
            }}
          />
          <FontAwesomeIcon
            icon={faCheck}
            className={
              filerColor.includes("purple") ? "text-white" : "text-transparent"
            }
          />
        </label>
        <label className="w-8 h-8 bg-pink-500 cursor-pointer flex justify-center items-center rounded-sm">
          <input
            type="checkbox"
            className="hidden"
            onChange={() => {
              filerColor.includes("pink")
                ? setFilterColor(filerColor.filter((color) => color !== "pink"))
                : setFilterColor([...filerColor, "pink"]);
            }}
          />
          <FontAwesomeIcon
            icon={faCheck}
            className={
              filerColor.includes("pink") ? "text-white" : "text-transparent"
            }
          />
        </label>
      </div>
      <h1
        className="text-3xl

      max-md:text-2xl
      max-sm:text-xl
        font-third text-gray-800"
      >
        Price
      </h1>
      <div className="flex flex-col justify-center items-start my-5">
        <input
          value={filterPrice}
          type="range"
          min="100"
          max="300"
          className="w-full  bg-gray-300 h-2 rounded-full appearance-none cursor-pointer mt-5 overflow-hidden outline-none"
          name="price"
          onChange={(e) => setFilterPrice(e.target.value)}
        />
        <div className="flex justify-between w-full">
          <span className="text-gray-800 text-lg font-third">$100</span>
          <span className="text-gray-800 text-lg font-third">$300</span>
        </div>
      </div>
    </div>
  );
};

export default Filters;
