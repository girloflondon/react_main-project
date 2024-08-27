import React from "react";
import Header from "./components/Header/Header";
//import CardList from "./components/CardList/CardList";
import Footer from "./components/Footer/Footer";
import KnowledgeTest from "../src/components/KnowledgeTest/KnowledgeTest";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <KnowledgeTest />
      {/*<CardList />*/}
      <Footer />
    </React.Fragment>
  );
}

export default App;
