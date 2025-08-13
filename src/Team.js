// src/Team.js
import React from "react";

function Team() {
  return (
    <section id="team" className="relative py-28 min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Remove the SVG wave at the top by deleting the following lines: */}
      {/* <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 320">
        <path fill="#fff" fillOpacity="1" d="M0,96L1440,224L1440,0L0,0Z"></path>
      </svg> */}
      <div className="container mx-auto px-4 z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text drop-shadow-lg">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center">
          {/* Team Member 1 */}
          <div className="bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-200 border border-blue-100">
            <img
              src="/innocent.png"
              alt="Innocent Murwanashyaka"
              className="w-24 h-24 mx-auto rounded-full mb-6 border-4 border-blue-100 shadow-lg object-cover"
            />
            <h3 className="text-xl font-bold text-blue-600 mb-2">Innocent Murwanashyaka</h3>
            <p className="text-lg text-gray-700 font-medium">CEO & Founder</p>
          </div>
          {/* Team Member 2 */}
          <div className="bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-200 border border-blue-100">
            <img
              src="/steven.png"
              alt="Steven Nocka"
              className="w-24 h-24 mx-auto rounded-full mb-6 border-4 border-blue-100 shadow-lg object-cover"
            />
            <h3 className="text-xl font-bold text-blue-600 mb-2">Steven Nocka</h3>
            <p className="text-lg text-gray-700 font-medium">Co-Founder & Board Chair</p>
          </div>
          {/* Team Member 3 */}
          <div className="bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-200 border border-blue-100">
            <img
              src="/sheilla.png"
              alt="Sheila Uwimana"
              className="w-24 h-24 mx-auto rounded-full mb-6 border-4 border-blue-100 shadow-lg object-cover"
            />
            <h3 className="text-xl font-bold text-blue-600 mb-2">Sheila Uwimana</h3>
            <p className="text-lg text-gray-700 font-medium">COO & Co-founder</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;