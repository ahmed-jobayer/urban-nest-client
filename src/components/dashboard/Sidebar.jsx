import { BiLogOut } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { GrCart, GrOverview } from "react-icons/gr";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { MdManageAccounts, MdOutlineInventory2 } from "react-icons/md";
import { NavLink } from "react-router-dom";

const userRoutes = [
  {
    id: 1,
    title: "Wishlist",
    route: "/dashboard/wishlist",
    icon: <FiHeart className="text-xl" />,
  },
  {
    id: 1,
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
    id: 1,
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
  //   const userData = useUserData();
  //   const { LogOut } = useAuth();
  const userData = {role: 'seller'}
  const userDataA = {role: 'admin'}

  return (
    <div className="bg-[#4A3137] border-r-2 border-black min-h-screen px-8 py-16 text-white">
      <h1 className="text-3xl  font-bold mb-8">
        <span className="font-bold">Urban</span>Nest
      </h1>
      <ul className="flex flex-col gap-4 h-full ">
        <li className="btn btn-outline btn-sm bg-[#5E5449] text-white border-none">
          <IoHomeOutline className="text-xl" />
          <NavLink to="/"> Home</NavLink>
        </li>
        <li className="btn btn-outline btn-sm bg-[#5E5449] text-white border-none">
          <GrOverview className="text-xl" />
          <NavLink to="/dashboard/overview">Overview</NavLink>
        </li>
        {userData.role === "seller" &&
          userRoutes.map((route) => (
            <li key={route.id} className="btn btn-outline btn-sm bg-[#5E5449] text-white border-none">
              {route.icon}
              <NavLink to={route.route}> {route.title}</NavLink>
            </li>
          ))}
        {userData.role === "seller" &&
          sellerRoutes.map((route) => (
            <li key={route.id} className="btn btn-outline btn-sm bg-[#5E5449] text-white border-none">
              {route.icon}
              <NavLink to={route.route}> {route.title}</NavLink>
            </li>
          ))}
        {userDataA.role === "admin" &&
          adminRoutes.map((route) => (
            <li key={route.id} className="btn btn-outline btn-sm bg-[#5E5449] text-white border-none">
              {route.icon}
              <NavLink to={route.route}> {route.title}</NavLink>
            </li>
          ))}

        <li className="btn btn-outline btn-sm bg-[#5E5449] text-white border-none" onClick={() => LogOut()}>
          <BiLogOut className="text-xl" />
          <button>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
