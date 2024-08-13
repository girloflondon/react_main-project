import React from "react";
import "./card.module.css";
import CardContents from "../CardContents/CardContents";
import CardButtons from "../CardButtons/CardButtons";

function Card() {
  return (
    <React.Fragment>
      <div className="card">
        <CardContents
          word="das Beispiel"
          translation="перевод, образец"
          partOfSpeech="noun"
        />
        <CardButtons />
      </div>
    </React.Fragment>
  );
}

export default Card;
