import React, { useState, useContext } from "react";
import Card from "../Card/Card";
import styles from "./cardList.module.css";
import database from "../../database";
import AddButton from "../AddButton/AddButton";
import { WordContext } from "../WordContext/WordContext";
//import Masculin from "./Themes/theme-masculine.module.css";
//import Feminine from "./Themes/theme-feminine.module.css";
//import Neutral from "./Themes/theme-neutral.module.css";
//import Phrase from "./Themes/theme-phrase.module.css";

export default function CardList() {
  const [wordsLearned, setWordsLearned] = useState(0);
  const { words, loading, error } = useContext(WordContext);

  const handleWordLearned = () => {
    setWordsLearned(wordsLearned + 1);
  };

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  return (
    <React.Fragment>
      <div className={styles.counter}>
        Изучено слов: {wordsLearned} из {database.length}
      </div>
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
