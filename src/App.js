import React from "react";
import Navbar from './Navbar';
import Home from './Home';
import Challenges from './Challenges';
// import About from './About';
import Products from './Products';
// import Services from './Services';
// import Team from './Team';
import Contact from './Contact';

function App() {
  return (
    <div
      className="min-h-screen animated-gradient text-gray-900"
      style={{
        backgroundImage: "url('/pattern.svg')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto"
      }}
    >
      <Navbar />
      <Home />
      {/* <About /> */}
      <Challenges />
      <Products />
      {/* <Services /> */}
      {/* <Team /> */}
      <Contact />
    </div>
  );
}

export default App;
