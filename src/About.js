import { AcademicCapIcon } from '@heroicons/react/24/outline';

function About() {
  return (
    <section
      id="about"
      className="relative py-32 min-h-[60vh] flex items-center justify-center overflow-hidden"
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
      <div className="relative z-10 max-w-4xl mx-auto bg-white bg-opacity-90 rounded-3xl shadow-2xl p-12 text-center backdrop-blur-lg border border-blue-100">
        <AcademicCapIcon className="h-16 w-16 mx-auto text-blue-600 mb-6 drop-shadow-lg animate-bounce" />
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-pink-400 to-blue-400 text-transparent bg-clip-text drop-shadow-lg tracking-wider relative">
          About Us
          <span className="block w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-700 rounded-full mx-auto mt-4"></span>
        </h2>
        <p className="text-xl text-gray-700 mb-8 font-medium">
          At Oriri Africa Fund, we are transforming financial inclusion in Rwanda by empowering underserved MSMEs, women, and refugees. Through innovative financial solutions, we aim to drive economic growth and sustainable development, fostering a more inclusive and prosperous future for the region.
        </p>
        
        {/* Statistics/Achievements */}
        <div className="flex justify-center mb-8">
          <div className="bg-blue-50 bg-opacity-60 rounded-xl p-6 border border-blue-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">2024</div>
            <div className="text-gray-700 font-medium">Founded</div>
          </div>
        </div>
        
        {/* Enhanced Quote */}
        <blockquote className="italic text-blue-700 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 mt-8 shadow-inner border border-blue-200 relative">
          <svg className="w-8 h-8 text-blue-400 absolute top-4 left-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <div className="ml-8">
            "Empowering communities, transforming lives."
          </div>
        </blockquote>
        
        {/* Call to Action */}
        <div className="mt-8">
          <a
            href="#services"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:from-blue-700 hover:to-blue-500 transition-transform duration-200"
          >
            <span className="mr-2">Our Goals</span>
            <svg className="inline w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;