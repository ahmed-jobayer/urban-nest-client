import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";

const DashboardLayout = () => {
    return (
        <div className="grid lg:grid-cols-12 gap-8">
            <div className="col-span-2">
                <Sidebar/>
            </div>
            <div className="col-span-10 mt-8">
                <Outlet/>
            </div>
        </div>
    );
};

export default DashboardLayout;