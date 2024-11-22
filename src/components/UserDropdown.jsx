import { LuUserCircle2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const UserDropdown = () => {

  const {user, LogOut} = useAuth()

  const handleLogOut = () => {
    LogOut()
}

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button">
        <div className="avatar">
          <div className=" w-10 rounded-xl ">
            <img
              src={`${user?.photoURL || <LuUserCircle2 />}`}
              alt={user?.displayName}
            />
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow flex flex-col gap-2"
      >
        <li className=" btn btn-outline bg-[#5E5449] hover:bg-[#4A3137] btn-sm text-white">
          <Link to="/dashboard/overview">Dashboard</Link>
        </li>
        <li onClick={handleLogOut} className=" btn btn-outline bg-[#5E5449] hover:bg-[#4A3137] btn-sm text-white">
          <button>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
