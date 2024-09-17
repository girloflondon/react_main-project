import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./cardList.module.css";
import database from "../../database";
import AddButton from "../AddButton/AddButton";
//import Masculin from "./Themes/theme-masculine.module.css";
//import Feminine from "./Themes/theme-feminine.module.css";
//import Neutral from "./Themes/theme-neutral.module.css";
//import Phrase from "./Themes/theme-phrase.module.css";

export default function CardList() {
  const [wordsLearned, setWordsLearned] = useState(0);

  const handleWordLearned = () => {
    setWordsLearned(wordsLearned + 1);
  };

  return (
    <React.Fragment>
      <div className={styles.counter}>Изучено слов: {wordsLearned}</div>
      <div className={styles.cardlist}>
        <AddButton />
        {database.map((item) => {
          return (
            <Card key={item.id} {...item} onWordLearned={handleWordLearned} />
          );
        })}
      </div>
    </React.Fragment>
  );
}
