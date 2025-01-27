import React from 'react';

const SectionTwo = () => {
  const features = [
    {
      title: 'Smart Lists',
      description:
        'Create and manage multiple shopping lists with smart categorization and priority settings.',
      icon: <i className="fa-solid fa-check"></i>,
    },
    {
      title: 'Price History',
      description:
        'Track price changes over time and get notified when your favorite items go on sale.',
      icon: <i className="fa-regular fa-clock"></i>,
    },
    {
      title: 'Mobile Ready',
      description:
        'Access your lists anywhere with our mobile-friendly design and offline support.',
      icon: <i className="fa-solid fa-mobile"></i>,
    },
  ];

  return (
    <div className="bg-green-50 py-10">

      <div className="text-center mb-8 px-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Everything you need to shop smarter
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          Simple yet powerful features to make grocery shopping a breeze
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center"
          >
            <div className="text-green-500 text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
