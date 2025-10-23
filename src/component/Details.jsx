import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const Details = () => {
  const [detail, setDetail] = useState(null);
  const { id } = useParams();
  const datas = useLoaderData();
  const navigate = useNavigate();

  const handleChange = () => {
    navigate(`/`);
  };

  useEffect(() => {
    const filteredData = datas.find((data) => data.serviceId == id);
    setDetail(filteredData);
  }, [id, datas]);

  if (!detail) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold text-gray-500 animate-pulse">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-5xl font-extrabold text-gray-900">{detail.serviceName}</h1>
        <h5 className="text-indigo-600 text-xl font-medium">{detail.providerName}</h5>
        <h6 className="text-gray-500">{detail.providerEmail}</h6>
      </div>

      
      <div className="flex flex-col md:flex-row gap-8 items-start bg-white shadow-lg rounded-xl p-6">
        <img
          className="w-full md:w-1/2 h-auto rounded-lg object-cover hover:scale-105 transition-transform duration-300"
          src={detail.image}
          alt={detail.serviceName}
        />
        <p className="text-gray-700 text-lg md:w-1/2">{detail.description}</p>
      </div>

      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-indigo-50 text-indigo-700 font-semibold py-3 rounded-lg text-center shadow">{detail.rating} ⭐</div>
        <div className="bg-green-50 text-green-700 font-semibold py-3 rounded-lg text-center shadow">{detail.slotsAvailable} Slots</div>
        <div className="bg-yellow-50 text-yellow-700 font-semibold py-3 rounded-lg text-center shadow">{detail.price} $</div>
        <button
          onClick={handleChange}
          className="bg-red-500 text-white font-semibold py-3 rounded-lg shadow hover:bg-red-600 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Details;
