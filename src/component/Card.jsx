import React from 'react';
import { NavLink, useNavigate } from 'react-router';

const Card = ({ data }) => {
  
  const navigate = useNavigate();

  const handleChange = () => {
    navigate(`/details/${data.serviceId}`);
  }

    return (
    <div className="card w-full h-80 shadow-sm bg-primary flex flex-col">
      <figure className="w-full h-48">
        <img
          src={data.image}
          alt={data.serviceName}
          className="w-full h-full object-cover rounded-t-md"
        />
      </figure>
      <div className="card-body p-3 flex flex-col flex-1">
        <h2 className="card-title text-accent">{data.serviceName}</h2>
        <p className='text-base-200'>{data.description}</p>
        <div className='flex items-center justify-between gap-4'>
          <p className='text-amber-500  bg-amber-100 text-center rounded-3xl'>{data.rating}</p>
          <p className='text-green-500 bg-green-100 text-center rounded-3xl'>{data.price} $</p>
        </div>
        <div className="card-actions justify-center mt-2">
          <button onClick={handleChange} className="btn btn-secondary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;