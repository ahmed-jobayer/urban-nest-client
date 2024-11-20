import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <h1 className="flx">home</h1>
            <Outlet/>
        </div>
    );
};

export default MainLayout;