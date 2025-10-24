import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";

const Login = () => {
  const {logIn,setUser} = use(AuthContext);
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const pattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!pattern.test(password)){
      setPasswordError('Password must be atlest 6 characters long');
      return ;
    }

    setPasswordError('');

    logIn(email,password).then((res)=>{
      setUser(res.user);
      toast.success("Logged in Succesfully");
      form.reset();
    }).catch((error)=>{
      toast.error(error.message);
    })
    
  }

  const handleToggle = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-sm p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="label text-gray-600">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className='relative'>
            <label className="label text-gray-600">Password</label>
            <input
              type={showPassword ? 'text' : "password"}
              className="input input-bordered w-full"
              placeholder="Enter your password"
              required
            />
            <button onClick={handleToggle} className='absolute right-3 top-9'>
              {showPassword ? <IoIosEyeOff /> : <FaEye />}
            </button>

            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          <div className="flex justify-between items-center">
            <a href="#" className="text-blue-500 text-sm hover:underline">
              Forgot Password?
            </a>
          </div>

          <button type='submit' className="btn btn-neutral w-full mt-2">Login</button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{' '}
          <Link to='/auth/registration' className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
