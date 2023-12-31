import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo/logo3.png";
import "./Navbar.css"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const [cartItemCount, setCartItemCount] = useState(0);
  console.log(user?.photoURL);
  const handleSignOut=()=>{
    logOut()
    .then(console.log("Logged out!"))
    .catch(error=>{
    console.error(error.message);  
    })
  }
  useEffect(() => {
    // Fetch cart items from the server and count the items for the current user
    //https://electro-mart-server-7dzz1fbbh-trishon-baidayas-projects.vercel.app/
    if (user) {
      fetch('https://electro-mart-server-ten.vercel.app/cartitems') // Update the URL to match your server endpoint
        .then((response) => response.json())
        .then((cartItems) => {
          const userCartItems = cartItems.filter((item) => item.userId === user._id);
          setCartItemCount(userCartItems.length);
        })
        .catch((error) => {
          console.error("Error fetching cart items:", error);
        });
    }
  }, [user]);

  return (
    <div className="navbar bg-gray-200 lg:px-[100px]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-200 rounded-box w-[150px]">
             <div className="flex flex-col gap-2">
    
    <NavLink to="/" className={({ isActive }) =>isActive ? " text-lg font-semibold font-bold duration-200 bg-[transparent] text-blue-700 font-bold" : " text-lg font-semibold font-bold duration-200" }>
    <li className=" text-lg font-semibold hover:font-bold duration-200">Home</li>
    </NavLink>
  
    <NavLink to="/addproduct" className={({ isActive }) =>isActive ? " text-lg font-semibold font-bold duration-200 bg-[transparent] text-blue-700 font-bold" : " text-lg font-semibold font-bold duration-200" }>
    <li className=" text-lg font-semibold hover:font-bold duration-200">Add Products</li>
    </NavLink>

    {
      user 
      ?  ''
      :  <NavLink to="/signin" className={({ isActive }) =>isActive ? " text-lg font-semibold font-bold duration-200 bg-[transparent] text-blue-700 font-bold" : " text-lg font-semibold font-bold duration-200" }>
      <li className=" text-lg font-semibold hover:font-bold duration-200">Sign In</li>
      </NavLink>
    }
   
  </div>
          </ul>
        </div>
        <img className="w-[200px]" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
           <div className="flex gap-8">
    
    <NavLink to="/" className={({ isActive }) =>isActive ? " text-lg font-semibold font-bold duration-200 bg-[transparent] text-blue-700 font-bold" : " text-lg font-semibold font-bold duration-200" }>
    <li className=" text-lg font-semibold hover:font-bold duration-200">Home</li>
    </NavLink>
  
    <NavLink to="/addproduct" className={({ isActive }) =>isActive ? " text-lg font-semibold font-bold duration-200 bg-[transparent] text-blue-700 font-bold" : " text-lg font-semibold font-bold duration-200" }>
    <li className=" text-lg font-semibold hover:font-bold duration-200">Add Product</li>
    </NavLink>
    {
      user 
      ?  ''
      :  <NavLink to="/signin" className={({ isActive }) =>isActive ? " text-lg font-semibold font-bold duration-200 bg-[transparent] text-blue-700 font-bold" : " text-lg font-semibold font-bold duration-200" }>
      <li className=" text-lg font-semibold hover:font-bold duration-200">Sign In</li>
      </NavLink>
    }
   
  </div>
        </ul>
      </div>
      <div className="navbar-end">
      {
        user ?
      <>
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <Link to="/addtocart">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="badge badge-sm indicator-item">{cartItemCount}</span>
            </Link>
          </div>
        </label>
        <div className="dropdown dropdown-end flex items-center">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full border-2 border-blue-700">
              <img src={user.photoURL ? user.photoURL : 'https://i.ibb.co/qnT81gF/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'} />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-[160px] z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                {user?.displayName}
              </a>
            </li>
            <li onClick={handleSignOut}><a>Logout</a></li>
          </ul>
        </div>
      </>
        :
        ''
      }
        
      </div>
    </div>
  );
};


export default Navbar;
