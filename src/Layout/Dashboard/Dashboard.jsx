import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaHome, FaCalendarAlt , FaWallet, FaUtensils, FaBook, FaUsers} from 'react-icons/fa';
import { Helmet } from "react-helmet-async";
import useCart from "../../Hooks/useCart";
// import useAdmin from "../../Hooks/useAdmin";
// import useAdmin from "../../Hooks/useAdmin";


const Dashboard = () => {
  const [cart]= useCart()
// // TODO: 
  const isAdmin = true;
  // const [isAdmin] = useAdmin()
  return (
    <div className="drawer drawer-mobile">


        <Helmet>
        <title> Bistro Boss | DashBoard</title>
      </Helmet>
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-center">
   <Outlet></Outlet>
      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    
    </div> 
    <div className="drawer-side bg-[#D1A054]">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
      <ul className="menu p-4 w-80 ">
     
       {
        isAdmin ? <>
        
        <li><NavLink to='/dashboard/home'><FaHome></FaHome>Admin Home</NavLink></li>
        <li><NavLink to='/dashboard/addItem'><FaUtensils></FaUtensils> Add an Item</NavLink></li>
        <li><NavLink to='/dashboard/manageItem'><FaWallet></FaWallet> Manage Items </NavLink> </li>
        <li><NavLink to='/payment'><FaBook></FaBook> Manage Booking </NavLink> </li>
        <li><NavLink to='/dashboard/allusers'><FaUsers></FaUsers> All users </NavLink> </li>
        
        </> :  <>
        <li><NavLink to='/dashboard/home'><FaHome></FaHome>User Home</NavLink></li>
        <li><NavLink to='/dashboard/myCart'><FaShoppingCart></FaShoppingCart> MyCart
        
        <div className="badge badge-secondary">+ {cart?.length || 0}</div>
        
        </NavLink></li>
        <li><NavLink to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
        <li><NavLink to='/payment'><FaWallet></FaWallet> Payment</NavLink> </li>
        
        </>
       }
      
      
      {/* DIvider */}
        <div className="divider"></div>




        <li><NavLink to='/'> <FaHome></FaHome>Home</NavLink></li>
        <li> <NavLink to="/menu"> Our Menu</NavLink></li>
        <li><NavLink></NavLink></li>
        <li><NavLink></NavLink></li>
      </ul>
    
    </div>
  </div>
  );
};

export default Dashboard;