import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="bg-[#4A3137] text-white">
        <Navbar />
      </div>
      <div className="min-h-screen ">
        <Outlet />
      </div>
      <div className="bg-[#5E5449]">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
