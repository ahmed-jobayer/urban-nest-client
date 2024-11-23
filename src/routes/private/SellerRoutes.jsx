import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useUserData from "../../hooks/useUserData";
import Loader from "../../pages/Loader";

const SellerRoutes = ({children}) => {

    const {user, loading} = useAuth()
    const userData = useUserData()
    const location = useLocation()

    if (loading || !userData.role) {
        return <Loader/>
    }

if (user && userData.role === "seller") {
    return children
}

    return <Navigate to='/login' state={{from: location}}/>
};

export default SellerRoutes;