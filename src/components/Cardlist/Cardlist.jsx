import React from "react";
import Card from "../Card/Card";
import styles from "./cardList.module.css";

function Cardlist() {
  return (
    <React.Fragment>
      <div className={styles.cardlist}>
        <Card
          word="das Beispiel"
          translation="пример, образец"
          partOfSpeech="noun"
        />
        <Card
          word="der Auftrag"
          translation="заказ, поручение"
          partOfSpeech="noun"
        />
        <Card
          word="grob"
          translation="грубый, невежливый"
          partOfSpeech="adjektiv"
        />
      </div>
    </React.Fragment>
  );
}

export default Cardlist;
