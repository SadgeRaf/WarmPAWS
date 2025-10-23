import React, { useEffect, useState } from 'react';

const Tips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch('/tips.json')
      .then(res => res.json())
      .then(data => setTips(data));
  }, []);

  return (
    <section className="tip-section w-11/12 mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Winter Care Tips for Pets
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="tip-card bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1"
          >
            <img
              src={tip.image}
              alt={tip.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                {tip.title}
              </h3>
              <p className="text-gray-600 text-sm">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tips;
