function Home() {
    return (
      <section
        id="home"
        className="py-32 min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: "url('/lend.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Optional: Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-10 z-0"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl mx-auto bg-white bg-opacity-90 rounded-3xl shadow-2xl p-12 text-center backdrop-blur-lg border border-blue-100 relative">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-pink-400 to-blue-400 text-transparent bg-clip-text drop-shadow-lg tracking-wider animate-gradient-x">
              Welcome to <span className="text-blue-700">Oriri Africa Fund</span>
            </h1>
            <p className="text-xl text-gray-700 mb-10 font-medium">
              Oriri Africa Fund is a Rwanda-based company founded in 2024, driving financial inclusion and empowering underserved entrepreneurs in Rwanda.
            </p>
            <a
              href="#challenges"
              className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold rounded-full shadow-lg border-2 border-white hover:scale-105 hover:from-blue-700 hover:to-blue-500 transition-transform duration-200 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              <span className="relative flex items-center">
                <span className="mr-2">Learn More</span>
                <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center text-white">
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Home;