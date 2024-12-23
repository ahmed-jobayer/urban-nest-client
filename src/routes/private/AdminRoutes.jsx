import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useUserData from "../../hooks/useUserData";
import Loader from "../../pages/Loader";

const AdminRoutes = ({children}) => {
    const {user, loading} = useAuth()
    const userData = useUserData()
    const location = useLocation()

    if (loading || !userData.role) {
        return <Loader/>
    }

if (user && userData.role === "admin") {
    return children
}

    return <Navigate to='/login' state={{from: location}}/>
};

export default AdminRoutes;