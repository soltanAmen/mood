import { useState } from "react";
import { createContext } from "react";
export const FilterContext = createContext({});

export const FilterContextProvider = ({ children }) => {
  const [filterPrice, setFilterPrice] = useState(300);
  const [filterCategories, setFilerCategories] = useState([]);
  const [filterSubCategories, setFilerSubCategories] = useState([]);
  const [filterSize, setFilterSize] = useState([]);
  const [filerColor, setFilterColor] = useState([]);

  return (
    <FilterContext.Provider
      value={{
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
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
