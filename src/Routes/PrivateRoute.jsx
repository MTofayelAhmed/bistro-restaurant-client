import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
  let location = useLocation();



  const {user, loading}= useContext(AuthContext)
  if(loading){
    return <progress className="progress progress-success w-56" value="70" max="100"></progress>
  }
  if(user){
    return children
  }
  return <Navigate to='/login' state={{from: location}} replace> </Navigate>
};

export default PrivateRoute;