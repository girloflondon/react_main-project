import React, { useState } from "react";
import styles from "./card.module.css";
//import RevealButton from "../RevealButton/RevealButton";
//import ControlCard from "../ControlCard/ControlCard";
//import Control from "../ControlCard/ControlCard";

function Card(props) {
  const { word, translation, partOfSpeech } = props;

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.cardContents}>
        <div className={styles.word}>{word}</div>
        <div
          className={`${!isVisible ? styles.translation : styles.invisible}`}
        >
          {translation}
        </div>
        <div
          className={`${!isVisible ? styles.partOfSpeech : styles.invisible}`}
        >
          {partOfSpeech}
        </div>
      </div>
      <div className={styles.cardButtons}>
        {!isVisible && (
          <button
            onClick={() => setIsVisible(!isVisible)}
            className={styles.revealButton}
          >
            ПРОВЕРИТЬ
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
