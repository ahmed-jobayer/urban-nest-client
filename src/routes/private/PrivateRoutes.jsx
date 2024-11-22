import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Loader from "../../pages/Loader";


const PrivateRoutes = ({children}) => {

    const {user, loading} = useAuth()
    const loaction = useLocation()

    if (loading) {
        return <Loader/>
    }

    if (user) {
        return children
    }

    return <Navigate to='/login' state={{from: loaction}}/>
};

export default PrivateRoutes;