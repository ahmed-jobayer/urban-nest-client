import { Link } from "react-router-dom";

const UserDropdown = () => {
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button">
        <div className="avatar">
          <div className=" w-10 rounded-xl ">
            {/* <img src={`${user?.photoURL || "/user.png"}`} /> */}
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="Tailwind-CSS-Avatar-component"
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
        <li className=" btn btn-outline bg-[#5E5449] hover:bg-[#4A3137] btn-sm text-white">
          <button >Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
