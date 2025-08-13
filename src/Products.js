import React from "react";

function Products() {
  return (
    <section id="products" className="relative py-32 min-h-[60vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/lend.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Optional: Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center mb-12">
          <h2 className="relative text-5xl md:text-6xl font-extrabold mb-6 tracking-wider text-center z-10">
            <span className="px-6 py-2 rounded-2xl bg-black bg-opacity-50 text-white shadow-lg drop-shadow-lg">
              Our <span className="text-blue-300">Solutions</span>
            </span>
            <span className="block w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-700 rounded-full mx-auto mt-4"></span>
          </h2>
          <p className="text-xl text-white font-medium text-center max-w-3xl mb-8 z-10">
            Tailored financial solutions designed to empower underserved entrepreneurs across Africa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product 1: Women Entrepreneur Loans */}
          <div className="bg-white bg-opacity-90 rounded-3xl shadow-2xl p-8 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-200 border border-blue-100 backdrop-blur-lg">
            <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Women Entrepreneur Loans</h3>
            <p className="text-lg text-gray-700 font-medium mb-6">Empowering women-led businesses with accessible capital and mentorship support.</p>
            <div className="space-y-2 mb-6 text-left">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Flexible repayment terms</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Business mentorship included</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">No collateral required</span>
              </div>
            </div>
            {/* REMOVE the Apply Now button here */}
          </div>
          
          {/* Product 2: Youth Entrepreneur Loans */}
          <div className="bg-white bg-opacity-90 rounded-3xl shadow-2xl p-8 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-200 border border-blue-100 backdrop-blur-lg">
            <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Youth Entrepreneur Loans</h3>
            <p className="text-lg text-gray-700 font-medium mb-6">Supporting young innovators with capital to turn their ideas into successful businesses.</p>
            <div className="space-y-2 mb-6 text-left">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Innovation-focused funding</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Technology support</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Networking opportunities</span>
              </div>
            </div>
            {/* REMOVE the Apply Now button here */}
          </div>
          
          {/* Product 3: Refugee Entrepreneur Loans */}
          <div className="bg-white bg-opacity-90 rounded-3xl shadow-2xl p-8 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-200 border border-blue-100 backdrop-blur-lg">
            <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Refugee Entrepreneur Loans</h3>
            <p className="text-lg text-gray-700 font-medium mb-6">Providing financial inclusion for refugees to rebuild their lives through entrepreneurship.</p>
            <div className="space-y-2 mb-6 text-left">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">No ID requirements</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Community support</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Integration assistance</span>
              </div>
            </div>
            {/* REMOVE the Apply Now button here */}
          </div>
          
          {/* Product 4: MSME Working Capital */}
          <div className="bg-white bg-opacity-90 rounded-3xl shadow-2xl p-8 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-200 border border-blue-100 backdrop-blur-lg">
            <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">MSME Working Capital</h3>
            <p className="text-lg text-gray-700 font-medium mb-6">Flexible working capital solutions to help small businesses scale and grow.</p>
            <div className="space-y-2 mb-6 text-left">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Quick approval process</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Competitive interest rates</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Growth support services</span>
              </div>
            </div>
            {/* REMOVE the Apply Now button here */}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:from-blue-700 hover:to-blue-500 transition-transform duration-200"
          >
            <span className="mr-2">Get Started Today</span>
            <svg className="inline w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Products;