import React from "react";
import StatsCard from "./StatsCard";

const TrophyIcon = () => (
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
        d="M3 5h4a1 1 0 01.707.293l2 2A1 1 0 0110 8h4a1 1 0 01.293-.707l2-2A1 1 0 0117 5h4m-2 2a4 4 0 01-4 4H9a4 4 0 01-4-4M5 15h14v1a3 3 0 01-3 3h-8a3 3 0 01-3-3v-1z"
      />
    </svg>
  );
  
  const GoalIcon = TrophyIcon;
  const CardIcon = TrophyIcon;
  const ClockIcon = TrophyIcon;
const CardStats = () => (
    <div className="grid grid-cols-2 gap-4 mt-4">
      <StatsCard
        title="Yellow Cards"
        icon={<CardIcon className="text-yellow-500" />}
        items={['Player M - 3 Cards', 'Player N - 2 Cards']}
      />
      <StatsCard
        title="Red Cards"
        icon={<CardIcon className="text-red-500" />}
        items={['Player P - 1 Card']}
      />
    </div>
  );

  export default CardStats;