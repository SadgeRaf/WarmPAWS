import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const Details = () => {
    const [detail,setDetail] = useState(null);
    const {id} = useParams();
    const datas = useLoaderData();

    const navigate = useNavigate();

    const handleChange = () => {
      navigate(`/`);
    }

    useEffect(()=>{
        const filteredData = datas.find((data)=>data.serviceId==id);
        setDetail(filteredData);
    },[id,datas])
    
    if (!detail) {
        return (<h1>Wait</h1>);
    }

    return (
        <div className='w-11/12 mx-auto'>
            <div>
                <h1 className='text-5xl font-extrabold'>{detail.serviceName}</h1>
                <h5 className='text-accent text-xl'>{detail.providerName}</h5>
                <h6>{detail.providerEmail}</h6>
            </div>
            <div>
                <img className='w-auto h-auto hover:w-3xs transition' src={detail.image}></img>
                <p>{detail.description}</p>
            </div>
            <div className='flex items-center justify-between'>
                <button>{detail.rating}</button>
                <button>{detail.slotsAvailable}</button>
            </div>
            <button>{detail.price} $</button>
            <button onClick={handleChange}>Go Back</button>
        </div>
    );
};

export default Details;