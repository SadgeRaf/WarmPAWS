import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Profile = () => {
    const {user} = use(AuthContext);
    console.log(user);
    return (
        <div className='w-11/12 mx-auto'>
            
            <h1>Hello, {user.displayName}</h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className='font-bold'>Your Email: <span className='font-medium'>{user.email}</span></h1>
        </div>
    );
};

export default Profile;