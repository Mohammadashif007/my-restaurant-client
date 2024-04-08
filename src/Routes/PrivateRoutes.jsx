import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";
import {useNavigate, Navigate} from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    // const navigate = useNavigate()

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>;
    }

    if(user){
        return children;
    }

    return <Navigate to='/login'></Navigate>;
    // return navigate("/login");
};

export default PrivateRoutes;