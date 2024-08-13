import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <div className="app-container">
        <Header />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
