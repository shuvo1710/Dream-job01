import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
   <Outlet></Outlet>
   
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 text-base-content">

      {/* {
        users?.role === 'null' && <>
        <li><Link to="/dashboard">My Orders</Link></li>
        </>
      } */}
      {/* {
        isSeller && <>
         <li><Link to="/dashboard/addproduct">My Product</Link></li>
        <li><Link to="/dashboard/addseller">Add Product</Link></li>
        </>
      } */}
      {/* {
        isAdmin && <>
         <li><Link to="/dashboard/allusers">All Buyers</Link></li>
         <li><Link to="/dashboard/allsellers">All Seller</Link></li>
        </>
      } */}
    {/* {
        isSeller? (<>
        <li><Link to="/dashboard/addproduct">My Product</Link></li>
        <li><Link to="/dashboard/addseller">Add Product</Link></li>

        </>):(
          <></>
        )
      } */}
     
     <li><Link to="/dashboard">Dashboard</Link></li>
     <li><Link to="/dashboard/cv">CV Manager</Link></li>
     
      
        
        
      
      
      
     
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;