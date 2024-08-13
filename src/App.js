import React from "react";
import Header from "./components/Header/Header";
import CardList from "./components/CardList/CardList";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <CardList />
      <Footer />
    </React.Fragment>
  );
}

export default App;
