import React, { useState } from 'react'

const matchesData = [
  {
    id: 1,
    teamA: 'Warriors',
    teamB: 'Strikers',
    date: '2024-01-15',
    time: '18:00',
    venue: 'Main Stadium',
    status: 'Upcoming'
  },
  {
    id: 2,
    teamA: 'Eagles',
    teamB: 'Titans',
    date: '2024-01-10',
    time: '19:30',
    venue: 'City Ground',
    status: 'Completed'
  }
]

const Matches = () => {
  const [matches, setMatches] = useState(matchesData)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-tournament-primary flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0 0 10 9.87v4.263a1 1 0 0 0 1.555.832l3.197-2.132a1 1 0 0 0 0-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
          </svg>
          Tournament Matches
        </h1>
        <button className="bg-tournament-primary text-white px-4 py-2 rounded-lg">
          Add New Match
        </button>
      </div>

      <div className="grid gap-4">
        {matches.map((match) => (
          <div 
            key={match.id} 
            className="bg-white shadow rounded-lg p-4 flex items-center justify-between"
          >
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="font-bold">{match.teamA}</div>
                <div className="text-sm text-gray-500">vs</div>
                <div className="font-bold">{match.teamB}</div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-tournament-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {match.date}
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-tournament-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {match.time}
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-tournament-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-2 2h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  {match.venue}
                </div>
              </div>
            </div>
            
            <div>
              <span className={`
                px-3 py-1 rounded-full text-sm
                ${match.status === 'Upcoming' 
                  ? 'bg-yellow-100 text-yellow-800' 
                  : 'bg-green-100 text-green-800'
                }
              `}>
                {match.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Matches