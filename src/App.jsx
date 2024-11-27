import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Matches from './pages/Matches';
import Teams from './pages/Teams';
import Players from './pages/Players';
import LineUpgenerator from './components/LineUpgenerator';

function App() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImage((prev) => !prev); // Toggle image visibility every 10 seconds
    }, 5000); // 10 seconds

    // Cleanup interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="flex h-screen w-screen font-mono bg-gray-300">
        <Sidebar />
        <main className="flex-1 w-full h-full p-6 overflow-y-auto">
          {/* Popup Image */}
          {showImage && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-opacity duration-500">
              <img 
                src="https://tenor.com/view/i-am-innocent-suraj-venjaramoodu-chattambinadu-malayalam-innocent-gif-5215523095358934739.gif" 
                className="h-30 w-auto" 
                alt="Popup smile"
              />
            </div>
          )}

          {/* Routes and other content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/players" element={<Players />} />
            <Route path="/line-up" element={<LineUpgenerator />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
