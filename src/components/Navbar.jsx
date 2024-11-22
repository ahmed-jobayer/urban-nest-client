import { Link, NavLink } from "react-router-dom";
import UserDropdown from "./UserDropdown";
import { RiMenu2Fill } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();

  const pages = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">Contuct us</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar container mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <RiMenu2Fill />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {pages}
          </ul>
        </div>
        <Link to="/">
          <h2 className=" text-2xl">
            <span className="font-bold">Urban</span>Nest
          </h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{pages}</ul>
      </div>{" "}
      {/* consitional render according to user is here or not */}
      {user ? (
        <div className="navbar-end gap-2">
          <button className="btn btn-sm bg-[#4A3137] hover:bg-[#5E5449] border-none">
            <LuShoppingCart className="text-white text-2xl" />
            <div className="badge border-none">+99</div>
          </button>
          <UserDropdown />{" "}
        </div>
      ) : (
        <div className="navbar-end">
          <div className="flex gap-2 items-center">
            <NavLink to="login">
              <button className="btn btn-sm text-white bg-[#5E5449] hover:bg-[#4A3137] border-none">
                Login
              </button>
            </NavLink>
            <NavLink to="/register">
              <button className="btn btn-sm text-white bg-[#5E5449] hover:bg-[#4A3137] border-none">
                Register
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
