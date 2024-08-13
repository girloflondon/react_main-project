import React from "react";
import Element from "../Element/Element";
import "./cardContents.module.css";

function CardContents(props) {
  const { word, translation, partOfSpeech } = props;
  return (
    <React.Fragment>
      <div className="container">
        <div className="word">{word}</div>
        <Element />
        <div className="translation">{translation}</div>
        <Element />
        <div className="partOfSpeech">{partOfSpeech}</div>
      </div>
    </React.Fragment>
  );
}

export default CardContents;
