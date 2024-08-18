import React from 'react';

function Cards() {
  return (
    <div className="p-8 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Health Tip 1" 
            className="rounded-t-lg w-full h-48 object-cover"
          />
          <h2 className="text-xl font-semibold mt-4">Health Tip 1</h2>
          <p className="mt-2 text-gray-600">
            Stay hydrated by drinking at least 8 cups of water a day to maintain good health.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Health Tip 2" 
            className="rounded-t-lg w-full h-48 object-cover"
          />
          <h2 className="text-xl font-semibold mt-4">Health Tip 2</h2>
          <p className="mt-2 text-gray-600">
            Regular exercise helps improve cardiovascular health and strengthens muscles.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Health Tip 3" 
            className="rounded-t-lg w-full h-48 object-cover"
          />
          <h2 className="text-xl font-semibold mt-4">Health Tip 3</h2>
          <p className="mt-2 text-gray-600">
            Eating a balanced diet rich in fruits and vegetables boosts your immune system.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
