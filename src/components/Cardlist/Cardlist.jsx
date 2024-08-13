import React from "react";
import Card from "../Card/Card";
import "./cardList.module.css";

function Cardlist() {
  return (
    <React.Fragment>
      <div className="cardlist">
        <Card />
        <Card />
        <Card />
      </div>
    </React.Fragment>
  );
}

export default Cardlist;
