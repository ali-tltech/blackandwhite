import React from "react";
const StatsCard = ({ title, icon, items }) => (
    <div className="bg-black shadow rounded-lg p-4">
      <h3 className="flex items-center font-semibold mb-2">
        {icon} <span className="ml-2">{title}</span>
      </h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
  
  export default StatsCard;