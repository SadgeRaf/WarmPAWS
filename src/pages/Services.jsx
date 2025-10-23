import React from 'react';

const services = [
  {
    id: 1,
    name: 'Pet Grooming',
    provider: 'Happy Paws',
    email: 'contact@happypaws.com',
    image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80',
    description:
      'Professional grooming services for your pets, including baths, haircuts, and nail trims to keep your pets healthy and happy.',
    rating: 4.8,
    slotsAvailable: 12,
    price: 50,
  },
  {
    id: 2,
    name: 'Pet Sitting',
    provider: 'Cozy Pets',
    email: 'info@cozypets.com',
    image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80',
    description:
      'Reliable pet sitting services for your furry friends while you are away. We provide love, attention, and exercise for your pets.',
    rating: 4.9,
    slotsAvailable: 5,
    price: 35,
  },
  {
    id: 3,
    name: 'Veterinary Care',
    provider: 'Healthy Paws Clinic',
    email: 'vet@healthypaws.com',
    image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80',
    description:
      'Full veterinary services including checkups, vaccinations, and emergency care to keep your pets in top condition.',
    rating: 4.7,
    slotsAvailable: 8,
    price: 80,
  },
];

const Services = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-semibold text-gray-800">{service.name}</h3>
              <p className="text-indigo-600 font-medium">{service.provider}</p>
              <p className="text-gray-600 text-sm">{service.email}</p>
              <p className="text-gray-700">{service.description}</p>

              <div className="flex justify-between items-center mt-4">
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-lg font-semibold shadow">{service.rating} ⭐</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg font-semibold shadow">{service.slotsAvailable} Slots</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg font-semibold shadow">{service.price} $</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
