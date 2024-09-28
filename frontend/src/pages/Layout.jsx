import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";
const Layout = () => {
  return (
    <div>
      <Header />

      <main style={{ marginTop: "40px" }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
