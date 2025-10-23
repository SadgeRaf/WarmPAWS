import React from 'react';
import { Link } from 'react-router';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-sm p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome Back 👋
        </h2>

        <fieldset className="space-y-4">
          <div>
            <label className="label text-gray-600">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="label text-gray-600">Password</label>
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-between items-center">
            <a href="#" className="text-blue-500 text-sm hover:underline">
              Forgot Password?
            </a>
          </div>

          <button className="btn btn-neutral w-full mt-2">Login</button>
        </fieldset>

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
