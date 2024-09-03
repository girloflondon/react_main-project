import React, { useState, useEffect } from "react";
import styles from "./knowledgeTest.module.css";
import Card from "../Card/Card";
import database from "../../database";

function KnowledgeTest() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardId, setCardId] = useState(1);

  function pressBack() {
    setCurrentIndex((index) => (index === 0 ? database.length - 1 : index - 1));
  }
  function pressNext() {
    setCurrentIndex((index) => (index === database.length - 1 ? 0 : index + 1));
  }

  useEffect(() => {
    setCardId(`${currentIndex + 1} / ${database.length}`);
  }, [currentIndex]);
  return (
    <React.Fragment>
      <div className={styles.container}>
        <button onClick={pressBack} className={styles.buttonBack}>
          {" "}
        </button>
        <div className={styles.card}>
          <Card key={database[currentIndex]} {...database[currentIndex]} />
          <p className={styles.cardIndex}>{cardId}</p>
        </div>
        <button onClick={pressNext} className={styles.buttonForward}></button>
      </div>
    </React.Fragment>
  );
}

export default KnowledgeTest;
