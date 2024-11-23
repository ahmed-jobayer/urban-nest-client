import { BiLogOut } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { GrCart, GrOverview } from "react-icons/gr";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { MdManageAccounts, MdOutlineInventory2 } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useUserData from "../../hooks/useUserData";

const userRoutes = [
  {
    id: 1,
    title: "Wishlist",
    route: "/dashboard/wishlist",
    icon: <FiHeart className="text-xl" />,
  },
  {
    id: 2,
    title: "Cart",
    route: "/dashboard/cart",
    icon: <GrCart className="text-xl" />,
  },
];

const sellerRoutes = [
  {
    id: 1,
    title: "My Products",
    route: "/dashboard/my-products",
    icon: <MdOutlineInventory2 className="text-xl" />,
  },
  {
    id: 2,
    title: "Add Products",
    route: "/dashboard/add-products",
    icon: <IoMdAddCircleOutline className="text-xl" />,
  },
];

const adminRoutes = [
  {
    id: 1,
    title: "Manage Users",
    route: "/dashboard/manage-users",
    icon: <MdManageAccounts className="text-xl" />,
  },
];

const Sidebar = () => {
  const { LogOut } = useAuth();
  const navigate = useNavigate();

  const userData = useUserData()
  console.log(userData)

  const handleLogout = () => {
    LogOut();
    navigate("/login");
  };


 

  return (
    <div className="bg-[#4A3137] border-r-2 border-black min-h-screen px-8 py-16 text-white">
      <h1 className="text-3xl  font-bold mb-8">
        <span className="font-bold">Urban</span>Nest
      </h1>
      <ul className="flex flex-col gap-4 h-full ">
        <NavLink
          to="/"
          className="btn btn-outline bg-[#5E5449] text-white border-none flex items-center"
        >
          <IoHomeOutline className="text-xl" />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/dashboard/overview"
          className="btn btn-outline bg-[#5E5449] text-white border-none flex items-center"
        >
          <GrOverview className="text-xl" />
          <span>Overview</span>
        </NavLink>

        {userData.role === "buyer" &&
          userRoutes.map((route) => (
            <NavLink
              key={route.id}
              to={route.route}
              className="btn btn-outline bg-[#5E5449] text-white border-none flex items-center"
            >
              {route.icon}
              <span>{route.title}</span>
            </NavLink>
          ))}
        {userData.role === "seller" &&
          sellerRoutes.map((route) => (
            <NavLink
              key={route.id}
              to={route.route}
              className="btn btn-outline bg-[#5E5449] text-white border-none flex items-center"
            >
              {route.icon}
              <span>{route.title}</span>
            </NavLink>
          ))}
        {userData.role === "admin" &&
          adminRoutes.map((route) => (
            <NavLink
              key={route.id}
              to={route.route}
              className="btn btn-outline bg-[#5E5449] text-white border-none flex items-center"
            >
              {route.icon}
              <span>{route.title}</span>
            </NavLink>
          ))}

        <li
          className="btn btn-outline  bg-[#5E5449] text-white border-none"
          onClick={handleLogout}
        >
          <BiLogOut className="text-xl" />
          <button>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
