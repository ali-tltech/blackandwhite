import React, { useState } from 'react'

const teamsData = [
  {
    id: 1,
    name: 'Warriors',
    coach: 'John Doe',
    players: 12,
    logo: '⚽'
  },
  {
    id: 2,
    name: 'Strikers',
    coach: 'Jane Smith',
    players: 10,
    logo: '🏆'
  }
]

const Teams = () => {
  const [teams, setTeams] = useState(teamsData)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-tournament-primary flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.768-.231-1.484-.634-2.026M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.768.231-1.484.634-2.026M14 10h2M2 10h20M2 10a2 2 0 002 2h16a2 2 0 002-2M4 10a2 2 0 100-4h16a2 2 0 110 4m0 0v10" />
          </svg>
          Tournament Teams
        </h1>
        <button className="bg-tournament-primary text-white px-4 py-2 rounded-lg flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Team
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teams.map((team) => (
          <div 
            key={team.id} 
            className="bg-white shadow rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">{team.logo}</div>
              <span className="bg-tournament-primary text-white px-3 py-1 rounded-full text-xs">
                {team.players} Players
              </span>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">{team.name}</h2>
              <div className="flex items-center text-sm text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Coach: {team.coach}
              </div>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0H5m-2 0h2m12 0h2m-2 0V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10m14 0h2m-2 0v2m2-2H5m14 0v2" />
                </svg>
                Tournament Team
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="flex-grow bg-gray-100 text-gray-700 py-2 rounded-lg">
                View Details
              </button>
              <button className="flex-grow bg-tournament-primary text-white py-2 rounded-lg">
                Edit Team
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Teams