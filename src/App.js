// App.js
import './App.css';
import ScrollToTopAndBottom from "./scroll-to-top-and-bottom";
import ScrollToSection from "./scroll-to-top-and-bottom/scroll-to-section.jsx";
import React from "react";

function App() {
  return (
    <div className="App">
      <ScrollToTopAndBottom />
      <ScrollToSection />
    </div>
  );
}

export default App;
