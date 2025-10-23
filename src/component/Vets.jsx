import React, { useEffect, useState } from 'react';

const Vets = () => {
  const [vets, setVets] = useState([]);

  useEffect(() => {
    fetch('/vets.json')
      .then(res => res.json())
      .then(data => setVets(data));
  }, []);

  return (
    <section className="w-11/12 mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Meet Our Expert Vets
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {vets.map(vet => (
          <div
            key={vet.id}
            className="bg-white w-80 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1"
          >
            <img src={vet.image} alt={vet.name} className="w-full h-56 object-cover" />
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold text-gray-800">{vet.name}</h3>
              <p className="text-accent font-medium">{vet.specialty}</p>
              <p className="text-gray-600 text-sm mt-2">{vet.experience}</p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vets;
