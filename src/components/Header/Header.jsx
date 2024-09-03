import styles from "./header.module.css";
import React from "react";
import Menu from "../Menu/Menu";

function Header() {
  return (
    <React.Fragment>
      <div className={styles.header}>
        <h1 className={styles.title}>MEMO CARDS</h1>
        <Menu />
      </div>
    </React.Fragment>
  );
}

export default Header;
