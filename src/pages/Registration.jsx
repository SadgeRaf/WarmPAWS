import React from 'react';
import { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider'
import { toast } from 'react-toastify';

const Register = () => {
  const {createUser,setUser} = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    createUser(email,password)
     .then((res)=>{
       const user = res.user;
       setUser(user);
       toast.success('✅ Account registered successfully!');
       form.reset();
     }).catch((error)=> {
       const errorMessage = error.message;
       toast.error(errorMessage);
     })
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-sm p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create an Account 🐾
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="label text-gray-600">Full Name</label>
            <input name='name' type="text" className="input input-bordered w-full" placeholder="Your name" required/>
          </div>

          <div>
            <label className="label text-gray-600">Email</label>
            <input name='email' type="email" className="input input-bordered w-full" placeholder="Your email" required/>
          </div>

          <div>
            <label className="label text-gray-600">Photo URL</label>
            <input name='photo' type="text" className="input input-bordered w-full" placeholder="Profile picture link" required/>
          </div>

          <div>
            <label className="label text-gray-600">Password</label>
            <input name='password' type="password" className="input input-bordered w-full" placeholder="Create a password" required/>
          </div>

          <button type='submit' className="btn btn-neutral w-full mt-2">Register</button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{' '}
          <Link to='/auth/login' className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
