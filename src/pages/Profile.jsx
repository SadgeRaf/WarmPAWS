import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import drawing from "../assets/videos/123860717_p0_master1200.jpg"

const Profile = () => {
    const {user, setUser, updateUser} = use(AuthContext);
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.name.value;
       updateUser({displayName : name, photoURL: photo}).then(()=>{
                  setUser({...user, displayName : name, photoURL: photo});
                  toast.success("Profile updated successfully!");
                  form.reset();
               }).catch((error)=>{
                  toast.error(error.message);
               });
    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
                <img
                    src={user?.photoURL || drawing}
                    alt="Profile"
                    className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-secondary shadow-sm"
                />

                <h1 className="text-2xl font-semibold text-gray-800">
                    Hello, <span className="text-secondary">{user?.displayName || 'User'}</span>
                </h1>
                <p className="text-gray-500 mt-2">Email: {user?.email}</p>

                <hr className="my-6 border-gray-200" />

                <form onSubmit={handleUpdate} className="space-y-4 text-left">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Your updated name"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
                        <input
                            name="photo"
                            type="text"
                            placeholder="Your updated photo URL"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-base-200 text-primary py-2 rounded-lg font-semibold hover:bg-secondary transition-all">
                        Update Profile
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Profile;