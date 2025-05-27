import React from 'react';

const MainBody = () => {
  return (
    <div className="min-h-screen w-full px-2 sm:px-4 md:px-6 py-4">
      <h2 className="text-xl sm:text-2xl font-sans text-purple-600 mb-4">
        Dashboard Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white w-full p-4 rounded shadow text-center">
          <h3 className="text-base sm:text-lg font-sans text-gray-700">Completed Tasks</h3>
          <p className="text-xl sm:text-2xl text-green-600 mt-2">12</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white w-full p-4 rounded shadow text-center">
          <h3 className="text-base sm:text-lg font-sans text-gray-700">Incomplete Tasks</h3>
          <p className="text-xl sm:text-2xl text-yellow-500 mt-2">5</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white w-full p-4 rounded shadow text-center">
          <h3 className="text-base sm:text-lg font-sans text-gray-700">Overdue Tasks</h3>
          <p className="text-xl sm:text-2xl text-red-600 mt-2">3</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white w-full p-4 rounded shadow text-center">
          <h3 className="text-base sm:text-lg font-sans text-gray-700">Total Tasks</h3>
          <p className="text-xl sm:text-2xl text-blue-600 mt-2">20</p>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
