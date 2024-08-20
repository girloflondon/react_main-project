import React from "react";
import styles from "./card.module.css";
import EditButton from "../EditButton/EditButon";
import DeleteButton from "../DeleteButton/DeleteButton";
import RevealButton from "../RevealButton/RevealButton";

function Card(props) {
  const { word, translation, partOfSpeech } = props;
  return (
    <React.Fragment>
      <div className={styles.card}>
        <div className={styles.cardContents}>
          <div className={styles.word}>{word}</div>
          <div className={styles.translation}>{translation}</div>
          <div className="partOfSpeech">{partOfSpeech}</div>
        </div>
        <div className={styles.cardButtons}>
          <RevealButton />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
