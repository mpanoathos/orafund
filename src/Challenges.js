import React from "react";

function Challenges() {
  return (
    <section
      id="challenges"
      className="relative py-24 min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100"
    >
      {/* Optional: Overlay for better text contrast */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div> */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-pink-400 to-blue-400 text-transparent bg-clip-text drop-shadow-lg tracking-wider text-center relative">
            The Challenge
            <span className="block w-16 bg-gradient-to-r from-blue-400 to-blue-700 rounded-full mx-auto mt-4"></span>
          </h2>
          <p className="text-xl text-white font-medium text-center max-w-3xl mb-8">
            Africa faces critical financial inclusion barriers that prevent millions from accessing the capital they need to thrive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Challenge 1: Financing Gap */}
          <div className="bg-blue-50 bg-opacity-80 rounded-3xl shadow-2xl p-8 text-center hover:shadow-blue-200 hover:scale-105 transition-transform duration-200 border border-blue-100 backdrop-blur-lg">
            <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">$5.2T Financing Gap</h3>
            <p className="text-lg text-gray-700 font-medium">Limited loan availability for MSMEs across Africa, leaving millions of entrepreneurs without access to capital for growth and expansion.</p>
          </div>
          
          {/* Challenge 2: Gender Gap */}
          <div className="bg-blue-50 bg-opacity-80 rounded-3xl shadow-2xl p-8 text-center hover:shadow-blue-200 hover:scale-105 transition-transform duration-200 border border-blue-100 backdrop-blur-lg">
            <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Gender Gap in Access</h3>
            <p className="text-lg text-gray-700 font-medium">Women entrepreneurs face significant barriers to financial services, with 200M+ women in Africa lacking access to formal banking and credit facilities.</p>
          </div>
          
          {/* Challenge 3: Refugee Exclusion */}
          <div className="bg-blue-50 bg-opacity-80 rounded-3xl shadow-2xl p-8 text-center hover:shadow-blue-200 hover:scale-105 transition-transform duration-200 border border-blue-100 backdrop-blur-lg">
            <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Refugee Exclusion</h3>
            <p className="text-lg text-gray-700 font-medium">5M+ refugees across Africa are systematically excluded from traditional banking systems, preventing them from rebuilding their lives through entrepreneurship.</p>
          </div>
        </div>
        
        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-blue-50 bg-opacity-80 rounded-2xl p-6 text-center border border-blue-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">200M+</div>
            <div className="text-gray-700 font-medium">Women in Africa</div>
          </div>
          <div className="bg-blue-50 bg-opacity-80 rounded-2xl p-6 text-center border border-blue-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">400M+</div>
            <div className="text-gray-700 font-medium">Youth Population</div>
          </div>
          <div className="bg-blue-50 bg-opacity-80 rounded-2xl p-6 text-center border border-blue-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">5M+</div>
            <div className="text-gray-700 font-medium">Refugees</div>
          </div>
          <div className="bg-blue-50 bg-opacity-80 rounded-2xl p-6 text-center border border-blue-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
            <div className="text-gray-700 font-medium">Under Age 25</div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <a
            href="#products"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:from-blue-700 hover:to-blue-500 transition-transform duration-200"
          >
            <span className="mr-2">Our Solution</span>
            <svg className="inline w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Challenges;