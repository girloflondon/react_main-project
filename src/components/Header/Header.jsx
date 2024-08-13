import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>MEMO CARDS</h1>
    </div>
  );
}

export default Header;
