import { Routes, Route } from "react-router-dom";
import { SideBarContextProvider } from "./context/SideBarContext";
import { UserContextProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";
import { FilterContextProvider } from "./context/FilterContext";
import { SearchProvider } from "./context/SearchContext";
import Layout from "./pages/Layout";
import axios from "axios";
import {
  Home,
  About,
  Contact,
  NotFound,
  SingleProduct,
  Login,
  Register,
  Cart,
  Shop,
  Checkout,
} from "./pages";
const App = () => {
  axios.defaults.baseURL = "http://localhost:3000";

  return (
    <SearchProvider>
      <CartProvider>
        <FilterContextProvider>
          <UserContextProvider>
            <SideBarContextProvider>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/product/:id" element={<SingleProduct />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/Cart" element={<Cart />} />
                  <Route path="/Checkout" element={<Checkout />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </SideBarContextProvider>
          </UserContextProvider>
        </FilterContextProvider>
      </CartProvider>
    </SearchProvider>
  );
};

export default App;
