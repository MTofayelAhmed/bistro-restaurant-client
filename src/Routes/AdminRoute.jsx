
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({children}) => {
  let location = useLocation();



  const {user, loading}= useAuth()
  const [isAdmin, isAdminLoading]= useAdmin()
  if(loading || isAdminLoading){
    return <progress className="progress progress-success w-56" value="70" max="100"></progress>
  }
  if(user && isAdmin){
    return children
  }
  return <Navigate to='/login' state={{from: location}} replace> </Navigate>
};

export default AdminRoute;