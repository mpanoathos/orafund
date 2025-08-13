import React from "react";

function Services() {
  return (
    <section id="services" className="relative py-32 min-h-[60vh] flex items-center justify-center overflow-hidden"
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700 drop-shadow-2xl tracking-wider text-center relative">
            Goals
            <span className="block w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-700 rounded-full mx-auto mt-4"></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center mb-12">
          {/* Card 1 - Mission */}
          <div className="bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-200 border border-blue-100 backdrop-blur-lg">
            <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Mission</h3>
            <p className="text-lg text-gray-700 font-medium">To provide accessible, technology-driven financial solutions that empower underserved MSMEs—especially women, youth, and refugees—in Rwanda and Sub-Saharan Africa, fostering inclusive economic growth and long-term resilience</p>
          </div>
          {/* Card 2 - Vision */}
          <div className="bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-200 border border-blue-100 backdrop-blur-lg">
            <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Vision</h3>
            <p className="text-lg text-gray-700 font-medium">A financially inclusive Africa where women, youth, and refugees have the tools and capital they need to thrive, create jobs, and drive sustainable economic development.</p>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:from-blue-700 hover:to-blue-500 transition-transform duration-200"
          >
            <span className="mr-2">Get In Touch</span>
            <svg className="inline w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
