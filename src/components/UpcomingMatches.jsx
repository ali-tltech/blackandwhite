
import React from "react";
const UpcomingMatches = () => (
    <div className="bg-black shadow rounded-lg p-4 mt-4">
      <h2 className="text-lg font-semibold mb-4 flex items-center">
        {/* <ClockIcon className="mr-2" /> Upcoming Matches */}
      </h2>
      <ul>
        {[
          { match: 'Team A vs Team B', date: '12 Dec, 6 PM' },
          { match: 'Team C vs Team D', date: '15 Dec, 7 PM' },
        ].map((item, index) => (
          <li key={index} className="flex justify-between p-2 border-b">
            <span>{item.match}</span>
            <span>{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default UpcomingMatches;