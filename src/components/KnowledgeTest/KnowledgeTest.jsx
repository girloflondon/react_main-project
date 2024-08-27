import React, { useState } from "react";
import styles from "./knowledgeTest.module.css";
import Card from "../Card/Card";
import database from "../../database";

function KnowledgeTest() {
  const [currentIndex, setCurrentIndex] = useState(0);
  function pressBack() {
    setCurrentIndex((index) => (index === 0 ? database.length - 1 : index - 1));
  }
  function pressNext() {
    setCurrentIndex((index) => (index === database.length - 1 ? 0 : index + 1));
  }
  return (
    <React.Fragment>
      <div className={styles.container}>
        <button onClick={pressBack} className={styles.buttonBack}>
          BACK
        </button>
        <Card key={database[currentIndex]} {...database[currentIndex]} />
        <button onClick={pressNext} className={styles.buttonForward}>
          NEXT
        </button>
      </div>
    </React.Fragment>
  );
}

export default KnowledgeTest;
