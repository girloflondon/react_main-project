import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import CardList from "./components/CardList/CardList";
import KnowledgeTest from "./components/KnowledgeTest/KnowledgeTest";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import { WordProvider } from "./components/WordContext/WordContext";

function App() {
  return (
    <Router>
      <WordProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cards" element={<CardList />} />
          <Route path="/test" element={<KnowledgeTest />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </WordProvider>
    </Router>
  );
}

export default App;
