import React from "react";
import styles from "./card.module.css";
import Element from "../Element/Element";
import EditButton from "../EditButton/EditButon";
import DeleteButton from "../DeleteButton/DeleteButton";

function Card(props) {
  const { word, translation, partOfSpeech } = props;
  return (
    <React.Fragment>
      <div className={styles.card}>
        <div className={styles.cardContents}>
          <div className="word">{word}</div>
          <Element />
          <div className="translation">{translation}</div>
          <Element />
          <div className="partOfSpeech">{partOfSpeech}</div>
        </div>
        <div className={styles.cardButtons}>
          <EditButton />
          <DeleteButton />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
