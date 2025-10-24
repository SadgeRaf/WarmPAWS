import React from 'react';
import dog from '../assets/videos/istockphoto-509119713-612x612.jpg'
const Error = () => {
    return (
        <div className='w-11/12 mx-auto flex flex-col items-center'>
            <h1>Error404</h1>
            <img src={dog}></img>
            <h1></h1>
        </div>
    );
};

export default Error;