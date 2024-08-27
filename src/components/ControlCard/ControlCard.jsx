import React from "react";
import styles from "./controlCard.module.css";
import EditButton from "../EditButton/EditButon";
import DeleteButton from "../DeleteButton/DeleteButton";

export default function ControlCard() {
  return (
    <React.Fragment>
      <div className={styles.controlCard}>
        <EditButton />
        <DeleteButton />
      </div>
    </React.Fragment>
  );
}
