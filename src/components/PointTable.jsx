import React from 'react';

const BarChartIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3v18m0-18h4m10 0h4m0 0v18m0-18h-4m0 4h4m-4 4h4M7 21v-9m0 0h4m0 0v9M7 21H3"
      />
    </svg>
  );
// Individual Section Components
const PointTable = () => (
  <div className="bg-black shadow rounded-lg p-4">
    <h2 className="text-lg font-semibold mb-4 flex items-center">
      <BarChartIcon className="mr-2" /> Point Table
    </h2>
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-gray-800">
          <th className="p-2 text-left">Team</th>
          <th className="p-2">P</th>
          <th className="p-2">W</th>
          <th className="p-2">D</th>
          <th className="p-2">L</th>
          <th className="p-2">Pts</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2">Team A</td>
          <td className="p-2 text-center">5</td>
          <td className="p-2 text-center">4</td>
          <td className="p-2 text-center">1</td>
          <td className="p-2 text-center">0</td>
          <td className="p-2 text-center">13</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default PointTable;