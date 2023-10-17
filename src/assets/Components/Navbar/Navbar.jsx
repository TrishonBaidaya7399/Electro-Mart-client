// import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import logo from "../../images/logo/logo3.png"
const Navbar = () => {
  const NavLinks = 
  <>
  <NavLink to="/"><li className="lg:pr-8 text-lg font-semibold hover:font-bold duration-200">Home</li></NavLink>
  <NavLink to="/addproduct"><li className="lg:pr-8 text-lg font-semibold hover:font-bold duration-200">Add Product</li></NavLink>
  <NavLink to="/login"><li className="text-lg font-semibold hover:font-bold duration-200">Login</li></NavLink>
  </>
    return (
<div className="navbar bg-gray-200">
    <div className="navbar-start">
        <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {NavLinks}
            </ul>
          </div>
          <img className="w-[200px]" src={logo} alt="" />
          {/* <a className="btn btn-ghost normal-case text-xl">EctroMart</a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {NavLinks}
          </ul>
        </div>
    <div className="navbar-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div className="dropdown dropdown-end flex items-center">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full border-2 border-blue-700">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-[160px] z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge bg-gray-400 py-1 text-white">Logged In</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
</div>
    );
};

Navbar.propTypes = {
    
};

export default Navbar;