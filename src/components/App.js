import "../styles/App.css";
import React from "react";
import Header from "./Header.js";
import Navbar from "./Navbar.js";
import InfoCards from "./InfoCards.js";
import SecurityActivity from "./SecurityActivity.js";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <InfoCards />
      <SecurityActivity />
    </div>
  );
}

export default App;
