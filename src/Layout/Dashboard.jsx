import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaHome, FaCalendarAlt , FaWallet} from 'react-icons/fa';
import { Helmet } from "react-helmet-async";


const Dashboard = () => {
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
     
        <li><NavLink to='/dashboard/home'><FaHome></FaHome>User Home</NavLink></li>
        <li><NavLink to='/dashboard/myCart'><FaShoppingCart></FaShoppingCart> MyCart</NavLink></li>
        <li><NavLink to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
        <li><NavLink to='/payment'><FaWallet></FaWallet> Payment</NavLink> </li>
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