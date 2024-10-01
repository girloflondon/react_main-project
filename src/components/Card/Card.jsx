import React, { useState, useEffect, useRef } from "react";
import styles from "./card.module.css";

function Card(props) {
  const { word, translation, partOfSpeech, onWordLearned } = props;
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);

  const handleRevealClick = () => {
    setIsVisible(true);
    onWordLearned();
  };

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
            ref={buttonRef}
            onClick={handleRevealClick}
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
