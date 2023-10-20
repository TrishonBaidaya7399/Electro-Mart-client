// import PropTypes from 'prop-types';
import { useContext } from "react";
// import backgroundImage01 from "../../assets/images/more/11.png"
// import userPic from "../../assets/images/more/user.png"

// import Swal from "sweetalert2";
import { BsArrowLeft } from 'react-icons/bs';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
    const {signInUser, } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    const bgStyle = {
        // backgroundImage: `url(${backgroundImage01})`,
        backGroundSize: 'cover'
    }

    const handleSignIn = e =>{
        e.preventDefault();
        console.log('sign in button clicked!');
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
        .then(result =>{
            console.log(result);
            navigate(location?.state ? location.state : '/')
            if(result){
                Swal.fire({
                    title: 'Success!',
                    text: 'New User added successfully!',
                    icon : 'success',
                    confirmButtonText: 'Close'
                  })
                  form.reset();
            }
        })
        .catch(error=> {
            console.error(error.message);
        })
       

    }
    return (
        <div style={bgStyle} className=" py-[70px]">
            <NavLink className={"flex gap-2 items-center mx-[150px] text-[30px] font-bold"} to="/"><BsArrowLeft/>Back to home</NavLink>
           <div className="bg-gray-200 w-[80%] mx-auto mt-[50px] py-[70px]">
            <h1 className="text-center text-[45px] text-[#374151]">Please Sign In</h1>
            {/* <p className="py-8 mx-auto text-center text-[18px] w-[80%] text-gray-400">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p> */}
            <form onSubmit={handleSignIn} className="w-[80%] mx-auto">
                <div className="mt-6">
                    <h1 className="text-gray-600 text-xl font-semibold">Email</h1>
                    <input type="email" name="email" id="email" required placeholder="Enter Your Email" className="w-full bg-white border-2 border-white hover:border-gray-300 mt-4 p-3 rw-full bg-white border-2 border-white hover:border-[#331A15] mt-4 p-3 rounded-md duration-200 rounded-md duration-200"  />
                </div>
                <div className="mt-6">
                    <h1 className="text-gray-600 text-xl font-semibold">Password</h1>
                    <input type="password" name="password" id="password" required placeholder="Enter Your Password" className="w-full bg-white border-2 border-white hover:border-gray-300 mt-4 p-3 rw-full bg-white border-2 border-white hover:border-[#331A15] mt-4 p-3 rounded-md duration-200 rounded-md duration-200"  />
                </div>
                <input type="submit" value="Sign In" className="w-full mt-6 bg-[#D2B48C] border-2 border-[#331A15] rounded-md py-4 text-center text-[#331A15] font-bold" />
                <NavLink to="/signup"><p className="text-red-600">{`Don't have an Account? Please Register`}</p></NavLink>
            </form>

           </div>
           
        </div>
    );
};

SignIn.propTypes = {
    
};

export default SignIn;