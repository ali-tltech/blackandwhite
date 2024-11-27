import React, { useState } from 'react'

const playersData = [
  {
    id: 1,
    name: 'Michael Rodriguez',
    team: 'Warriors',
    position: 'Forward',
    goals: 12,
    assists: 5,
    yellowCards: 2,
    redCards: 0
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    team: 'Strikers',
    position: 'Midfielder',
    goals: 8,
    assists: 10,
    yellowCards: 1,
    redCards: 0
  }
]

const Players = () => {
  const [players, setPlayers] = useState(playersData)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-tournament-primary flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Tournament Players
        </h1>
        <button className="bg-tournament-primary text-white px-4 py-2 rounded-lg flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Player
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Team</th>
              <th className="p-3 text-left">Position</th>
              <th className="p-3 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                Goals
              </th>
              <th className="p-3 text-center">Assists</th>
              <th className="p-3 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Y. Cards
              </th>
              <th className="p-3 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4                  c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                R. Cards
              </th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{player.name}</td>
                <td className="p-3">{player.team}</td>
                <td className="p-3">{player.position}</td>
                <td className="p-3 text-center">{player.goals}</td>
                <td className="p-3 text-center">{player.assists}</td>
                <td className="p-3 text-center">{player.yellowCards}</td>
                <td className="p-3 text-center">{player.redCards}</td>
                <td className="p-3 text-center">
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() =>
                      setPlayers(players.filter((p) => p.id !== player.id))
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Players;
