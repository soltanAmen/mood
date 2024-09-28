import { useContext, useEffect, useState } from "react";
import { products } from "../assets/images/assets";
import { FilterContext } from "../context/FilterContext";
import { Filters, Banner, Products } from "../components";
import { faCaretDown, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Shop = () => {
  const {
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
  } = useContext(FilterContext);

  const [product, setProduct] = useState([]);
  const [sortOption, setSortOption] = useState(0);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    const filterProducts = () => {
      const filtered = products
        .filter((product) =>
          filterCategories.length === 0
            ? product
            : filterCategories.includes(product.category)
        )
        .filter((product) =>
          filterSubCategories.length === 0
            ? product
            : filterSubCategories.includes(product.subCategory)
        )
        .filter((product) =>
          filterSize.length === 0
            ? product
            : filterSize
                .map((size) => product.sizes.includes(size))
                .includes(true)
        )
        .filter((product) => product.price <= filterPrice)
        .slice(0, 14);

      switch (sortOption) {
        case "1":
          return filtered.sort((a, b) => a.price - b.price);
        case "2":
          return filtered.sort((a, b) => b.price - a.price);
        case "3":
          return filtered.sort(
            (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
          );
        default:
          return filtered;
      }
    };

    setProduct(filterProducts());
  }, [
    filterCategories,
    filterSubCategories,
    filerColor,
    filterPrice,
    filterSize,
    sortOption, // Add sortOption to dependencies
  ]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Banner img={"bg-about"} title={"Shop"} />

      <div className="shop flex items-start justify-center w-full max-sm:flex-col gap-10 mt-10 px-10">
        <div className="max-md:hidden w-1/4">
          <Filters
            filterPrice={filterPrice}
            setFilterPrice={setFilterPrice}
            filterCategories={filterCategories}
            setFilerCategories={setFilerCategories}
            filterSubCategories={filterSubCategories}
            setFilerSubCategories={setFilerSubCategories}
            filterSize={filterSize}
            setFilterSize={setFilterSize}
            filerColor={filerColor}
            setFilterColor={setFilterColor}
          />
        </div>

        <div className="products flex flex-wrap items-center justify-center gap-10 w-3/4 max-md:w-full">
          {product.length > 0 ? (
            <div>
              <div className="dropdown-filter flex items-center ml-10 z-50">
                <div className="dropdown flex items-center justify-between gap-5 flex-wrap">
                  <button
                    onClick={() => setShowFilter(!showFilter)}
                    className="border text-black p-2 rounded-md w-32 hidden max-md:block"
                  >
                    Filter
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className={
                        showFilter
                          ? "transform rotate-180 ml-2 transition-all duration-300"
                          : "transform rotate-0 ml-2 transition-all duration-300"
                      }
                    />
                  </button>
                  <select
                    name="sort"
                    id="sort"
                    className="border text-black p-2 rounded-md "
                    onChange={(e) => setSortOption(e.target.value)}
                    value={sortOption}
                  >
                    <option value={0}>Sort By</option>
                    <option value={1}>Price: Low to High</option>
                    <option value={2}>Price: High to Low</option>
                    <option value={3}>Newest</option>
                  </select>
                </div>
              </div>
              <div
                className={`${
                  showFilter ? "block" : "hidden"
                }  w-full p-5 shadow-sm shadow-gray-400 rounded-md mt-5`}
              >
                <button
                  onClick={() => {
                    setFilerCategories([]);
                    setFilerSubCategories([]);
                    setFilterPrice(300);
                    setFilterSize([]);
                    setFilterColor([]);
                  }}
                  className="border text-black ml-5 p-2 rounded-md
                  float-right
                  "
                >
                  Clear All
                  <FontAwesomeIcon
                    icon={faClose}
                    className="transform rotate-180 ml-2"
                  />
                </button>
                <Filters
                  filterPrice={filterPrice}
                  setFilterPrice={setFilterPrice}
                  filterCategories={filterCategories}
                  setFilerCategories={setFilerCategories}
                  filterSubCategories={filterSubCategories}
                  setFilerSubCategories={setFilerSubCategories}
                  filterSize={filterSize}
                  setFilterSize={setFilterSize}
                  filerColor={filerColor}
                  setFilterColor={setFilterColor}
                  showFilter={showFilter}
                />
              </div>
              <Products products={product} shop={true} />
            </div>
          ) : (
            <div className="flex justify-center items-center w-full h-1/2">
              <h1 className="text-3xl font-third text-gray-800">
                No Product Found
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
