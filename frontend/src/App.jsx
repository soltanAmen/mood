import { Routes, Route } from "react-router-dom";
import { SideBarContextProvider } from "./context/SideBarContext";
import Layout from "./pages/Layout";
import {
  Home,
  About,
  Contact,
  NotFound,
  SingleProduct,
  Login,
  Register,
} from "./pages";
const App = () => {
  return (
    <SideBarContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </SideBarContextProvider>
  );
};

export default App;
