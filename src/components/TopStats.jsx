import React from 'react';
import StatsCard from './StatsCard';

// Individual Section Components

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
const TopStats = () => (
  <div className="grid grid-cols-2 gap-4">
    <StatsCard
      title="Top Goals"
      icon={<TrophyIcon />}
      items={['Player A - 12 Goals', 'Player B - 10 Goals']}
    />
    <StatsCard
      title="Top Assists"
      icon={<GoalIcon />}
      items={['Player X - 8 Assists', 'Player Y - 6 Assists']}
    />
  </div>
);

export default TopStats;