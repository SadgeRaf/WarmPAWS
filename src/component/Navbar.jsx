import { Link, NavLink} from "react-router";
import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from 'react-toastify';
import drawing from "../assets/videos/123860717_p0_master1200.jpg"

const Navbar = () => {
    const {user,logOut} = use(AuthContext);
    const list = (
        <>
            <NavLink to="/"><li className="text-accent mr-2">Home</li></NavLink>
            <NavLink to="/profile"><li className="text-accent mr-2">My Profile</li></NavLink>
            <NavLink to="/services"><li className="text-accent">Services</li></NavLink>
        </>
    );
    const handleLogOut = () => {
        logOut().then(()=>{
          toast.success("Logged out Succesfully!")
        }).catch((error)=>{
          toast.error(error.message);
        });
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                      <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>  
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
                    >
                        {list}
                    </ul>
                </div>

                <a className="btn btn-ghost text-xl text-base-200">WarmPAWS</a>
            </div>

            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {list}
                </ul>
            </div>

            <div className="navbar-end">
                <img className="w-12 rounded-full" src={`${user ? user.photoURL : drawing }`}></img>
                {
                    user ? <button onClick={handleLogOut} className="btn bg-secondary text-primary">Log Out</button> : <Link to='/auth/login' className="btn bg-secondary text-primary">Log In</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;
