import React from 'react';
import logo from '../assets/Logo.png';
const Home = () => {
  return (
    <div className="space-y-2">
      {/* Header */}
     <div className="flex gap-3  flex-wrap"> 
      <div className='h-12 bg-black rounded-full w-12 flex justify-center items-center'>
        <img src={logo} className='h-12 w-12' alt="" />
      </div>
      <h1 className="text-3xl font-bold text-black mb-6">
        Black and White Football Club
      </h1>
      </div>

      {/* Hero Image */}
      <div
        className="w-full h-[400px] bg-cover relative rounded-3xl bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/people-soccer-stadium_23-2151548562.jpg?t=st=1732736066~exp=1732739666~hmac=d4b6bf6ea23e06071fcd7c3108e601a284932345be72e6a9a830d4fa9a3c5c2a&w=900')",
        }}
      >
        <section className="bg-gradient-to-t from-black absolute flex flex-col justify-end inset-0 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p>
          Black and White Football Club is committed to promoting the love of
          football in our community. Our team thrives on sportsmanship, teamwork,
          and the passion for the beautiful game. From grassroots development to
          professional matches, we are proud to unite fans and players alike.
        </p>
      </section>
      </div>

      {/* About Section */}
      

      {/* Latest Events Section */}
      <section className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Latest Events</h2>
        <ul className="space-y-4">
          <li className="border-b border-gray-700 pb-2">
            <h3 className="text-lg font-semibold">Championship Final</h3>
            <p className="text-sm">Date: 12th December | Location: Stadium XYZ</p>
          </li>
          <li className="border-b border-gray-700 pb-2">
            <h3 className="text-lg font-semibold">Youth Training Program</h3>
            <p className="text-sm">Date: 18th December | Location: Training Center</p>
          </li>
        </ul>
      </section>

      {/* Recent Events Section */}
      <section className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Recent Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Victory Celebration</h3>
            <p className="text-sm">
              Our team celebrated a thrilling victory last month, bringing home
              the championship trophy!
            </p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Charity Match</h3>
            <p className="text-sm">
              Hosted a charity match to raise funds for local schools, bringing
              smiles to many young faces.
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="bg-gray-800 text-white  rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline"
          >
            Instagram
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
