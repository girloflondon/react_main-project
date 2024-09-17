import React, { useState, useEffect, useRef } from "react";
import styles from "./card.module.css";

function Card(props) {
  const { word, translation, partOfSpeech, onWordLearned } = props;
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null); // Создаём ссылку на кнопку

  useEffect(() => {
    // Устанавливаем фокус на кнопку при рендере
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);

  const handleRevealClick = () => {
    setIsVisible(true);
    onWordLearned(); // Увеличиваем счетчик при нажатии на кнопку
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
            ref={buttonRef} // Привязываем кнопку к ссылке
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
